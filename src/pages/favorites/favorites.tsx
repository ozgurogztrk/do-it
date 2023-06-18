import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { PageContainer } from "src/components/page-container";
import { FavoriteTodos } from "src/features/todos/favorite-todos";
import { IconButton } from "src/components/icon-button";
import styles from "./favorites.module.scss";

const Favorites = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen and toggleSidebar variables from sidebar context
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <PageContainer>
      <div className={`${styles["favorites-header"]} ${styles[theme]}`}>
        <div id="sidebar-toggle">
          {!isSidebarOpen ? (
            <IconButton icon={"lucide:menu"} onClick={toggleSidebar} />
          ) : null}
        </div>

        <h1>Favorites</h1>
      </div>

      <FavoriteTodos />
    </PageContainer>
  );
};

export default Favorites;
