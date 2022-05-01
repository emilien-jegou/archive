/* emilien <emilien@emilien-lx>, 2021 */

module.exports = {
	presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
	plugins: ['babel-plugin-macros', ['styled-components', { ssr: true }]],
};
