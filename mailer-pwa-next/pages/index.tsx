/* emilien <emilien@emilien-lx>, 2021 */

import React, { useEffect } from 'react';
import { theme } from 'twin.macro';
import { useRouter } from 'next/router';
import { BackgroundLogo } from '@/components/static/BackgroundLogo';
import { _get } from '@/src/store/util';

const _Splash = () => (
	<BackgroundLogo
		backgroundColor={theme`colors.brand-purple.400`}
		opacity={1}
	/>
);

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			const userData = _get('userData');
			
			router.push(userData ? '/inbox' : '/onboarding');
		}, 200);
	}, []);

	return (
		<_Splash />
	);
}

