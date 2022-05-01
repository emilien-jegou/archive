/* emilien <emilien@emilien-lx>, 2021 */

import React, { ReactChild } from 'react';
import tw, { styled } from 'twin.macro';
import { Icon } from '@/components/static/Icon';
import { ArrowLeft } from '@/components/Icons/outline/';
import { useRouter } from 'next/router';

const Heading = styled.h1(({ centered = false }: { centered: boolean }) => [
	tw`text-3xl font-bold tracking-wide`,
	centered && tw`text-center`,
]);

const Description = styled.p(({ centered = false }: { centered: boolean }) => [
	tw`mt-4 text-gray-600 tracking-wide`,
	centered && tw`text-center`,
]);

/** Interface of CommonHead component.  */
interface ICommonHead {
	title: ReactChild;
	description: ReactChild;
	/** Center the title and description horizontally.  */
	centered?: boolean;
	/** Show the "previous page" button above the title.  */
	previousBtn?: boolean;
	/** Lambda function to be executed when the back button is pressed */
	previousAction?: any;
}

/**
 * Common page header with title, description and an optional previous page button (viewable on login page)
 */
export function CommonHead({
	title,
	description,
	centered = false,
	previousBtn = false,
	previousAction = (router) => router.back(),
}: ICommonHead) {
	const router = useRouter();

	const _backBtnClicked = () => {
		if (typeof previousAction === 'function') {
			previousAction(router);
		} else {
			router.push(previousAction);
		}
	};

	return (
		<div tw="mb-10">
			<div tw="h-14 flex items-center">
				{previousBtn && (
					<div tw="flex items-center text-gray-600 cursor-pointer" onClick={() => _backBtnClicked()}>
						<Icon size="md" icon={<ArrowLeft />} />
						<p tw="ml-2 text-xl font-semibold tracking-wide leading-none">
							Back
						</p>
					</div>
				)}
			</div>
			<div tw="mt-6">
				<Heading centered={centered}>{title}</Heading>
				<Description centered={centered}>{description}</Description>
			</div>
		</div>
	);
}

//<template>
//</template>

//<script>
//export default {
//name: 'UiCommonHead',
//props: {
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
//title: { type: String },
//description: { type: [ String, Array, Object ] },
//light: {
//type: Boolean,
//default: false
//},
//size: {
//type: String,
//default: 'md',
//validator: v => ['sm', 'md', 'lg'].includes(v)
//}
//},
//};
//</script>

//<style scoped>
//</style>
