import * as React from 'react';

function SvgMailBig(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 414 271"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g
				style={{
					mixBlendMode: 'color-burn',
				}}
				filter="url(#mail_big_svg__filter0_i)"
				fill="#000"
				fillOpacity={0.09}
			>
				<rect
					x={-146}
					y={176.023}
					width={264.05}
					height={37.98}
					rx={18.99}
					transform="rotate(-15 -146 176.023)"
				/>
				<rect
					x={-46.232}
					y={212.95}
					width={177.239}
					height={25.32}
					rx={12.66}
					transform="rotate(-15 -46.232 212.95)"
				/>
				<rect
					x={17.068}
					y={246.543}
					width={124.791}
					height={25.32}
					rx={12.66}
					transform="rotate(-15 17.068 246.543)"
				/>
				<path d="M152.618 95.397l140.199 28.682L399.891 29.14a32.01 32.01 0 00-38.679-20.854l-185.524 49.71a32.011 32.011 0 00-23.07 37.4z" />
				<path d="M409.193 63.666l-107.112 94.982-140.254-28.701 24.367 90.938a32.013 32.013 0 0039.206 22.636l185.525-49.711a32.01 32.01 0 0022.635-39.206l-24.367-90.938z" />
			</g>
			<defs>
				<filter
					id="mail_big_svg__filter0_i"
					x={-146}
					y={0.013}
					width={587.845}
					height={270.987}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feBlend
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset />
					<feGaussianBlur stdDeviation={7} />
					<feComposite
						in2="hardAlpha"
						operator="arithmetic"
						k2={-1}
						k3={1}
					/>
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
					<feBlend in2="shape" result="effect1_innerShadow" />
				</filter>
			</defs>
		</svg>
	);
}

export default SvgMailBig;
