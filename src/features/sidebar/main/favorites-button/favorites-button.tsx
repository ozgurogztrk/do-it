import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import styles from "./favorites-button.module.scss";

const FavoritesButton = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get toggleSidebar variable from sidebar context
  const { toggleSidebar } = useContext(SidebarContext);

  // Check if the user is on mobile screen
  const isMobileScreen = useMediaQuery({ query: "(max-width: 481px)" });
  return (
    <NavLink
      to={`/favorites`}
      onClick={() => {
        isMobileScreen
          ? setTimeout(() => {
              toggleSidebar();
            }, 150)
          : null;
      }}
      className={({ isActive }) =>
        `${styles["favorites-button"]} ${
          isActive ? styles["active"] : styles["inactive"]
        } ${styles[theme]}`
      }
    >
      <Icon icon={"lucide:heart"} />
      <p className={styles["favorites-button__text"]}>Favorites</p>
    </NavLink>
  );
};

export default FavoritesButton;
