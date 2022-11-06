import React from "react";
import Admin from "../../Admin";
import User from "../../User";
import AsideBar from "../AsideBar";
import { useSelector } from "react-redux";
let arr = [
  [
    "ChangeRole",
    "ChangeRoleOnRequest",
    "AddAdmin",
    "CreateShop",
    "DeleteShop",
    "ListShop",
    "ListRequest",
  ],
  [
    "CreateReview",
    "CommentReview",
    "RequestRoleChange",
    "ListShop",
    "ListReviewOnShop",
  ],
];
function MainWindow() {
  const currentRole = useSelector((state) => state.auth.currentRole);
  console.log(currentRole);
  console.log(arr[0]);
  if (Number(currentRole) === 0) {
    return (
      <div className="Panel">
        <AsideBar arr={arr[1]} />
        <User />
      </div>
    );
  } else if (Number(currentRole) === 2) {
    return (
      <div className="Panel">
        <AsideBar arr={arr[0]} />
        <Admin />
      </div>
    );
  } else {
    return <div>Question</div>;
  }
}
export default MainWindow;
