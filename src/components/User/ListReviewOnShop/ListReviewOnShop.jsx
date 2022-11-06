import {useSelector } from "react-redux";
import React from "react";
import style from "./ListReviewOnShop.module.css";
import Review from "./Review";
function ListReviewOnShop() {
  let reviews = useSelector((state) => state.user.reviews);
  return (
    <div>
      <ul className={style.ul}>
        {reviews.map(
          (item,index) => (
            <Review item={item} index={index}/>
          )
        )}
      </ul>
    </div>
  );
}
export default ListReviewOnShop;
