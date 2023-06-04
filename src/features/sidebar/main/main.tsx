import OverviewButton from "./overview-button";
import FavoritesButton from "./favorites-button";
import styles from "./main.module.scss";

export default function Main({ sidebarState = false }: MainProps) {
  return (
    <section className={sidebarState ? styles.main : styles.hidden}>
      <h3 className={styles.main__title}>Main</h3>

      <OverviewButton />
      <FavoritesButton />
    </section>
  );
}
