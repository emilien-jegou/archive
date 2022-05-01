/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import Link from 'next/link';
import { CommonHead } from '@/components/static/CommonHead';
import { Form } from '@/components/static/Form';
import { Input } from '@/components/static/Input';
import { UButton } from '@/components/static/Button';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';
import 'twin.macro';

interface ILogin {
	updateForm: (any) => void;
}

export function Login({ updateForm }: ILogin) {
	return (
		<SimplePageContainer>
			<CommonHead
				title="Add your inbox"
				description="Start using the app by adding a new user to your account !"
			/>
			<Form>
				<Input
					onChange={(val, name) => updateForm({ [name]: val })}
					name="name"
					label="Name"
					placeholder="John"
				/>
				<Input
					onChange={(val, name) => updateForm({ [name]: val })}
					name="email"
					label="Email"
					placeholder="john.doe@mail.com"
				/>
				<Input
					onChange={(val, name) => updateForm({ [name]: val })}
					name="password"
					label="Password"
					placeholder="*****"
				/>
				<Link href="/first-login?step=provider">
					<UButton size="lg" tw="mt-1">
						Continue
					</UButton>
				</Link>
			</Form>
		</SimplePageContainer>
	);
}

export default Login;
