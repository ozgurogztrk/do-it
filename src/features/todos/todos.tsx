import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ListsContext } from "src/contexts/lists-context";
import { AddTodo } from "./add-todo";
import { Todo } from "src/features/todos/todo";
import { TodoDetails } from "src/features/todos/todo-details";
import { Accordion } from "src/components/accordion";
import styles from "./todos.module.scss";

const Todos = () => {
  // Get the value of id parameter from '/list-page/:id' URL
  const { id }: any = useParams();

  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive isDetailsOpen, isAccordionOpen and selectedTodo variables
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const [selectedTodo, setSelectedTodo] = useState();

  // Function to toggle accordion
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
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

      <Accordion
        isAccordionOpen={isAccordionOpen}
        title={`Completed - ${
          lists[id]?.todos.filter((todo: any) => todo.isCompleted).length
        }`}
        onClick={toggleAccordion}
      >
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
      </Accordion>

      <AnimatePresence>
        {isDetailsOpen ? (
          <TodoDetails
            setIsDetailsOpen={setIsDetailsOpen}
            selectedTodo={selectedTodo!}
            id={id}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Todos;
