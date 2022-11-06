import style from "./ListReviewOnShop.module.css";
import { useDispatch, useSelector } from "react-redux";
import { leaveLikeDislikeOnCommentThunk } from "../../../models/users";
// import style from "./ListReviewOnShop.module.css";
function LikeDislike(arr) {
  let like = 0;
  let dislike = 0;
  for (let item of arr) {
    if (item.rate) {
      like = like + 1;
    } else {
      dislike = dislike + 1;
    }
  }
  return { like, dislike };
}
function Comment(item) {
  let item1 = item.item;
  let id_shop = useSelector((state) => state.user.currentShop);
  let likeDislike = LikeDislike(item1.LikeDislikes);
  const dispatch = useDispatch();
  return (
    <div className={style.aa} key={item.index}>
      <p>Owner: {item1.owner}</p>
      <p>Comment: {item1.comment}</p>
      <button
        className={style.like}
        onClick={() => {
          dispatch(
            leaveLikeDislikeOnCommentThunk({
              owner: item1.owner,
              id_shop: id_shop,
              id_review: item.id_review,
              id_comment: item.index,
              rate: true,
            })
          );
        }}
      >
        {likeDislike.like}
      </button>
      <button
        className={style.dislike}
        onClick={() => {
          dispatch(
            leaveLikeDislikeOnCommentThunk({
              owner: item1.owner,
              id_shop: id_shop,
              id_review: item.id_review,
              id_comment: item.index,
              rate: false,
            })
          );
        }}
      >
        {likeDislike.dislike}
      </button>
    </div>
  );
}
export default Comment;
