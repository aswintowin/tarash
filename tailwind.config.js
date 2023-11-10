/** @type {import('tailwindcss').Config} */

const config = {
	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"
	],
  
	plugins: [require("flowbite/plugin")],
  
	darkMode: "class",
  
	theme: {
	  extend: {
		colors: {
		  // flowbite-svelte
		  primary: {
			50: "#ECFEFF",
			100: "#CFFAFE",
			200: "#A5F3FC",
			300: "#67E8F9",
			400: "#22D3EE",
			500: "#06B6D4",
			600: "#0891B2",
			700: "#0E7490",
			800: "#155E75",
			900: "#164E63"
		  }
		}
	  }
	}
  };
  
  module.exports = config;
  