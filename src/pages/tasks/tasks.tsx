import PageContainer from "src/components/page-container";
import FavoriteTodos from "src/features/todos/favorite-todos";
import styles from "./tasks.module.scss";

export default function Tasks() {
  return (
    <PageContainer>
      <div className={styles["tasks-header"]}>
        <div id="sidebar-toggle"></div>
        <h1>Tasks</h1>
      </div>

      <FavoriteTodos />
    </PageContainer>
  );
}
