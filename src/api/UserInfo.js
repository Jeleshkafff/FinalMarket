import { contractInstance } from "./network";

export default async function user_info(account) {
  let res = await contractInstance.methods.users(account).call();
  console.log(res);
  return await res;
}
