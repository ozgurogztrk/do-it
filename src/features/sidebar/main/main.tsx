import OverviewButton from "./overview-button";
import Favorites from "./favorites";
import styles from "./main.module.scss";

export default function Main({ sidebarState = false }: MainProps) {
  return (
    <section className={sidebarState ? styles.main : styles.hidden}>
      <p className={styles.main__title}>Main</p>

      <OverviewButton />
      <Favorites />
    </section>
  );
}
