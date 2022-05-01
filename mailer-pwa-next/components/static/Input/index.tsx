/* emilien <emilien@emilien-lx>, 2021 */

import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { Label } from '@/components/static/Label';

interface IInput {
	label: string;
	required?: boolean;
	type?: string;
	name: string;
	placeholder?: string;
	maxLength?: number;
	onChange?: (val, name) => void;
}

let id = 0;
const _genId = () => (id += 1);

export function Input({
	label,
	required = false,
	type = 'text',
	name,
	placeholder = '',
	onChange = (_a, _b) => {},
	maxLength,
}: IInput) {
	const [id, setId] = useState(null);

	useEffect(() => setId(_genId()), []);

	return (
		<div tw="flex flex-col gap-1">
			<Label htmlFor={id} label={label} required={required} />
			<input
				onChange={e => onChange(e.target.value, name)}
				id={id}
				tw="rounded border border-gray-300 focus:outline-none h-12 focus:border-brand-purple-400 focus:bg-gray-50 pl-2"
				type={type}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
			/>
		</div>
	);
}
