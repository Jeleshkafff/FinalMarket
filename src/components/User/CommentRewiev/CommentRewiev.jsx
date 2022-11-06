import React from "react";
import {createCommentThunk} from "../../../models/users"
import { useSelector,useDispatch } from "react-redux";


export default function CommentRewiev() {
  let id_shop = React.useRef();
  let id_rewiev = React.useRef();
  let comment = React.useRef();
  const dispatch = useDispatch()
  let address = useSelector(state =>state.auth.currentAccount)
  // dispatch()
    return (
      <div>
        <p>Comment Rewiev</p>
        <input placeholder="id shop" ref={id_shop} />
        <input placeholder=" id rewiev " ref={id_rewiev} />
        <input placeholder="comment" ref={comment} />
        <button
          onClick={() => {
            dispatch(createCommentThunk({owner:address,id_shop:id_shop.current.value,
              id_review:id_rewiev.current.value,comment:comment.current.value}))
          }}
        >
          Comment
        </button>
      </div>
    );
}
