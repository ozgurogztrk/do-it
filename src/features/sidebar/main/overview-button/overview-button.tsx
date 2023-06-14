import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./overview-button.module.scss";

const OverviewButton = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <NavLink
      to={`/overview`}
      className={({ isActive }) =>
        `${styles["overview-button"]} ${
          isActive ? styles["active"] : styles["inactive"]
        } ${styles[theme]}`
      }
    >
      <Icon icon={"lucide:home"} />
      <p className={styles["overview-button__text"]}>Overview</p>
    </NavLink>
  );
};

export default OverviewButton;
