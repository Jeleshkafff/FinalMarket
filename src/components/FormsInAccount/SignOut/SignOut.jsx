import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../models";
import { registrationThunk } from "../../../models/auth";
import { web3, contractInstance } from "../../network";

function SignOut() {
  // let sing_out = async () => {
  //   console.log(contractInstance.methods);
  //   let res = await contractInstance.methods
  //     .registration(
  //       web3.utils.soliditySha3({ t: "string", v: Password.current.value })
  //     )
  //     .send({
  //       from: Login.current.value,
  //       gas: 3000000,
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   if (res) {
  //     console.log(res);
  //     dispatch({ type: "SetCurrentAccount", payload: Login.current.value });
  //     dispatch({ type: "SetIsLogin", payload: true });
  //     let userInfo = await contractInstance.methods
  //       .users(Login.current.value)
  //       .call();
  //     dispatch({ type: "SetRole", payload: userInfo.role });
  //     dispatch({ type: "SetCurRole", payload: userInfo.currentRole });
  //     localStorage.setItem("info", state);
  //   }
  // };

  let Login = React.useRef();
  let Password = React.useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div className="sing_out">
      <p>Sing Out</p>
      <input className="sing_out_address" placeholder="Address" ref={Login} />
      <input
        className="sing_out_password"
        placeholder="Password"
        ref={Password}
      />
      <button
        className="sing_out_btn"
        onClick={() => {
          dispatch(
            registrationThunk({
              address: Login.current.value,
              password: Password.current.value,
            })
          );
        }}
      >
        sing_out
      </button>
    </div>
  );
  // }
}

export default SignOut;
