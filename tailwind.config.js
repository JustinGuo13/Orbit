module.exports = {
	purge: ['./pages/*.js', './pages/**/*.js', './components/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				72: '18rem',
				84: '21rem',
				96: '24rem',
			},
			fontFamily: {
				zen: "'Zen Kaku Gothic Antique', sans-serif",
			},
		},
	},
	variants: {
		extend: { backgroundColor: ['hover'] },
	},
	plugins: [],
};
