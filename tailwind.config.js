/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				loading: {
					'0%': { left: 0, opacity: 0 },
					// 20%,
					'60%': { opacity: '100%' },
					'100%': { left: '95%', opacity: 0 },
				},
			},
			animation: {
				loading: 'loading ease-in-out 1.5s infinite',
			},
		},
	},
	plugins: [],
}
