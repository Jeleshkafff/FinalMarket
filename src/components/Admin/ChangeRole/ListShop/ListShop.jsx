import { useSelector } from "react-redux";
import styles from "./listShop.module.css";
function ListShop() {
  const shops = useSelector((state) => state.admin.shops);
  console.log(shops);
  return (
    <div>
      <ul className={styles.ul}>
        {shops.map(({ address, city, statusClose }, index) => (
          <li key={index} className={styles.li}>
            {console.log(address, city, statusClose, index)}
            <p>
              {index + ".    "}
              {address}
            </p>
            <p>{city}</p>
            <p>Close:{statusClose ? "close" : "not close"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListShop;
