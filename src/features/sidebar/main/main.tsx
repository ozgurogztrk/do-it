import TasksButton from "./tasks-button/tasks-button";
import Favorites from "./favorites";
import styles from "./main.module.scss";

export default function Main({ sidebarState = false }: MainProps) {
  return (
    <section className={sidebarState ? styles.main : styles.hidden}>
      <p className={styles.main__title}>Main</p>

      <TasksButton />
      <Favorites />
    </section>
  );
}
