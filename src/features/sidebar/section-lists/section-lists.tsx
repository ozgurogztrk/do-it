import { useContext } from "react";
import { ListsContext } from "src/contexts/lists-context";
import ItemList from "./item-list";
import AddList from "./add-list";
import styles from "./section-lists.module.scss";

export default function SectionLists({
  sidebarState = false,
}: SectionListsProps) {
  const { lists } = useContext(ListsContext);

  return (
    <div className={sidebarState ? styles["section-lists"] : styles.hidden}>
      <p className={styles["section-lists__header"]}>Lists</p>

      {lists.map(({ id, title }: ListsMapProps) => (
        <ItemList key={id} id={id} title={title} />
      ))}

      <AddList />
    </div>
  );
}
