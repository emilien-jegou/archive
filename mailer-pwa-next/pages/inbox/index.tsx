/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import tw, { css, styled, theme } from 'twin.macro';
import { Icon } from '@/components/static/Icon';
import { MailCard } from '@/components/page/Inbox/MailCard';
import { MailAdd } from '@/components/Icons/custom';
import { Adjustments } from '@/components/Icons/solid';
import { SimplePageContainer } from '@/components/static/SimplePageContainer';
import { MailList } from '@/components/page/Inbox/MailList';

interface IInbox {}

const _headerStyling = css`
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const MenuGroup = styled.div(({ rtl = false }: { rtl?: boolean }) => [
	tw`flex gap-2 h-6 items-center`,
	rtl && tw`justify-end`,
]);

export const _Header = () => (
	<div tw="h-20 border-b border-gray-300 w-full">
		<SimplePageContainer css={_headerStyling}>
			<MenuGroup>
				<Icon size="lg" icon={<MailAdd />} />
			</MenuGroup>
			<h1 tw="text-3xl leading-none">Inbox</h1>
			<MenuGroup rtl>
				<div tw="bg-gray-100 h-8 w-8 flex items-center justify-center rounded-md">
					<Icon
						size="md"
						color={theme`colors.brand-purple.400`}
						icon={<Adjustments />}
					/>
				</div>
			</MenuGroup>
		</SimplePageContainer>
	</div>
);

export function Inbox({}: IInbox) {

	return (
		<div>
			<_Header />
			<MailList />
		</div>
	);
}

export default Inbox;
