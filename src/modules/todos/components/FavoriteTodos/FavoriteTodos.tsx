import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import ItemTodo from "src/modules/common/components/ItemTodo";
import styles from "./FavoriteTodos.module.scss";

export default function FavoriteTodos() {
  const { lists } = useContext(ListsContext);

  const filteredTodos = lists?.map((list: any) =>
    list?.todos
      ?.filter((todo: any) => todo.isFavorite == true)
      .map((filteredTodo: string, index: number) => (
        <ItemTodo key={index} todo={filteredTodo} listId={list.id} />
      ))
  );

  return <div className={styles["favorite-todos"]}>{filteredTodos}</div>;
}
