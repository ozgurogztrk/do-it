import { NavLink } from "react-router-dom";
import styles from "./ItemList.module.scss";

type itemListTypes = {
  title: string;
  pathId: string;
};

export default function ItemList({
  title = "Default List",
  pathId = "0",
}: itemListTypes) {
  return (
    <NavLink
      to={`/${pathId}`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["item-list"]
      }
    >
      <p className={styles["item-list__text"]}> {title}</p>
    </NavLink>
  );
}
