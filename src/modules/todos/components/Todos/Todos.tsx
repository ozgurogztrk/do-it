import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import AddTodo from "./AddTodo";
import ItemTodo from "src/modules/common/components/ItemTodo";
import styles from "./Todos.module.scss";
import { useParams } from "react-router-dom";

export default function Todos() {
  const { lists } = useContext(ListsContext);
  const { id }: any = useParams();

  return (
    <div className={styles.todos}>
      <AddTodo listId={id} />

      {lists[id]?.todos?.map((todo: string, index: number) => (
        <ItemTodo key={index} todo={todo} listId={id} />
      ))}
    </div>
  );
}
