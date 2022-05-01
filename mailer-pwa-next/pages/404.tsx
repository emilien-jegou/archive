/* emilien <emilien@emilien-lx>, 04/2021 */

import React from 'react';

interface IError {};

export function ErrorPage({}: IError) {
	return (
		<div>
			Woops! an Error occured!
		</div>
	);
}

export default ErrorPage;
