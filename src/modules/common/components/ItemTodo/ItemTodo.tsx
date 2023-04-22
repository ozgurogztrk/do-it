import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import styles from "./ItemTodo.module.scss";

export default function ItemTodo({ todo, listId = 0 }: any) {
  const { lists, setLists } = useContext(ListsContext);

  const setFavorite = () => {
    const updatedList = [...lists];

    updatedList[listId].todos[todo.id].isFavorite = !todo.isFavorite;

    setLists(updatedList);
  };

  return (
    <div className={styles["item-todo"]}>
      <p> {todo.title}</p>

      <button type="button" onClick={setFavorite}>
        <Icon icon={todo.isFavorite ? "lucide:heart-off" : "lucide:heart"} />
      </button>
    </div>
  );
}
