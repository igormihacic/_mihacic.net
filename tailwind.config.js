/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
	theme: {
		colors: {
			"c-black": "#000",
			"c-white": "#fff",
			"c-orange": "#DB8F00",
			"c-text": "#B9B9B9",
		},
		container: {
			center: true,
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "base", // only generate global styles
		}),
	],
};
