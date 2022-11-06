import style from "./ListReviewOnShop.module.css";
import { useDispatch } from "react-redux";
import { leaveLikeDislikeOnReviewThunk } from "../../../models/users";
import Comment from "./Comment";
function LikeDislike(arr) {
  console.log(arr);
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
function Review(item) {
  let item1 = item.item;
  let id_review = item.index;
  const dispatch = useDispatch();
  console.log(item1);
  console.log(item1.LikeDislikes);
  let likeDislike = LikeDislike(item1.LikeDislikes);
  return (
    <li key={id_review} className={style.li}>
      <p>grade: {item1.stars}</p>
      <p>Commentator: {item1.owner}</p>
      <p>Comment: {item1.comment}</p>
      <button
        className={style.like}
        onClick={() => {
          dispatch(
            leaveLikeDislikeOnReviewThunk({
              owner: item1.owner,
              id_shop: item1.id_shop,
              id_review: id_review,
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
            leaveLikeDislikeOnReviewThunk({
              owner: item1.owner,
              id_shop: item1.id_shop,
              id_review: id_review,
              rate: false,
            })
          );
        }}
      >
        {likeDislike.dislike}
      </button>
      <p></p>
      Responses to comments
      {item1.comments.map((element, index1) => {
        console.log(element);
        return <Comment item={element} id_review={id_review} index={index1} />;
      })}
    </li>
  );
}
export default Review;
