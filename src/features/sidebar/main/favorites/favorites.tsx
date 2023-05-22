import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styles from "./favorites.module.scss";

export default function Favorites() {
  return (
    <NavLink
      to={`/favorites`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["favorites"]
      }
    >
      <Icon icon={"lucide:heart"} />
      <p className={styles["favorites__text"]}>Favorites</p>
    </NavLink>
  );
}
