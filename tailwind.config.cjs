const { tailwindcssPaletteGenerator } = require("@bobthered/tailwindcss-palette-generator");

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/sveltewind/**/*.{html,js,svelte,ts}'
	],

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
			}),
			fontFamily: {
				logo: ['Barlow Condensed'],
				sans: ['Montserrat', 'sans-serif'],
			}
		}
	},

	plugins: []
};

module.exports = config;