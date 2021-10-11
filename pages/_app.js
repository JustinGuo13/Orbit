import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
	return (
		<body className="bg-gray-900 min-h-screen">
			<div>
				<nav className="flex md:items-center justify-between flex-wrap bg-gray-900 shadow-lg p-8">
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<Link href="/">
							<a className="text-4xl font-bold text-green-400 mr-20">Orbit</a>
						</Link>

						<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
							<div class="lg:flex-grow">
								<Link href="/">
									<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500  mr-4">
										Home
									</a>
								</Link>
								<Link href="/create-item">
									<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500  mr-4">
										Sell Digital Assets
									</a>
								</Link>
								<Link href="/my-assets">
									<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 mr-4 ">
										My Digital Assets
									</a>
								</Link>
								<Link href="/creator-dashboard">
									<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-400 hover:text-green-500 ">
										Creator Dashboard
									</a>
								</Link>
							</div>
						</div>
					</div>
				</nav>
				<Component {...pageProps} />
			</div>
		</body>
	);
}

export default MyApp;
