import React from "react";
import { deleteShopThunk } from "../../../models/adminF";
import { useSelector, useDispatch } from "react-redux";
import ListShop from "../ChangeRole/ListShop/ListShop";
// async function DeleteShops(contractInstance, id_shop, address) {
//   let res = await contractInstance.methods
//     .DeleteShop(id_shop.current.value)
//     .send({
//       from: address,
//       gas: 3000000,
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   console.log(res);
// }

export default function DeleteShop() {
  let id_shop = React.useRef();
  const dispatch = useDispatch();
  let address = useSelector((state) => state.auth.currentAccount);
  return (
    <div>
      <p>Delete Shop</p>
      <input placeholder="id shop" ref={id_shop} />

      <button
        onClick={() => {
          console.log("delete");
          dispatch(
            deleteShopThunk({
              id_shop: id_shop.current.value,
              address: address,
            })
          );
        }}
      >
        Delete
      </button>
      <ListShop />
    </div>
  );
}
