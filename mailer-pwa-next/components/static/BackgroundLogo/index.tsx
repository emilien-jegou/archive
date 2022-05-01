/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import { MailBig } from "@/components/Icons/custom/";
import 'twin.macro';

interface IBackgroundLogo {
	backgroundColor?: string;
	opacity?: number;
};

/**
 * Fixed background logo with custom page color.
 *
 * @param backgroundColor - color of the background, default 'white'
 * @param opacity - opacity of the logo, default 0.4
 */
export function BackgroundLogo({ backgroundColor='white', opacity=0.4 }: IBackgroundLogo) {
	return (
		<div css={{ backgroundColor }} tw="w-screen -z-30 h-screen fixed top-0 left-0 flex items-center">
			<MailBig css={{ opacity }} tw="w-screen h-auto" />
		</div>
	);
}
