import { useContext } from "react";
import { Icon } from "@iconify/react";
import { ListsContext } from "src/contexts/lists-context";
import styles from "./todo.module.scss";

export default function Todo({
  id = 0,
  todo,
  setDetailsState,
  setSelectedTodoState,
  setFavoriteTodosId = () => 0,
}: TodoProps) {
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
    setLists((getTodo().isFavorite = !todo.isFavorite));
  };

  return (
    <div className={styles.todo} onClick={toggleTodoDetails}>
      <p> {todo.title}</p>

      <button type="button" onClick={setFavorite}>
        <Icon icon={todo.isFavorite ? "lucide:heart-off" : "lucide:heart"} />
      </button>
    </div>
  );
}
