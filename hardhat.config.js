require('@nomiclabs/hardhat-waffle');

const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();
const projectId = '7dcf778da7424655a4e65ae51a08514b';

module.exports = {
	networks: {
		hardhat: {
			chainId: 1337,
		},
		mumbai: {
			url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
			accounts: [privateKey],
		},
		mainnet: {
			url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
			accounts: [privateKey],
		},
	},
	solidity: {
		version: '0.8.4',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
