import RequestRoleChange from "./RequestRoleChange";
import CreateRewiev from "./CreateRewiev";
import CommentRewiev from "./CommentRewiev";
import ListShop from "./ListShop";
import ListReviewOnShop from "./ListReviewOnShop";
import { Route, Routes } from "react-router";
import styles from "./user.module.css";
function User() {
  return (
    <div className={styles.info}>
      {/* <CreateRewiev />
      <LeaveLikeDislikeOnRewiev />

      <CommentRewiev />
      <LeaveLikeDislikeOnComment />
    
      <RequestRoleChange /> */}
      <p></p>
      <Routes>
        <Route path="/CreateReview/*" element={<CreateRewiev />} />
        <Route path="/CommentReview/*" element={<CommentRewiev />} />
        <Route path="/RequestRoleChange/*" element={<RequestRoleChange />} />
        <Route path="/ListShop/*" element={<ListShop />} />
        <Route path="/ListReviewOnShop/*" element={<ListReviewOnShop />} />
      </Routes>
    </div>
  );
}
export default User;
