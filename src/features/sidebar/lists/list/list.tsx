import { NavLink } from "react-router-dom";
import styles from "./list.module.scss";

export default function List({ title = "Default List", id = "0" }: ListProps) {
  return (
    <NavLink
      to={`/${id}`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["list"]
      }
    >
      <p className={styles["list__text"]}>{title}</p>
    </NavLink>
  );
}
