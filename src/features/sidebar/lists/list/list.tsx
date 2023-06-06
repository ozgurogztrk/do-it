import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styles from "./list.module.scss";

type ListProps = {
  title?: string;
  id?: string;
};

const List = ({ title = "Default List", id = "0" }: ListProps) => {
  return (
    <NavLink
      to={`/list-page/${id}`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["list"]
      }
    >
      <Icon icon={"lucide:list"} />
      <p className={styles["list__text"]}>{title}</p>
    </NavLink>
  );
};

export default List;
