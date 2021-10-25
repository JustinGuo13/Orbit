import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';

function openMenu() {
	const btn = document.querySelector('button.mobile-menu-button');
	const menu = document.querySelector('.mobile-menu');

	btn.addEventListener('click', () => {
		menu.classList.toggle('hidden');
	});
}

function MyApp({ Component, pageProps }) {
	return (
		<div>
			{/* <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-gray-900 shadow-lg p-8 z-50">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<Link href="/">
						<a className="text-4xl tracking-widest font-bold text-green-400 mr-20">
							Orbit
						</a>
					</Link>

					<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="lg:flex-grow">
							<Link href="/">
								<a className="block mt-4 mx-8 tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500  mr-4">
									Home
								</a>
							</Link>
							<Link href="/create-item">
								<a className="block mt-4 mx-8 tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500  mr-4">
									Sell Digital Assets
								</a>
							</Link>
							<Link href="/my-assets">
								<a className="block mt-4 mx-8 tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 mr-4 ">
									My Digital Assets
								</a>
							</Link>
							<Link href="/creator-dashboard">
								<a className="block mt-4 mx-8 tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 ">
									Creator Dashboard
								</a>
							</Link>
						</div>
					</div>
				</div>
			</nav> */}

			<nav className="sticky top-0 bg-gray-900 shadow-lg p-8 z-50">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-4 ">
							<div>
								<a href="#" className="flex items-center py-5 px-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-1 text-green-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
									<span
										className="font-bold text-4xl 
									tracking-widest
									text-green-400"
									>
										Orbit
									</span>
								</a>
							</div>
						</div>
						<div className="hidden md:flex items-center space-x-1">
							<a href="Login" className="py-5 px-3">
								Login
							</a>
							<a
								href="Signup"
								className="py-2 px-3  bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
							>
								Signup
							</a>
						</div>
						<div className="md:hidden flex items-center">
							<button onClick={() => openMenu()} className="mobile-menu-button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-green-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="mobile-menu hidden md:hidden">
					<a
						href="#"
						className="block py-2 px-4 text-center text-green-400 hover:bg-gray-800"
					>
						Features
					</a>

					<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
						<div className="lg:flex-grow">
							<Link href="/">
								<a className="block mt-4 mx-8 text-center tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 active:bg-gray-800 mr-4">
									Home
								</a>
							</Link>
							<Link href="/create-item">
								<a className="block mt-4 mx-8 text-center tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 mr-4">
									Sell Digital Assets
								</a>
							</Link>
							<Link href="/my-assets">
								<a className="block mt-4 mx-8  text-center tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 mr-4 ">
									My Digital Assets
								</a>
							</Link>
							<Link href="/creator-dashboard">
								<a className="block mt-4 mx-8  text-center tracking-wide lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 ">
									Creator Dashboard
								</a>
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
