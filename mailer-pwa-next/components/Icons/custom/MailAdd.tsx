import * as React from 'react';

function SvgMailAdd(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 26 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M.003 3.008l10.663 5.33 10.662-5.33A2.667 2.667 0 0018.666.496h-16A2.667 2.667 0 00.003 3.008z"
				fill="#1F2937"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.667 11.32l10.666-5.333v1.291a2.25 2.25 0 00-2.583 2.225v1.75H17a2.25 2.25 0 000 4.5h1.75v.742l-.083.001h-16A2.667 2.667 0 010 13.83V5.987l10.667 5.333z"
				fill="#1F2937"
			/>
			<path
				d="M21 13.504h-4m4-4v4-4zm0 4v4-4zm0 0h4-4z"
				stroke="#8338EC"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default SvgMailAdd;
