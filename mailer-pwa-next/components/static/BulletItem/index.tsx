/* emilien <emilien@emilien-lx>, 2021 */

import React, { ReactNode } from 'react';
import 'twin.macro';

interface IBulletItem {
	bulletColor?: string;
	children: ReactNode;
}

export function BulletItem({
	bulletColor = 'currentColor',
	children,
}: IBulletItem) {
	return (
		<div tw="flex items-center">
			<div
				css={{ backgroundColor: bulletColor }}
				tw="w-2 h-2 mr-2 rounded-full"
			/>
			<p tw="text-xl tracking-wide">{children}</p>
		</div>
	);
}
