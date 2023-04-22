import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import ItemList from "./ItemList";
import AddList from "./AddList";
import styles from "./Lists.module.scss";

export default function Lists({ sidebarState = false }) {
  const { lists } = useContext(ListsContext);

  return (
    <div className={sidebarState ? styles.lists : styles.hidden}>
      <p className={styles.lists__header}>Lists</p>

      {lists.map(({ id, title }: any) => (
        <ItemList key={id} pathId={id} title={title} />
      ))}

      <AddList />
    </div>
  );
}
