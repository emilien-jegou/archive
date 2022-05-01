/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UButton } from './index';

export default {
	title: 'Example/UButton',
	component: UButton,
	argTypes: {},
} as Meta;

const Template: Story = (args) => <UButton {...args}>{args.label}</UButton>;

export const Default = Template.bind({});
Default.args = {
	label: 'UButton',
	test: 123,
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'UButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'UButton',
	type: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
	label: 'UButton',
	size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
	label: 'UButton',
	size: 'sm',
};
