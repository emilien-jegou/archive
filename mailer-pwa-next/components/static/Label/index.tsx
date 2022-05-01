/* emilien <emilien@emilien-lx>, 2021 */

import React, { useState } from 'react';
import tw from 'twin.macro';

interface ILabel {
	label: string;
	/** Whether the field represented by the label is required or not.  */
	required?: boolean;
	htmlFor?: string;
}

/**
 * Label component to be use in conjonction with Inputs or TextArea.
 *
 * @param props.label - Text of the label
 * @param props.required - Show a star next to the label, default: false
 * @param props.htmlFor - Id of the form element the label is bound to.
 */
export function Label({ label, required = false, htmlFor }: ILabel) {
	return (
		<label htmlFor={htmlFor}>
			{label}
			{required && <span tw="ml-1 text-brand-purple-400">*</span>}
		</label>
	);
}
