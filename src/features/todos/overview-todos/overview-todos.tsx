import { AnimatePresence } from "framer-motion";
import { Fragment, useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import Todo from "src/features/todos/todo";
import TodoDetails from "src/features/todos/todo-details";
import styles from "./overview-todos.module.scss";

export default function OverviewTodos() {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive isDetailsOpen, selectedTodo and todoId variables
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [todoId, setTodoId] = useState(0);

  return (
    <div className={styles["overview-todos"]}>
      {lists?.map((list: any) => (
        <Fragment key={list.id}>
          <p className={styles["overview-todos__list-title"]}>
            {list.title} - {list.todos.length}
          </p>

          {list?.todos.map((todo: any) => (
            <Todo
              key={todo.id}
              todo={todo}
              id={list.id}
              setIsDetailsOpen={setIsDetailsOpen}
              setSelectedTodo={setSelectedTodo}
              setTodoId={setTodoId}
            />
          ))}
        </Fragment>
      ))}

      <AnimatePresence>
        {isDetailsOpen ? (
          <TodoDetails
            setIsDetailsOpen={setIsDetailsOpen}
            selectedTodo={selectedTodo}
            id={todoId}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
