import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ListsContext } from "src/contexts/lists-context";
import AddTodo from "./add-todo";
import Todo from "src/features/todos/todo";
import TodoDetails from "src/features/todos/todo-details";
import styles from "./todos.module.scss";

export default function Todos() {
  // Get the value of id parameter from '/list-page/:id' URL
  const { id }: any = useParams();

  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive activeState and selectedTodo variables
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  return (
    <div className={styles.todos}>
      <AddTodo id={id} />

      {lists[id]?.todos
        ?.filter((todo: any) => todo.isCompleted == false)
        .map((filteredTodo: any) => (
          <Todo
            key={filteredTodo.id}
            todo={filteredTodo}
            id={id}
            setIsDetailsOpen={setIsDetailsOpen}
            setSelectedTodo={setSelectedTodo}
          />
        ))}

      <h2>Completed</h2>

      {lists[id]?.todos
        ?.filter((todo: any) => todo.isCompleted == true)
        .map((filteredTodo: any) => (
          <Todo
            key={filteredTodo.id}
            todo={filteredTodo}
            id={id}
            setIsDetailsOpen={setIsDetailsOpen}
            setSelectedTodo={setSelectedTodo}
          />
        ))}

      <AnimatePresence>
        {isDetailsOpen ? (
          <TodoDetails
            setIsDetailsOpen={setIsDetailsOpen}
            selectedTodo={selectedTodo}
            id={id}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
