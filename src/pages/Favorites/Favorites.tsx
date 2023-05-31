import PageContainer from "src/components/page-container";
import FavoriteTodos from "src/features/todos/favorite-todos";
import styles from "./favorites.module.scss";

export default function Favorites() {
  return (
    <PageContainer>
      <div className={styles["favorites-header"]}>
        <div id="sidebar-toggle"></div>
        <h1>Favorites</h1>
      </div>

      <FavoriteTodos />
    </PageContainer>
  );
}
