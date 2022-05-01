/* emilien <emilien@emilien-lx>, 2021 */

import React, { ReactNode } from 'react';
import 'twin.macro';

interface IForm {
	children: ReactNode | ReactNode[];
}

/**
 * Simple form abstraction for login/signup/settings page.
 *
 * @param children - forms element.
 */
export function Form({ children }: IForm) {
	return <div tw="flex flex-col gap-7">{children}</div>;
}

export default Form;
