import { AnimatePresence } from "framer-motion";
import { Fragment, useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { Todo } from "src/features/todos/todo";
import { TodoDetails } from "src/features/todos/todo-details";
import { Accordion } from "src/components/accordion";
import styles from "./overview-todos.module.scss";

const OverviewTodos = () => {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create reactive isDetailsOpen, accordionStates selectedTodo and todoId variables
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [accordionStates, setAccordionStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedTodo, setSelectedTodo] = useState();
  const [listId, setListId] = useState(0);

  // Function to toggle list specific accordion
  const toggleAccordion = (accordionId: number) => {
    setAccordionStates((prevState) => ({
      ...prevState,
      [accordionId]: !prevState[accordionId],
    }));
  };
  return (
    <div className={styles["overview-todos"]}>
      {lists?.map((list: any) => (
        <Fragment key={list.id}>
          <Accordion
            title={`${list.title} - ${list.todos.length}`}
            isAccordionOpen={accordionStates[list.id] || false}
            onClick={() => toggleAccordion(list.id)}
          >
            {list?.todos.map((todo: any) => (
              <Todo
                key={todo.id}
                todo={todo}
                listId={list.id}
                setIsDetailsOpen={setIsDetailsOpen}
                setSelectedTodo={setSelectedTodo}
                setListId={setListId}
              />
            ))}
          </Accordion>
        </Fragment>
      ))}

      <AnimatePresence>
        {isDetailsOpen ? (
          <TodoDetails
            setIsDetailsOpen={setIsDetailsOpen}
            selectedTodo={selectedTodo!}
            listId={listId}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default OverviewTodos;
