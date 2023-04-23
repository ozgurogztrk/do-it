import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import styles from "./ItemTodo.module.scss";

export default function ItemTodo({
  listId = 0,
  todo,
  setDetailsState,
  setSelectedTodoState,
}: any) {
  const { lists, setLists } = useContext(ListsContext);

  const toggleTodoDetails = () => {
    setDetailsState(false);

    setTimeout(() => {
      setDetailsState(true);
    }, 250);

    setSelectedTodoState(getTodo);
  };

  const getTodo = () => {
    const updatedList = [...lists];

    return updatedList[listId].todos[todo.id];
  };

  const setFavorite = () => {
    const updatedList = [...lists];

    updatedList[listId].todos[todo.id].isFavorite = !todo.isFavorite;

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
