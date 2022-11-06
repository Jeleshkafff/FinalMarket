import { contractInstance } from "./network.js";
export default async function add_admin(user, admin) {
  console.log(user, admin);
  let res = await contractInstance.methods
    .addAdmin(user)
    .send({
      from: admin,
      gas: 3000000,
    })
    .catch(function (error) {
console.log(error)
    });
  console.log(res);
  return res;
}
