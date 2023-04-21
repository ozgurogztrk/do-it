import { NavLink } from "react-router-dom";
import styles from "./ListItem.module.scss";

type listItemTypes = {
  title: string;
  pathId: string;
};

export default function ListItem({
  title = "Default List",
  pathId = "0",
}: listItemTypes) {
  return (
    <NavLink
      to={`/${pathId}`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["list-item"]
      }
    >
      <p className={styles["list-item__text"]}> {title}</p>
    </NavLink>
  );
}
