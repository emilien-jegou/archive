/* emilien <emilien@emilien-lx>, 2021 */

const { MINIMAL_VIEWPORTS } = require('@storybook/addon-viewport');
const { resolve } = require('path');

module.exports = {
	stories: [
		'../components/static/**/*.stories.mdx',
		'../components/static/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
	webpackFinal: async (config, { configType }) => {
		config.resolve.modules.push(resolve(__dirname, '../'));

		config.resolve.alias = {
			...config.resolve.alias,
			'@': resolve(__dirname, '../'),
		};

		return config;
	},
	viewport: {
		viewports: {
			minimum: {
				name: 'minimum',
				styles: { width: '320px', height: '480px' },
			},
			galaxyfold: {
				name: 'galaxyfold',
				styles: { width: '280px', height: '653px' },
			},
			ipadpro: {
				name: 'Ipad pro',
				styles: { width: '1024px', height: '1366px' },
			},
			iphoneX: {
				name: 'iphone X',
				styles: { width: '375px', height: '812px' },
			},
			sm: {
				name: 'small',
				styles: { width: '640px', height: '600px' },
			},
			'sm-1': {
				name: 'small - 1',
				styles: { width: '639px', height: '600px' },
			},
			md: {
				name: 'medium',
				styles: { width: '768px', height: '600px' },
			},
			'md-1': {
				name: 'medium - 1',
				styles: { width: '767px', height: '600px' },
			},
			lg: {
				name: 'large',
				styles: { width: '1024px', height: '600px' },
			},
			'lg-1': {
				name: 'large - 1',
				styles: { width: '1023px', height: '600px' },
			},
			xl: {
				name: 'xlarge',
				styles: { width: '1280px', height: '800px' },
			},
			'xl-1': {
				name: 'xlarge - 1',
				styles: { width: '1279px', height: '800px' },
			},
			'2xl': {
				name: '2xlarge',
				styles: { width: '1536px', height: '800px' },
			},
			'2xl-1': {
				name: '2xlarge - 1',
				styles: { width: '1535px', height: '800px' },
			},
			...MINIMAL_VIEWPORTS,
		},
		defaultViewport: 'lg',
	},
};
