//fix footer
const Footer = () => {
	return (
		<footer className="text-center p-3">
			<p className="text-green-400 text-xl ">
				{'Copyright © '}Astro {new Date().getFullYear()}
				{'.'}
			</p>
		</footer>
	);
};

export default Footer;
