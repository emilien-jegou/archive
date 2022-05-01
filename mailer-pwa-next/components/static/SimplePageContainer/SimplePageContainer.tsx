/* emilien <emilien@emilien-pc>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from 'twin.macro';
import { SimplePageContainer } from './index';

export default {
	title: 'Example/SimplePageContainer',
	component: SimplePageContainer,
	argTypes: {},
} as Meta;

const Template: Story = args => <SimplePageContainer>{ args.children }</SimplePageContainer>;

export const Default = Template.bind({});
Default.args = {
	children: ([
		<p>Text</p>,
		<p>Text</p>,
		<p>Text</p>,
		<p>Text</p>,
	])
};
