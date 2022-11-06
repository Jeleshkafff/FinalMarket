import React from "react";
import "./App.module.css";
// import BaseWorkAccount from "../components/BaseWorkAccount";
import FormsInAccount from "../components/FormsInAccount";
import Account from "../components/Account";
// import Admin from "../components/Admin";
// import User from "../components/User";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  console.log(isLogin);
  if (isLogin) {
    return (
      <BrowserRouter>
        <div className="App">
          <Account />
          {/* <BaseWorkAccount /> */}
          {/* <Admin /> */}
          {/* <User /> */}
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <FormsInAccount />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
