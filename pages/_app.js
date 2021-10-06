import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<nav className="flex md:items-center justify-between flex-wrap bg-teal-500 p-6">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<svg
						class="fill-current h-8 w-8 mr-2"
						width="54"
						height="54"
						viewBox="0 0 54 54"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
					</svg>
					<Link href="/" class="font-semibold text-xl tracking-tight">
						<a className="text-4xl font-bold text-green-500">Ørbit</a>
					</Link>

					<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
						<div class="lg:flex-grow">
							<Link href="/">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-red-500  mr-4">
									Home
								</a>
							</Link>
							<Link href="/create-item">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-red-500  mr-4">
									Sell Digital Asset
								</a>
							</Link>
							<Link href="/my-assets">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-red-500 mr-4 ">
									My Digital Assets
								</a>
							</Link>
							<Link href="/creator-dashboard">
								<a class="block mt-4 mx-8 lg:inline-block lg:mt-0 text-3xl text-green-500 hover:text-red-500 ">
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
