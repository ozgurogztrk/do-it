import ItemFavorites from "./item-favorites";
import styles from "./section-main.module.scss";

export default function SectionMain({
  sidebarState = false,
}: SectionMainProps) {
  return (
    <div className={sidebarState ? styles["section-main"] : styles.hidden}>
      <p className={styles["section-main__header"]}>Main</p>

      <ItemFavorites />
    </div>
  );
}
