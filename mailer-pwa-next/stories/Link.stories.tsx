/* emilien <emilien@emilien-pc>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from 'twin.macro';

import { Link } from './index';

export default {
	title: 'Example/Link',
	component: Link,
	argTypes: {},
} as Meta;

const Template: Story = args => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {};
