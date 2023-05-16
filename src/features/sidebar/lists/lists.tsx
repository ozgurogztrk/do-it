import { useContext } from "react";
import { ListsContext } from "src/contexts/lists-context";
import List from "./list";
import AddList from "./add-list";
import styles from "./lists.module.scss";

export default function Lists({ sidebarState = false }: ListsProps) {
  const { lists } = useContext(ListsContext);

  return (
    <div className={sidebarState ? styles["lists"] : styles.hidden}>
      <p>Lists</p>

      {lists.map(({ id, title }: ListsMapProps) => (
        <List key={id} id={id} title={title} />
      ))}

      <AddList />
    </div>
  );
}
