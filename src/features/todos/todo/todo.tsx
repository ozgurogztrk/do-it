import { useContext } from "react";
import { ListsContext } from "src/contexts/lists-context";
import styles from "./todo.module.scss";

export default function Todo({
  id = 0,
  todo,
  setIsDetailsOpen,
  setSelectedTodo,
  setFavoriteTodosId = () => 0,
}: TodoProps) {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // The function of toggling the todo details menu
  const toggleTodoDetails = () => {
    setIsDetailsOpen(true);
    setSelectedTodo(getTodo);
    setFavoriteTodosId(id);
  };

  // Get the information of selected todo
  const getTodo = () => {
    const updatedList = [...lists];

    return updatedList[id].todos[todo.id];
  };

  return (
    <div className={styles.todo} onClick={toggleTodoDetails}>
      <p> {todo.title}</p>
    </div>
  );
}
