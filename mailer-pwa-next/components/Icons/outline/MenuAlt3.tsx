import * as React from 'react';

function SvgMenuAlt3(props: React.SVGProps<SVGSVGElement>) {
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
				d="M4 6h16M4 12h16m-7 6h7"
			/>
		</svg>
	);
}

export default SvgMenuAlt3;