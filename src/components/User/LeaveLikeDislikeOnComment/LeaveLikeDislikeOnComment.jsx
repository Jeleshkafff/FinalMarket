import React from "react";
import {leaveLikeDislikeOnCommentThunk} from "../../../models/users"
import { useSelector,useDispatch } from "react-redux";
import LeaveLikeDislikeOnComment from "../LeaveLikeDislikeOnComment";



export default function LeaveLikeDislikeOnComment() {
  let id_shop = React.useRef();
  let id_rewiev = React.useRef();
  let rate = React.useRef();
  let id_comment = React.useRef();
  const dispatch = useDispatch()
  let address = useSelector(state =>state.auth.currentAccount)
    return (
      <div>
        <p>Leave Like Dislike On Comment</p>
        <input placeholder="id shop" ref={id_shop} />
        <input placeholder="Id rewiev" ref={id_rewiev} />
        <input placeholder="id comment" ref={id_comment} />
        <input placeholder="rate" type="checkbox" ref={rate} />
        <button
          onClick={() => {
            dispatch(
              leaveLikeDislikeOnCommentThunk({
                owner: address,
                id_shop: id_shop.current.value,
                id_review: id_rewiev.current.value,
                id_comment: id_comment.current.value,
                rate: rate.current.checked,
              })
            );
          }}
        >
          Leave
        </button>
        <LeaveLikeDislikeOnComment />
      </div>
    );
}
