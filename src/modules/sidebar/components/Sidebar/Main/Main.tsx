import ItemFavorites from "./ItemFavorites";
import styles from "./Main.module.scss";

export default function Lists({ sidebarState = false }) {
  return (
    <div className={sidebarState ? styles.main : styles.hidden}>
      <p className={styles.main__header}>Main</p>

      <ItemFavorites />
    </div>
  );
}
