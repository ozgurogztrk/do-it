import { useContext } from "react";
import { ListContext } from "src/contexts/listContext";
import ItemList from "./ItemList";
import AddList from "./AddList";
import styles from "./Lists.module.scss";

export default function Lists({ sidebarState = false }) {
  const { list } = useContext(ListContext);

  return (
    <div className={sidebarState ? styles.lists : styles.hidden}>
      <p className={styles.lists__header}>Lists</p>

      {list.map(({ id, title }: any) => (
        <ItemList key={id} pathId={id} title={title} />
      ))}

      <AddList />
    </div>
  );
}
