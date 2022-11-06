import ABI from "./abi.js";
import Web3 from "web3";
export let web3, contractInstance;
async function connect() {
  const contractAddress = "0x1930059C221B14f7f935A670c417012a2Bd78b4B";
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  contractInstance = new web3.eth.Contract(ABI, contractAddress);
}
connect();
// export default connect;
