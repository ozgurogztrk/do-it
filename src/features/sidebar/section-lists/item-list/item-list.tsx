import { NavLink } from "react-router-dom";
import styles from "./item-list.module.scss";

export default function ItemList({
  title = "Default List",
  id = "0",
}: ItemListProps) {
  return (
    <NavLink
      to={`/${id}`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["item-list"]
      }
    >
      <p className={styles["item-list__text"]}> {title}</p>
    </NavLink>
  );
}
