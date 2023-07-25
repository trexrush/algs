/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			juju: ["Nunito", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"]
		},
		extend: {},
	},
	plugins: [
		plugin(function({ addVariant }) {
			addVariant('child', '&>*')
		}),
		require('@tailwindcss/container-queries'),
	]
}
