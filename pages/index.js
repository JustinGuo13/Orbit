import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Web3Modal from 'web3modal';
import Image from 'next/image';

import { nftaddress, nftmarketaddress } from '../config';

import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

export default function Home() {
	const [nfts, setNfts] = useState([]);
	const [loadingState, setLoadingState] = useState('not-loaded');
	useEffect(() => {
		loadNFTs();
	}, []);
	async function loadNFTs() {
		/* create a generic provider and query for unsold market items */
		const provider = new ethers.providers.JsonRpcProvider(
			'https://matic-mumbai.chainstacklabs.com'
		);
		const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
		const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider);
		const data = await marketContract.fetchMarketItems();

		/*
		 *  map over items returned from smart contract and format
		 *  them as well as fetch their token metadata
		 */
		const items = await Promise.all(
			data.map(async (i) => {
				const tokenUri = await tokenContract.tokenURI(i.tokenId);
				const meta = await axios.get(tokenUri);
				let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
				let item = {
					price,
					tokenId: i.tokenId.toNumber(),
					seller: i.seller,
					owner: i.owner,
					image: meta.data.image,
					name: meta.data.name,
					description: meta.data.description,
				};
				return item;
			})
		);
		setNfts(items);
		setLoadingState('loaded');
	}

	async function buyNft(nft) {
		/* needs the user to sign the transaction, so will use Web3Provider and sign it */
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);

		/* user will be prompted to pay the asking proces to complete the transaction */
		const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
		const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
			value: price,
		});
		await transaction.wait();
		loadNFTs();
	}

	if (loadingState === 'loaded' && !nfts.length)
		return <h1 className="px-20 py-10 text-3xl text-green-400">No items in marketplace</h1>;

	return (
		<div className="flex justify-center flex-shrink-0">
			<div className="p-4" style={{ maxWidth: '1600px' }}>
				<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{nfts.map((nft, i) => (
						<div key={i} className="shadow rounded-xl overflow-hidden">
							<div className="h-64 w-full relative sm:h-64 md:h-96 lg:h-96 xl:h-96">
								<Image
									src={nft.image}
									alt={(nft.name, nft.description)}
									layout="fill"
									objectFit="cover"
								/>
							</div>

							<div className="p-4 h-40 bg-green-400 overflow-hidden ">
								<p className="text-gray-900 text-3xl font-semibold break-words mb-2 ">
									{nft.name}
								</p>
								<div className="h-40 overflow-hidden">
									<p className="text-gray-900 text-2xl break-words">
										{nft.description}
									</p>
								</div>
							</div>
							<div className="p-4 bg-black">
								<p className="text-2xl mb-4 font-bold text-white tracking-wide">
									{nft.price} ETH
								</p>
								<button
									className="w-full bg-green-400 text-white text-xl font-bold py-2 px-12 rounded hover:bg-green-500 transition duration-200"
									onClick={() => buyNft(nft)}
								>
									Buy
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
