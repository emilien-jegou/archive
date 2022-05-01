/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CommonHead } from './index';

export default {
	title: 'Example/CommonHead',
	component: CommonHead,
	argTypes: {},
} as Meta;

const Template: Story = args => <CommonHead {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'My Title',
	description: 'Ex scriptorem ea mel duo erat tota tellus nisi lobortis congue donec ius. Mi mucius perpetua tincidunt pro altera assum.',
};

export const Centered = Template.bind({});
Centered.args = {
	title: 'My Title',
	centered: true,
	description: 'Ex scriptorem ea mel duo erat tota tellus nisi lobortis congue donec ius. Mi mucius perpetua tincidunt pro altera assum.',
};

export const CenteredButton = Template.bind({});
CenteredButton.args = {
	title: 'My Title',
	centered: true,
	previousBtn: true,
	description: 'Ex scriptorem ea mel duo erat tota tellus nisi lobortis congue donec ius. Mi mucius perpetua tincidunt pro altera assum.',
};

export const PreviousButton = Template.bind({});
PreviousButton.args = {
	title: 'My Title',
	previousBtn: true,
	description: 'Ex scriptorem ea mel duo erat tota tellus nisi lobortis congue donec ius. Mi mucius perpetua tincidunt pro altera assum.',
};
