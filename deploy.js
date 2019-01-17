const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'ride rice clown spot emotion orbit soup raw congress permit option swear',
    'https://rinkeby.infura.io/v3/2c2f19ecb7804dcb8dd3234817ef5a2a'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({ data: bytecode })
     .send({ gas: '1000000', from: accounts[0] });

    console.log(interface);
    console.group('Contract deployed to', result.options.address); 
};
deploy();