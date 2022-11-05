/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
	theme: {
    colors: {
      "c-black": "#fff",
      "c-white": "#000",
      "c-orange": "#DB8F00",
      "c-text": "#B9B9B9"
    },
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "base", // only generate global styles
		}),
	],
};
