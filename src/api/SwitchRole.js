import { contractInstance } from "./network.js";
/**
 *
 * @param {string} address
 * @returns {Promise<void>}
 */
export const switchRole = (address) => {
  console.log(address);
  let res = contractInstance.methods
    .switchRole()
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
console.log(error)
    });
  return res;
};
