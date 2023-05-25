import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ListsContext } from "src/contexts/lists-context";
import AddTodo from "./add-todo";
import Todo from "src/features/todos/todo";
import TodoDetails from "src/features/todos/todo-details";
import styles from "./todos.module.scss";
import { AnimatePresence } from "framer-motion";

export default function Todos() {
  // Get the value of id parameter from '/list-page/:id' URL
  const { id }: any = useParams();

  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive details and selectedTodo variables
  const [detailsState, setDetailsState] = useState(false);
  const [selectedTodoState, setSelectedTodoState] = useState();

  return (
    <div className={styles.todos}>
      <AddTodo id={id} />

      {lists[id]?.todos?.map((todo: any, index: number) => (
        <Todo
          key={index}
          todo={todo}
          id={id}
          setDetailsState={setDetailsState}
          setSelectedTodoState={setSelectedTodoState}
        />
      ))}

      <AnimatePresence>
        {detailsState ? (
          <TodoDetails
            activeState={detailsState}
            setActiveState={setDetailsState}
            selectedTodoState={selectedTodoState}
            id={id}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
