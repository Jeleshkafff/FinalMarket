import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { changeRole } from "../../../api/admin";
import ListShop from "./ListShop/ListShop";
// const dispatch = useDispatch();

export default function ChangeRole() {
  let AddressUser = React.useRef();
  let Idshop = React.useRef();
  let address = useSelector((state) => state.auth.currentAccount);
  return (
    <div>
      <p>Change role without asking</p>
      <input placeholder="Address user" ref={AddressUser} />
      <input placeholder="Id shop" ref={Idshop} />
      <button
        onClick={() => {
          changeRole(AddressUser.current.value, Idshop.current.value, address);
        }}
      >
        Change
      </button>

      <ListShop />
    </div>
  );
}

// export default Changerolewasking;
