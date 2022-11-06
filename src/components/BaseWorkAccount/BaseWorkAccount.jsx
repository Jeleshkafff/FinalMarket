import React from "react";
import Balance from "../Balance";
import { switchRoleThunk } from "../../models/auth/authSlice";
import { authActions } from "../../models/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BaseWorkAccount.module.css";

function BaseWorkAccount() {
  const dispatch = useDispatch();
  const currentAccount = useSelector((state) => state.auth.currentAccount);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const role = useSelector((state) => state.auth.role);
  const currentRole = useSelector((state) => state.auth.currentRole);

  if (isLogin) {
    return (
      <div className={styles.test}>
        <img
          className={styles.imgh}
          src="./BG3_3.png"
          // alt="альтернативный текст"
        />
        <div className={styles.BasePanel}>
          <div className="AccountInfo">
            <h1>Address: {currentAccount}</h1>
            <Balance account={currentAccount} />
            <p>Role: {roleName(role)}</p>
            <p>Current role: {roleName(currentRole)}</p>
            <div>
              {console.log(Number(role))}
              {Number(role) === 2 || Number(role) === 1 ? (
                <button
                  onClick={() => {
                    console.log("click", currentAccount);
                    console.log(switchRoleThunk);
                    dispatch(switchRoleThunk({ address: currentAccount }));
                  }}
                >
                  Switch Role
                </button>
              ) : null}
            </div>
          </div>
          <div className={styles.Exit}>
            <button
              className={styles.ExitBtn}
              onClick={() => {
                console.log(authActions);
                console.log("click");
                dispatch(authActions.exit());
                // console.log(exit)
              }}
            >
              Exit
            </button>
          </div>

          {/* <select
        className="mySelect"
        onChange={() => {
          getNewAccount(myRef, setAccount);
        }}
        ref={myRef}
      >
        {accounts.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select> */}
        </div>
        <div className="CustomPanel">
          {/* <Panel currentRole={currentRole}/> */}
        </div>
      </div>
    );
  }
}

function roleName(id_role) {
  console.log(id_role);
  switch (String(id_role)) {
    case "0":
      return "buyer";
    case "1":
      return "seller";
    case "2":
      return "admin";
    case "4":
      return "ne doshel";
    case 4 || 2 || 1 || 0:
      return "number";
    default:
      return "oops error";
  }
}

export default BaseWorkAccount;
