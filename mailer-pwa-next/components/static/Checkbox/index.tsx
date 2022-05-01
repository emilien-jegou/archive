/* emilien <emilien@emilien-lx>, 2021 */

import React, { useState, useEffect } from 'react';
import tw, { css } from 'twin.macro';
import { uid } from '@/src/utils';
import { Label } from '@/components/static/Label';

const checkboxStyle = css`
/* Base for label styling */
&:not(:checked),
&:checked {
	position: absolute;
	left: 0;
	opacity: 0.01;
}
&:not(:checked) + label,
&:checked + label {
	position: relative;
	padding-left: 2.3em;
	font-size: 1.05em;
	line-height: 1.7;
	cursor: pointer;
}

/* checkbox aspect */
&:not(:checked) + label:before,
&:checked + label:before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 1.4em;
	height: 1.4em;
	border: 1px solid #aaa;
	background: #fff;
	border-radius: 0.2em;
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
		0 0 0 rgba(203, 34, 237, 0.2);
	transition: all 0.275s;
}

/* checked mark aspect */
&:not(:checked) + label:after,
&:checked + label:after {
	content: '✕';
	position: absolute;
	top: 0.525em;
	left: 0.18em;
	font-size: 1.375em;
	color: #cb22ed;
	line-height: 0;
	transition: all 0.2s;
}

/* checked mark aspect changes */
&:not(:checked) + label:after {
	opacity: 0;
	transform: scale(0) rotate(45deg);
}

&:checked + label:after {
	opacity: 1;
	transform: scale(1) rotate(0);
}

/* Disabled checkbox */
&:disabled:not(:checked) + label:before,
&:disabled:checked + label:before {
	box-shadow: none;
	border-color: #bbb;
	background-color: #e9e9e9;
}

&:disabled:checked + label:after {
	color: #777;
}

&:disabled + label {
	color: #aaa;
}

/* Accessibility */
&:checked:focus + label:before,
&:not(:checked):focus + label:before {
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1),
		0 0 0 6px rgba(203, 34, 237, 0.2);
}
`;

interface ICheckbox {
	label: string;
	name: string;
	checked?: boolean;
	disable?: boolean;
}

export function Checkbox({
	label,
	name,
	checked = false,
	disable = false,
}: ICheckbox) {
	const [id, setId] = useState(null);

	useEffect(() => setId(uid()), []);

	return (
		<div tw="flex gap-1 items-center">
			<input
				id={id}
				css={ checkboxStyle }
				type="checkbox"
				name={name}
				defaultChecked={ checked}
			/>
			<Label htmlFor={id} label={label} />
		</div>
	);
}
