import { useState } from 'react';
import { ethers } from 'ethers';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { useRouter } from 'next/router';
import Web3Modal from 'web3modal';
import Image from 'next/image';

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

import { nftaddress, nftmarketaddress } from '../config';

import NFT from '../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json';

export default function CreateItem() {
	const [fileUrl, setFileUrl] = useState(null);
	const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' });
	const router = useRouter();

	async function onChange(e) {
		const file = e.target.files[0];
		try {
			const added = await client.add(file, {
				progress: (prog) => console.log(`received: ${prog}`),
			});
			const url = `https://ipfs.infura.io/ipfs/${added.path}`;
			setFileUrl(url);
		} catch (error) {
			console.log('Error uploading file: ', error);
		}
	}
	async function createMarket() {
		const { name, description, price } = formInput;
		if (!name || !description || !price || !fileUrl) return;
		/* first, upload to IPFS */
		const data = JSON.stringify({
			name,
			description,
			image: fileUrl,
		});
		try {
			const added = await client.add(data);
			const url = `https://ipfs.infura.io/ipfs/${added.path}`;
			/* after file is uploaded to IPFS, pass the URL to save it on Polygon */
			createSale(url);
		} catch (error) {
			console.log('Error uploading file: ', error);
		}
	}

	async function createSale(url) {
		const web3Modal = new Web3Modal();
		const connection = await web3Modal.connect();
		const provider = new ethers.providers.Web3Provider(connection);
		const signer = provider.getSigner();

		/* next, create the item */
		let contract = new ethers.Contract(nftaddress, NFT.abi, signer);
		let transaction = await contract.createToken(url);
		let tx = await transaction.wait();
		let event = tx.events[0];
		let value = event.args[2];
		let tokenId = value.toNumber();
		const price = ethers.utils.parseUnits(formInput.price, 'ether');

		/* then list the item for sale on the marketplace */
		contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
		let listingPrice = await contract.getListingPrice();
		listingPrice = listingPrice.toString();

		transaction = await contract.createMarketItem(nftaddress, tokenId, price, {
			value: listingPrice,
		});
		await transaction.wait();
		router.push('/');
	}

	return (
		<div className="flex justify-center">
			<div className="w-1/2 flex flex-col pb-12">
				<input
					placeholder="Asset Name"
					className="mt-8 tracking-wider border-2 rounded-lg border-green-500 p-4 bg-gray-800 placeholder-green-300 text-white outline-none"
					onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
				/>
				<textarea
					placeholder="Asset Description"
					className="mt-5 tracking-wider border-2 rounded-lg border-green-500 p-4 bg-gray-800 placeholder-green-300 text-white outline-none"
					onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
				/>
				<input
					placeholder="Asset Price in Eth"
					className="mt-5 tracking-wider border-2 rounded-lg border-green-500 p-4 bg-gray-800 placeholder-green-300 text-white outline-none"
					onChange={(e) => updateFormInput({ ...formInput, price: e.target.value })}
				/>

				<label className="w-48 flex flex-col items-center px-4 py-6 bg-green-400 rounded-lg shadow-lg tracking-wider uppercase my-5 cursor-pointer hover:bg-green-500 hover:text-white transition duration-200">
					<svg
						className="w-8 h-8"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
					</svg>
					<span className="mt-2 text-lg text-base leading-normal">Select a file</span>
					<input type="file" name="Asset" className="hidden" onChange={onChange} />
				</label>

				{fileUrl && (
					<div className="h-96 w-96 relative mt-2">
						<Image src={fileUrl} alt={fileUrl} layout="fill" />
					</div>
				)}

				<button
					onClick={createMarket}
					className="font-bold text-xl tracking-widest mt-5 bg-green-400 text-white rounded-lg p-6 shadow-lg hover:bg-green-500 transition duration-200"
				>
					Create Digital Asset
				</button>
			</div>
		</div>
	);
}
