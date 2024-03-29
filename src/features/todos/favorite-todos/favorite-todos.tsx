import { AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { Todo } from "src/features/todos/todo";
import { TodoDetails } from "src/features/todos/todo-details";
import styles from "./favorite-todos.module.scss";

const FavoriteTodos = () => {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive isDetailsOpen, selectedTodo and todoId variables
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [listId, setListId] = useState(0);

  return (
    <div className={styles["favorite-todos"]}>
      {lists?.map((list: any) =>
        list?.todos
          ?.filter(
            (todo: any) => todo.isFavorite == true && todo.isCompleted == false
          )
          .map((filteredTodo: any) => (
            <Todo
              key={filteredTodo.id}
              todo={filteredTodo}
              listId={list.id}
              setIsDetailsOpen={setIsDetailsOpen}
              setSelectedTodo={setSelectedTodo}
              setListId={setListId}
            />
          ))
      )}

      <AnimatePresence>
        {isDetailsOpen ? (
          <TodoDetails
            setIsDetailsOpen={setIsDetailsOpen}
            isDetailsOpen={isDetailsOpen}
            selectedTodo={selectedTodo!}
            listId={listId}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default FavoriteTodos;
