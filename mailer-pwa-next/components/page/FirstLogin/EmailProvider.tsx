/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { CommonHead } from '@/components/static/CommonHead';
import { Form } from '@/components/static/Form';
import { Input } from '@/components/static/Input';
import { Checkbox } from '@/components/static/Checkbox';
import { UButton } from '@/components/static/Button';
import Link from 'next/link';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';
import 'twin.macro';

interface IEmailProvider {
	updateForm: (any) => void;
	submit: () => void;
}

export function EmailProvider({ updateForm, submit }: IEmailProvider) {
	return (
		<SimplePageContainer>
			<CommonHead
				title="Add your email provider"
				description="Start using the app by adding a new user to your account"
				previousBtn={true}
				previousAction="/first-login"
			/>
			<Form>
				<Input
					onChange={(val, name) => updateForm({ [name]: val })}
					name="smtpimap"
					label="Server (IMAP/SMTP)"
					placeholder="mail.privateemail.com"
				/>
				<Checkbox name="nap" label="Use same name and password." />
				<Checkbox name="advism" label="Advanced IMAP/SMTP settings." />
				<UButton onClick={submit} size="lg" tw="mt-1">
					Continue
				</UButton>
			</Form>
		</SimplePageContainer>
	);
}

export default EmailProvider;
