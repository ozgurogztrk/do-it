import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./favorites-button.module.scss";

const FavoritesButton = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <NavLink
      to={`/favorites`}
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
