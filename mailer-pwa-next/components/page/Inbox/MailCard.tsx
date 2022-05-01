/* emilien <emilien@emilien-lx>, 04/2021 */

import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';

interface IMailCard {
	id: number;
	author: string;
	title: string;
	time: string;
	description: string;
	onClick: (number) => void;
	newMail?: boolean;
}

/**
 * MailCard.
 *
 * @param props.author - Author of the mail.
 * @param props.title - Title of the mail.
 * @param props.time - Time of receipt of the mail as a string.
 * @param props.description - Description of the mail as a string.
 * @param props.onClick - call a function with the mail_id as first argument.
 * @param props.newMail - Whether the email has been read or not.
 */
export function MailCard({
	id,
	author,
	title,
	time,
	description,
	newMail = false,
	onClick,
}: IMailCard) {
	return (
		<div
			tw="py-5 border-b border-gray-300 cursor-pointer"
			css={[!newMail && tw`bg-gray-50`]}
			onClick={(id) => onClick(id)}
		>
			<div tw="max-w-screen-md mx-auto pl-2 pr-7">
				<div tw="flex items-center gap-3">
					<div
						tw="rounded-full h-2 w-2"
						css={[newMail && tw`bg-brand-pink-400`]}
					/>
					<div tw="w-full">
						<h4 tw="text-gray-500">{author}</h4>
						<div tw="flex items-center justify-between">
							<h2 tw="text-xl tracking-wide leading-none">
								{title}
							</h2>
							<p tw="text-gray-400 leading-none">{time}</p>
						</div>
					</div>
				</div>
				<p tw="text-sm text-gray-500 mt-2 ml-5">{description}</p>
			</div>
		</div>
	);
}

export default MailCard;
