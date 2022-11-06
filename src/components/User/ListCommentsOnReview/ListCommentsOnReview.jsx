import { useDispatch, useSelector } from "react-redux";
import React from "react";

function ListCommentsOnReview({ owner, commnent, likeDislike }) {
  const [getData, setGetData] = React.useState(false);
  React.useEffect(() => {
    setGetData(true);
    console.log(owner, commnent, likeDislike);
  }, [owner, commnent, likeDislike]);
  if (getData) {
    return (
      <p>get</p>
      //   <li>
      //       <p>get</p>
      //     <p>{owner}</p>
      //     <p>{commnent}</p>
      //     <p>{likeDislike}</p>
      //   </li>
    );
  }
}
export default ListCommentsOnReview;
