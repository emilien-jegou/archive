/* emilien <emilien@emilien-pc>, 2021 */

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input } from './index';

export default {
	title: 'Example/Input',
	component: Input,
	argTypes: {},
} as Meta;

const Template: Story = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Name',
	name: 'name',
};

export const Required = Template.bind({});
Required.args = {
	label: 'Name',
	name: 'name',
	required: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
	label: 'Name',
	name: 'name',
	placeholder: 'John Doe',
};

export const PlaceholderLong = Template.bind({});
PlaceholderLong.args = {
	label: 'Name',
	name: 'name',
	placeholder: 'Exerci cetero audiam quodsi adipisci. Omittam omnium saperet populo facilisis el id ne. Eius magna sodales mauris nemore pri vidisse morbi convenire utroque primis. Viris patrioque ad ea minimum appetere torquatos fugit. Iriure adhuc no possim nemore. Auctor torquatos sit ultrices congue nibh detracto. Quam dignissim vituperata non torquatos elit propriae.',
};

export const MaxLength = Template.bind({});
MaxLength.args = {
	label: 'Name',
	name: 'name',
	maxLength: 10,
};
