/* emilien <emilien@emilien-lx>, 2021 */

import React, { useState, useEffect } from 'react';
import { CommonHead } from '@/components/static/CommonHead';
import { Form } from '@/components/static/Form';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';
import { LoadingPage } from '@/components/page/LoadingPage';
import 'twin.macro';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { setUserData } from '@/src/store/user';
import { loginUser } from '@/src/api';
import { _get, _set } from '@/src/store/util';

const LoginPage = dynamic(() =>
	import('@/components/page/FirstLogin/Login').then(mod => mod.Login),
);

const EmailProvider = dynamic(() =>
	import('@/components/page/FirstLogin/EmailProvider').then(
		mod => mod.EmailProvider,
	),
);

interface IFirstLogin {}

export function FirstLogin({}: IFirstLogin) {
	const router = useRouter();
	const { step } = router.query;
	const [form, setForm] = useState({});

	const submitForm = async () => {
		if (
			['name', 'email', 'password', 'smtpimap'].find(
				x => !form[x] || form[x].length < 3,
			)
		) {
			console.error('Error in form', form);
			return;
		}
		try {
			const {
				name,
				email: mail,
				password,
				smtpimap: mail_provider,
			} = form;
			let x = await loginUser({ name, mail, password, mail_provider });
			setUserData({ ...x, name, mail, mail_provider });
			_set('userData', { ...x, name, mail, mail_provider });
			router.push('/inbox');
		} catch (e) {
			console.error(e);
		}
	};

	switch (step) {
		case undefined:
		case 'login':
			return (
				<LoginPage updateForm={data => setForm({ ...form, ...data })} />
			);
		case 'provider':
			/* Check for invalid form */
			if (
				['name', 'email', 'password'].find(
					x => !form[x] || form[x].length < 3,
				)
			) {
				router.push('/first-login');
				return <LoadingPage />;
			}

			return (
				<EmailProvider
					submit={() => submitForm()}
					updateForm={data => setForm({ ...form, ...data })}
				/>
			);
		default:
			router.push('/first-login');
			return <LoadingPage />;
	}
}

export default FirstLogin;
