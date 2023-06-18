import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { OverviewButton } from "./overview-button";
import { FavoritesButton } from "./favorites-button";
import styles from "./main.module.scss";

const Main = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen variable from sidebar context
  const { isSidebarOpen } = useContext(SidebarContext);
  return (
    <section
      className={
        isSidebarOpen ? `${styles.main} ${styles[theme]}` : styles.hidden
      }
    >
      <h3 className={styles.main__title}>Main</h3>

      <OverviewButton />
      <FavoritesButton />
    </section>
  );
};

export default Main;
