import React from "react";
import {leaveLikeDislikeOnReviewThunk} from "../../../models/users"
import { useSelector,useDispatch } from "react-redux";


export default function LeaveLikeDislikeOnRewiev() {
  let id_shop = React.useRef();
  let id_rewiev = React.useRef();
  let rate = React.useRef();
  const dispatch = useDispatch()
  let address = useSelector(state =>state.auth.currentAccount)

    return (
      <div>
        <p>Leave Like Dislike On Rewiev</p>
        <input placeholder="id shop" ref={id_shop} />
        <input placeholder="Id rewiev" ref={id_rewiev} />
        <input placeholder="rate" type="checkbox" ref={rate} />
        <button
          onClick={() => {
            console.log(rate.current.checked,rate);
            dispatch(leaveLikeDislikeOnReviewThunk({owner:address,id_shop:id_shop.current.value,
              id_review:id_rewiev.current.value,rate:rate.current.checked}))
          }}
        >
          Leave
        </button>
      </div>
    );
}
