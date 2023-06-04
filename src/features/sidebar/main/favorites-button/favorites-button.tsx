import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styles from "./favorites-button.module.scss";

export default function FavoritesButton() {
  return (
    <NavLink
      to={`/favorites`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["favorites-button"]
      }
    >
      <Icon icon={"lucide:heart"} />
      <p className={styles["favorites-button__text"]}>Favorites</p>
    </NavLink>
  );
}
