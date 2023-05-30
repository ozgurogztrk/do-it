import { AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import Todo from "src/features/todos/todo";
import TodoDetails from "src/features/todos/todo-details";
import styles from "./favorite-todos.module.scss";

export default function FavoriteTodos() {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive activeState, selectedTodo and favoriteTodosId variables
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [favoriteTodosId, setFavoriteTodosId] = useState(0);

  return (
    <div className={styles["favorite-todos"]}>
      {lists?.map((list: any) =>
        list?.todos
          ?.filter(
            (todo: any) => (todo.isFavorite == true, todo.isCompleted == false)
          )
          .map((filteredTodo: any) => (
            <Todo
              key={filteredTodo.id}
              todo={filteredTodo}
              id={list.id}
              setIsDetailsOpen={setIsDetailsOpen}
              setSelectedTodo={setSelectedTodo}
              setFavoriteTodosId={setFavoriteTodosId}
            />
          ))
      )}

      <AnimatePresence>
        {isDetailsOpen ? (
          <TodoDetails
            activeState={isDetailsOpen}
            setIsDetailsOpen={setIsDetailsOpen}
            selectedTodo={selectedTodo}
            id={favoriteTodosId}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
