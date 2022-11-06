import React from "react";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import styles from "./FormsInAccount.module.css";
import { web3, contractInstance } from "../network.js";

function FormsInAccount() {
  return (
    <div>
      <div>
        <img
          className={styles.imgh}
          src="./BG4_1.jpg"
          alt="альтернативный текст"
        />
      </div>
      <div className={styles.Sings}>
        <h1></h1>
        <SignOut />
        <SignIn />
      </div>
    </div>
  );
}

export default FormsInAccount;
