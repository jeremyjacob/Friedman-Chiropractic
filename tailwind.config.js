/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				serif: ['Merriweather', 'sans-serif'],
				sans: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: []
};
