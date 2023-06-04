import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styles from "./tasks-button.module.scss";

export default function TasksButton() {
  return (
    <NavLink
      to={`/tasks`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["tasks-button"]
      }
    >
      <Icon icon={"lucide:home"} />
      <p className={styles["tasks-button__text"]}>Tasks</p>
    </NavLink>
  );
}
