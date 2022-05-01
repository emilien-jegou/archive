/* emilien <emilien@emilien-pc>, 2021 */

import React, { ReactNode } from 'react';
import { BulletItem } from './index';
import { theme } from 'twin.macro';

export default {
	title: 'ui/BulletItem',
	component: BulletItem,
};

interface IArgs {
	children?: ReactNode;
}

const Template: Story = ({ children, bulletColor } : IArgs) => (
	<BulletItem 
		bulletColor={ bulletColor }
	>{children}</BulletItem>
);

export const Standard = Template.bind({});
Standard.args = {
	children: 'Demo text!',
};

export const BrandPurple = Template.bind({});
BrandPurple.args = {
	children: 'Demo text!',
	bulletColor: theme`colors.brand-purple.400`,
};
