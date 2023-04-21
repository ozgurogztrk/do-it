import { useContext } from "react";
import { ListContext } from "src/contexts/listContext";
import AddTodo from "../AddTodo";
import Todo from "../TodoItem";
import styles from "./Todos.module.scss";

export default function Container({ listId }: any) {
  const { list } = useContext(ListContext);

  return (
    <div className={styles.todos}>
      <AddTodo listId={listId} />

      {list[listId]?.todos?.map((todo: string, index: number) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
