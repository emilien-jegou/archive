/* emilien <emilien@emilien-lx>, 2021 */

import React from 'react';
import 'twin.macro';

interface ILoadingPage {};

export function LoadingPage({}: ILoadingPage) {
	return (
		<div tw="flex items-center justify-center h-full">
			Loading...
		</div>
	);
}

export default LoadingPage;
