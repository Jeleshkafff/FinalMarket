import {contractInstance} from "./network"
export const createShop = async (shopAddress, city, account) => {
    let res = await contractInstance.methods
      .createNewShop(shopAddress.current.value, city.current.value)
      .send({
        from: account,
        gas: 3000000,
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(res);
  };