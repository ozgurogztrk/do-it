import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./list-button.module.scss";

type ListProps = {
  title?: string;
  id?: string;
};

const ListButton = ({ title = "Default List", id = "0" }: ListProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <NavLink
      to={`/list-page/${id}`}
      className={({ isActive }) =>
        `${styles["list-button"]} ${
          isActive ? styles["active"] : styles["inactive"]
        } ${styles[theme]}`
      }
    >
      <Icon icon={"lucide:list"} />
      <p className={styles["list-button__text"]}>{title}</p>
    </NavLink>
  );
};

export default ListButton;
