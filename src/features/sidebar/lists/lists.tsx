import { useContext } from "react";
import { ListsContext } from "src/contexts/lists-context";
import List from "./list";
import AddList from "./add-list";
import styles from "./lists.module.scss";

export default function Lists({ sidebarState = false }: ListsProps) {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  return (
    <section className={sidebarState ? styles.lists : styles.hidden}>
      <p className={styles.lists__title}>Lists</p>

      <div className={styles.lists__content}>
        {lists.map(({ id, title }: ListsMapProps) => (
          <List key={id} id={id} title={title} />
        ))}
      </div>

      <AddList />
    </section>
  );
}
