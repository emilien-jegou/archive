/* emilien <emilien@emilien-lx>, 2021 */

const { resolve } = require('path');

module.exports = {
	icon: true,
	ext: 'tsx',
	ignoreExisting: true,
	typescript: true,
	outDir: resolve(__dirname, 'components/Icons/'),
};
