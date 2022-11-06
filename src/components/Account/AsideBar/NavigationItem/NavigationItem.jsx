import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
function NavigationItem({ nameItem }) {
  return (
    <div className={styles.linki}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activClassName : styles.item
        }
        to={`/${nameItem}`}
      >
        {nameItem}
      </NavLink>
    </div>
    // <div>
    //     <a href={`/${nameItem}`}>{nameItem}</a>
    //      {/* <a href={myhref}></a> */}
    // </div>
  );
}

export default NavigationItem;
