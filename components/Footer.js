//fix footer
const Footer = () => {
	return (
		<footer
			className="
             text-center
             fixed
             inset-x-0
             bottom-0
			 bg-gray-900
             p-3
			 "
		>
			<p className="text-green-400 text-xl ">
				{'Copyright © '}Orbit {new Date().getFullYear()}
				{'.'}
			</p>
		</footer>
	);
};

export default Footer;
