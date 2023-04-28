import { useContext, useEffect, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import ItemTodo from "src/features/todos/item-todo";
import ItemTodoDetails from "../item-todo-details/item-todo-details";
import styles from "./favorite-todos.module.scss";

export default function FavoriteTodos() {
  const { lists } = useContext(ListsContext);

  const [detailsState, setDetailsState] = useState(false);
  const [selectedTodoState, setSelectedTodoState] = useState();
  const [favoriteTodosId, setFavoriteTodosId] = useState(0);

  // const filteredTodos = lists?.map((list: any) =>
  //   list?.todos
  //     ?.filter((todo: any) => todo.isFavorite == true)
  //     .map((filteredTodo: any, index: number) => (
  //       <ItemTodo
  //         key={index}
  //         todo={filteredTodo}
  //         id={list.id}
  //         setDetailsState={setDetailsState}
  //         setSelectedTodoState={setSelectedTodoState}
  //         setFavoriteTodosId={setFavoriteTodosId}
  //       />
  //     ))
  // );

  return (
    <div className={styles["favorite-todos"]}>
      {lists?.map((list: any) =>
        list?.todos
          ?.filter((todo: any) => todo.isFavorite == true)
          .map((filteredTodo: any, index: number) => (
            <ItemTodo
              key={index}
              todo={filteredTodo}
              id={list.id}
              setDetailsState={setDetailsState}
              setSelectedTodoState={setSelectedTodoState}
              setFavoriteTodosId={setFavoriteTodosId}
            />
          ))
      )}

      {detailsState ? (
        <ItemTodoDetails
          activeState={detailsState}
          setActiveState={setDetailsState}
          selectedTodoState={selectedTodoState}
          id={favoriteTodosId}
        />
      ) : null}
    </div>
  );
}
