import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import LeaveLikeDislikeOnRewiev from "../LeaveLikeDislikeOnRewiev";
import { createReviewThunk, getReviewsThunk } from "../../../models/users";
import styles from "./CreateRewiev.module.css";
import ListShop from "./ListShop/ListShop";

export default function CreateRewiev() {
  let id_shop = React.useRef();
  let comment = React.useRef();
  const [countStars, setCountStars] = useState(0);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function getReviews() {
      dispatch(getReviewsThunk({ id_shop: 0 }));
    }
    getReviews();
  }, [dispatch]);

  const address = useSelector((state) => state.auth.currentAccount);
  const thirdExample = {
    size: 40,
    count: 10,
    isHalf: false,
    value: 4,
    color: "#ffb0fc",
    activeColor: "#ffeb61",
    onChange: (newValue) => {
      setCountStars(newValue);
      console.log(`${newValue}`);
    },
  };
  return (
    <div className={styles.all}>
      <p>create Rewiev</p>
      <input placeholder="id shop" ref={id_shop} />
      <div className={styles.starss}>
        <ReactStars {...thirdExample} />
      </div>
      <input placeholder="comment" ref={comment} className={styles.comment} />
      <button
        onClick={() => {
          dispatch(
            createReviewThunk({
              owner: address,
              id_shop: id_shop.current.value,
              stars: countStars,
              comment: comment.current.value,
            })
          );
        }}
      >
        Create
      </button>
      <ListShop />
    </div>
  );
}
