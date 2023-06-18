import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import styles from "./list-button.module.scss";

type ListProps = {
  title?: string;
  id?: string;
};

const ListButton = ({ title = "Default List", id = "0" }: ListProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get toggleSidebar variable from sidebar context
  const { toggleSidebar } = useContext(SidebarContext);

  // Check if the user is on mobile screen
  const isMobileScreen = useMediaQuery({ query: "(max-width: 481px)" });
  return (
    <NavLink
      to={`/list-page/${id}`}
      onClick={() => {
        isMobileScreen
          ? setTimeout(() => {
              toggleSidebar();
            }, 150)
          : null;
      }}
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
