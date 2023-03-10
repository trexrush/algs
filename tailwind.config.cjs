/** @type {import('tailwindcss').Config} */

//TODO: https://tailwindcss.com/docs/dark-mode

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			juju: ["Nunito", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"]
		},
		extend: {},
	},
	plugins: [],
}
