import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { PageContainer } from "src/components/page-container";
import { FavoriteTodos } from "src/features/todos/favorite-todos";
import styles from "./favorites.module.scss";

const Favorites = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <PageContainer>
      <div className={`${styles["favorites-header"]} ${styles[theme]}`}>
        <div id="sidebar-toggle"></div>
        <h1>Favorites</h1>
      </div>

      <FavoriteTodos />
    </PageContainer>
  );
};

export default Favorites;
