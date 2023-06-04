import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styles from "./overview-button.module.scss";

export default function OverviewButton() {
  return (
    <NavLink
      to={`/overview`}
      className={({ isActive }) =>
        isActive ? styles["--active"] : styles["overview-button"]
      }
    >
      <Icon icon={"lucide:home"} />
      <p className={styles["overview-button__text"]}>Overview</p>
    </NavLink>
  );
}
