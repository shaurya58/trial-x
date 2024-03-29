import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and the user is running Metamask
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server or the user is not running Metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/bf3cd34647f747e982c5bff101789564'
    );
    web3 = new Web3(provider);
}

export default web3;
