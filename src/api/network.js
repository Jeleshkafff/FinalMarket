import ABI from "./abi.js";
import Web3 from "web3";
/**
 * @type {import('web3-eth-contract').Contract}
 */
export let contractInstance;

/**
 * @type {import('web3').default}
 */
export let web3;

const contractAddress = "0x1930059C221B14f7f935A670c417012a2Bd78b4B";
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

contractInstance = new web3.eth.Contract(ABI, contractAddress);
