import { NavLink } from "react-router-dom";
import styles from "./ItemFavorites.module.scss";

export default function ListItem() {
  return (
    <NavLink
      to={`/favorites`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["item-favorites"]
      }
    >
      <p className={styles["item-favorites__text"]}> Favorites</p>
    </NavLink>
  );
}
