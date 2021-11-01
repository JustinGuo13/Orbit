import Link from 'next/link';
import { useRouter } from 'next/router';

function openMenu() {
	window.onload = () => {
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');

		btn.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	};
}

const Navbar = () => {
	const router = useRouter();

	return (
		<div>
			<nav className="sticky top-0 bg-gray-900 shadow-lg px-10 py-2 z-50">
				<div className="max-w-full mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-4 ">
							<div>
								<a href="/" className="flex items-center py-5 px-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6 mr-1 text-green-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
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
						<div className="hidden md:flex flex-shrink-0 items-center space-x-12 px-10  ">
							<Link href="/">
								<a
									className={`block tracking-wide text-3xl text-green-400  hover:text-green-500 transition duration-200  ${
										router.pathname == '/' ? 'text-green-500' : 'text-green-400'
									}`}
								>
									Home
								</a>
							</Link>
							<Link href="/create-item">
								<a
									className={`block tracking-wide text-3xl text-green-400  hover:text-green-500 transition duration-200  ${
										router.pathname == '/create-item'
											? 'text-green-500'
											: 'text-green-400'
									}`}
								>
									Sell Assets
								</a>
							</Link>
							<Link href="/my-assets">
								<a
									className={`block tracking-wide text-3xl text-green-400  hover:text-green-500 transition duration-200  ${
										router.pathname == '/my-assets'
											? 'text-green-500'
											: 'text-green-400'
									}`}
								>
									My Assets
								</a>
							</Link>
							<Link href="/creator-dashboard">
								<a
									className={`block tracking-wide text-3xl text-green-400  hover:text-green-500 transition duration-200  ${
										router.pathname == '/creator-dashboard'
											? 'text-green-500'
											: 'text-green-400'
									}`}
								>
									Creator Dashboard
								</a>
							</Link>
						</div>
						<div className="md:hidden flex items-center">
							<button onClick={() => openMenu()} className="mobile-menu-button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10 text-green-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="mobile-menu hidden md:hidden ">
					<Link href="/">
						<a
							className={`block text-center mb-2 tracking-wide text-3xl text-green-400  hover:bg-gray-800 transition duration-200 ${
								router.pathname == '/' ? 'bg-gray-800' : 'bg-gray-900'
							}`}
						>
							Home
						</a>
					</Link>
					<Link href="/create-item">
						<a
							className={`block text-center mb-2 tracking-wide text-3xl text-green-400  hover:bg-gray-800 transition duration-200 ${
								router.pathname == '/create-item' ? 'bg-gray-800' : 'bg-gray-900'
							}`}
						>
							Sell Assets
						</a>
					</Link>
					<Link href="/my-assets">
						<a
							className={`block text-center mb-2 tracking-wide text-3xl text-green-400  hover:bg-gray-800 transition duration-200 ${
								router.pathname == '/my-assets' ? 'bg-gray-800' : 'bg-gray-900'
							}`}
						>
							My Assets
						</a>
					</Link>
					<Link href="/creator-dashboard">
						<a
							className={`block text-center mb-2 tracking-wide text-3xl text-green-400  hover:bg-gray-800 transition duration-200 ${
								router.pathname == '/creator-dashboard'
									? 'bg-gray-800'
									: 'bg-gray-900'
							}`}
						>
							Creator Dashboard
						</a>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
