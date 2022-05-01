/* emilien <emilien@emilien-pc>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from 'twin.macro';

import { Form } from './index';

export default {
	title: 'Example/Form',
	component: Form,
	argTypes: {},
} as Meta;

const Template: Story = args => <Form>{ args.children }</Form>;

export const Default = Template.bind({});
Default.args = {
	children: ([
		<p>Text</p>,
		<p>Text</p>,
		<p>Text</p>,
		<p>Text</p>,
	])
};
