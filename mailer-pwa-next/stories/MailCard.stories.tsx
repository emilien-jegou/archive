/* emilien <emilien@emilien-pc>, 2021 */

import React, { ReactNode } from 'react';
import { MailCard } from './index';
import { theme } from 'twin.macro';

export default {
	title: 'ui/MailCard',
	component: MailCard,
};

const Template: Story = (args) => (
	<MailCard {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
	author: 'Emilien Jégou',
	description: 'Cras nisl magna, hendrerit id ultrices at, fermentum non nibh. Donec bibendum quam...'
	title: 'New week at the office!',
	time: '12:38pm'
};
