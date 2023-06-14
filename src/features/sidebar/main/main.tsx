import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { OverviewButton } from "./overview-button";
import { FavoritesButton } from "./favorites-button";
import styles from "./main.module.scss";

type MainProps = { sidebarState?: boolean };

const Main = ({ sidebarState = false }: MainProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={
        sidebarState ? `${styles.main} ${styles[theme]}` : styles.hidden
      }
    >
      <h3 className={styles.main__title}>Main</h3>

      <OverviewButton />
      <FavoritesButton />
    </section>
  );
};

export default Main;
