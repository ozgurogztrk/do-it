import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import styles from "./overview-button.module.scss";

const OverviewButton = () => {
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
};

export default OverviewButton;
