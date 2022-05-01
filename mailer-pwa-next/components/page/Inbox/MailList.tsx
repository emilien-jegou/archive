/* emilien <emilien@emilien-lx>, 04/2021 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MailCard } from './MailCard';
import { fetchMailList, getMailList, getMailStatus } from '@/src/store/emails';
import { useRouter } from 'next/router';
import { getUserData } from '@/src/store/user';
import 'twin.macro';
import { _get } from '@/src/store/util';

interface IMailList {}

export function MailList({}: IMailList) {
	const dispatch = useDispatch();
	const mailList = useSelector(getMailList);
	const userData = useSelector(getUserData);
	const mailStatus = useSelector(getMailStatus);
	const router = useRouter();

	useEffect(() => {
		if (mailStatus === 'idle') {
			let id = userData
				? userData.id
				: (() => {
						let t = _get('userData');
						return t && t.id;
				  })();

			if (id === undefined) {
				router.push('/first-login');
			} else {
				//dispatch(fetchMailList({ id }));
			}
		}
	}, [dispatch, mailStatus]);

	if (mailStatus === 'loading') {
		return <p tw="text-center"> Loading </p>;
	} else if (mailStatus === 'failed') {
		return <p tw="text-center"> Got an Error! </p>;
	}

	const openMail = id => router.push(`/inbox/mail`);

	let list = [];

	for (let item of mailList) {
		list.push(
			<MailCard key={item.id} {...item} onClick={id => openMail(id)} />,
		);
	}

	return <div>{list}</div>;
}

export default MailList;
