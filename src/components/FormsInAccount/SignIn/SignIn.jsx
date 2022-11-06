import React from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../models/auth/authSlice";
import {
  getShopsThunk,
  getRequestThunk,
} from "../../../models/adminF/adminSlice";
function giveAcc() {}
function SignIn() {
  let Login = React.useRef();
  let Password = React.useRef();
  const dispatch = useDispatch();

  return (
    <div className="sing_in">
      <p>Sing In</p>
      <input className="sing_in_address" placeholder="Address" ref={Login} />
      <input
        className="sing_in_password"
        placeholder="Password"
        ref={Password}
      />

      <button
        className="sing_in_btn"
        onClick={() => {
          dispatch(
            loginThunk({
              address: Login.current.value,
              password: Password.current.value,
            })
          );
          console.log(loginThunk);
          dispatch(getShopsThunk({ address: Login.current.value }));
          dispatch(getRequestThunk({ address: Login.current.value }));
          console.log("Pfikb");
        }}
      >
        sing in
      </button>
      {/* <p>0xBB6C1599Ff9567a34708fCdA3AC91C117f4FF89e</p>
      <p>admin1</p> */}
      {/* <p>0x267A842a4Dc97fbae4aC85228143a3DAfAFf52c0</p>
      <p>admin1</p>
      <p>0x25c66e1996002e7ff0f6F26401853FD24F6424f4</p>
      <p>user2</p> */}
    </div>
  );
}

export default SignIn;
