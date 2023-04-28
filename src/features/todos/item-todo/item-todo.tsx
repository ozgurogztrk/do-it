import { useContext } from "react";
import { Icon } from "@iconify/react";
import { ListsContext } from "src/contexts/lists-context";
import styles from "./item-todo.module.scss";

export default function ItemTodo({
  id = 0,
  todo,
  setDetailsState,
  setSelectedTodoState,
  setFavoriteTodosId = () => 0,
}: ItemTodoProps) {
  const { lists, setLists } = useContext(ListsContext);

  const toggleTodoDetails = () => {
    setDetailsState(true);
    setSelectedTodoState(getTodo);
    setFavoriteTodosId(id);
  };

  const getTodo = () => {
    const updatedList = [...lists];

    return updatedList[id].todos[todo.id];
  };

  const setFavorite = () => {
    const updatedList = [...lists];

    updatedList[id].todos[todo.id].isFavorite = !todo.isFavorite;

    setLists(updatedList);
  };

  return (
    <div className={styles["item-todo"]} onClick={toggleTodoDetails}>
      <p> {todo.title}</p>

      <button type="button" onClick={setFavorite}>
        <Icon icon={todo.isFavorite ? "lucide:heart-off" : "lucide:heart"} />
      </button>
    </div>
  );
}
