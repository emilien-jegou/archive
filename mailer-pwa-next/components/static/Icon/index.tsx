/* emilien <emilien@emilien-lx>, 2021 */

import React, { ReactElement } from 'react';
import Image from 'next/image';
import { css } from 'twin.macro';
import { lazy } from '@/src/lazy';

const _iconSizes = {
	sm: '1rem',
	md: '1.5rem',
	lg: '2rem',
};

/**
 * Icon component props.
 */
interface IIcon {
	size?: keyof typeof _iconSizes;
	color?: string;
	icon: ReactElement;
}

/**
 * A simple Icon component using next/image for rendering.
 *
 * @param props.size - 'sm' | 'md' | 'lg', default: 'md'
 * @param props.color - css color attributed to the background-color property, default: 'currentColor'
 * @param props.path - path of the image
 */
export function Icon({ size = 'md', color = 'currentColor', icon }: IIcon) {
	const _size = _iconSizes[size];

	return <div css={{ fontSize: _size, color }}>{icon}</div>;
}
