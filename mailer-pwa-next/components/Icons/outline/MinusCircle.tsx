import * as React from 'react';

function SvgMinusCircle(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			width="1em"
			height="1em"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	);
}

export default SvgMinusCircle;
