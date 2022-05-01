/* emilien <emilien@emilien-lx>, 2021 */

const withPWA = require('next-pwa');

module.exports = withPWA({
	future: { webpack5: true },
	typescript: {
		ignoreBuildErrors: true,
	},
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
});
