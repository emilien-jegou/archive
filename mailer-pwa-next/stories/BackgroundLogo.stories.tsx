/* emilien <emilien@emilien-pc>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from 'twin.macro';

import { BackgroundLogo } from './index';

export default {
	title: 'Example/BackgroundLogo',
	component: BackgroundLogo,
	argTypes: {},
} as Meta;

const Template: Story = args => <BackgroundLogo {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const BrandPurple = Template.bind({});
BrandPurple.args = {
	backgroundColor: theme`colors.brand-purple.400`,
	opacity: 1,
};
