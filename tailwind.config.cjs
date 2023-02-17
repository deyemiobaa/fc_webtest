/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
    extend: {
      boxShadow: {
        'form': "0px 4px 25px rgba(102, 102, 102, 0.2)"
      },
      colors: {
        'light': '#858585',
        'lighter': '#A3A3A3',
        'dark': '#1A1A1A',
        'accent': '#1CC578',
      },
      letterSpacing: {
        'head': '-0.5px',
        'subhead': '-0.03px',
      }
		},
	},
	plugins: [],
}
