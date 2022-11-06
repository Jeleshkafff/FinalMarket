import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import styles from "./AsideBar.module.css";
import { useDispatch } from "react-redux";
function AsideBar(arr) {
  console.log(arr.arr[0]);
  const dispatch = useDispatch();
  return (
    <div>
      {arr.arr.map((item, index) => (
        // <button
        //   //   key={index}
        //   onClick={(e) => {
        //     console.log(e.target.textContent);
        //     dispatch({
        //       type: "SetCurrentRazdel",
        //       payload: e.target.textContent,
        //     });
        //   }}
        // >
        //   {item}
        // </button>
          <NavigationItem style={styles.item} key={index} nameItem={item}/>
      ))}
    </div>
  );
}

export default AsideBar;
