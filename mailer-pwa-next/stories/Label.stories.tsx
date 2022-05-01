/* emilien <emilien@emilien-pc>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Label } from './index';

export default {
	title: 'Example/Label',
	component: Label,
	argTypes: {},
} as Meta;

const Template: Story = args => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Name',
};

export const Required = Template.bind({});
Required.args = {
	label: 'Name',
	required: true,
};
