import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<nav className="flex md:items-center justify-between flex-wrap bg-teal-500 p-6">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<Link href="/">
						<a className="text-4xl font-bold text-green-500">Ørbit</a>
					</Link>

					<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div class="lg:flex-grow">
							<Link href="/">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-green-600  mr-4">
									Home
								</a>
							</Link>
							<Link href="/create-item">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-green-600  mr-4">
									Sell Digital Asset
								</a>
							</Link>
							<Link href="/my-assets">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-green-600 mr-4 ">
									My Digital Assets
								</a>
							</Link>
							<Link href="/creator-dashboard">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-green-600 ">
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
