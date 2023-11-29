const { tailwindcssPaletteGenerator } = require("@bobthered/tailwindcss-palette-generator");

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: tailwindcssPaletteGenerator({
				colors: [
					'#e5d524',
					'#898661'
				],
				names: [
					'violet',
					'slate'
				]
			})
		}
	},

	plugins: []
};

module.exports = config;