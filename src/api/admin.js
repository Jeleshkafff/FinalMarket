import { contractInstance } from "./network";

export const addAdmin = async (user, admin) => {
  return await contractInstance.methods
    .addAdmin(user)
    .send({
      from: admin,
      gas: 3000000,
    })
    .catch(function (error) {
console.log(error)
    });
};

export const createShop = async (shopAddress, city, account) => {
  console.log("Create shop begin");
  return await contractInstance.methods
    .createNewShop(shopAddress, city)
    .send({
      from: account,
      gas: 3000000,
    })
    .catch(function (error) {
console.log(error)
    });
};

export const deleteShop = async (id_shop, address) => {
  console.log(id_shop, address);
  return await contractInstance.methods
    .DeleteShop(id_shop)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
console.log(error)
    });
};

export const changeRole = async (AddressUser, Idshop, address) => {
  return await contractInstance.methods
    .changeRole(AddressUser, Idshop)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
console.log(error)
    });
};
export const changeRoleOnRequest = async (id_request, answer, address) => {
  return await contractInstance.methods
    .ChangeRoleOnRequest(id_request, answer)
    .send({
      from: address,
      gas: 3000000,
    })
    .catch(function (error) {
console.log(error)
    });
};

export const getShops = async () => {
  console.log("Получаем магазины");
  return await contractInstance.methods.getShops().call();
};

export const getRequestsChangeRole = async () => {
  console.log(1);
  return await contractInstance.methods.getRequests().call();
};
