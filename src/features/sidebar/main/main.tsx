import Favorites from "./favorites";
import styles from "./main.module.scss";

export default function Main({ sidebarState = false }: MainProps) {
  return (
    <div className={sidebarState ? styles["main"] : styles.hidden}>
      <p>Main</p>

      <Favorites />
    </div>
  );
}
