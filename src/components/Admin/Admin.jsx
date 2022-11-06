import { Route, Routes } from "react-router";
import { web3, contractInstance } from "../network";
import AddAdmin from "./AddAdmin";
import CreateShop from "./CreateShop";
import Changerolewasking from "./ChangeRole/ChangeRole";
import ChangeRoleOnRequest from "./ChangeRoleOnRequest/ChangeRoleOnRequest.jsx";
import DeleteShop from "./DeleteShop/DeleteShop";
import ListShop from "./ListShop";
import ListRequest from "./ListRequest";
import styles from "./Admin.module.css";

function Admin() {
  return (
    <div className={styles.test}>
      <Routes>
        <Route path="/ChangeRole/*" element={<Changerolewasking />} />
        <Route
          path="/ChangeRoleOnRequest/*"
          element={<ChangeRoleOnRequest />}
        />
        <Route path="/AddAdmin/*" element={<AddAdmin />} />
        <Route path="/CreateShop/*" element={<CreateShop />} />
        <Route path="/DeleteShop/*" element={<DeleteShop />} />
        <Route path="/ListShop/*" element={<ListShop />} />
        <Route path="/ListRequest/*" element={<ListRequest />} />
      </Routes>
    </div>
  );
}
export default Admin;
