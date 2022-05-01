/* emilien <emilien@emilien-pc>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Icon } from './index';

export default {
	title: 'Example/Icon',
	component: Icon,
	argTypes: {},
} as Meta;

const Template: Story = args => <Icon {...args} />;
import ArrowLeft from '@/components/Icons/outline/ArrowLeft';

export const Default = Template.bind({});
Default.args = {
	icon: <ArrowLeft />
};
