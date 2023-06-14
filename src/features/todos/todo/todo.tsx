import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { onSnapshot, updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import { ThemeContext } from "src/contexts/theme-context";
import { InputCheckbox } from "src/components/input-checkbox";
import styles from "./todo.module.scss";

type TodoProps = {
  listId?: number;
  todo: {
    id: number;
    title: string;
    isFavorite: boolean;
    isCompleted: boolean;
  };
  setIsDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTodo: React.Dispatch<React.SetStateAction<undefined>>;
  setListId?: React.Dispatch<React.SetStateAction<number>>;
};

const Todo = ({
  listId = 0,
  todo,
  setIsDetailsOpen,
  setSelectedTodo,
  setListId = () => 0,
}: TodoProps) => {
  // Get lists and userDocRef variables from lists context
  const { lists, userDocRef } = useContext(ListsContext);

  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get the information of selected todo
  const getTodo = () => {
    const updatedList = [...lists];
    return updatedList?.[listId]?.todos?.[todo.id] ?? null;
  };

  // Create reactive isTodoDone variable to use it in the InputCheckbox component
  const [isTodoCompleted, setIsTodoCompleted] = useState(
    getTodo() ? getTodo().isCompleted : false
  );

  // The function of toggling the todo details menu
  const toggleTodoDetails = () => {
    setIsDetailsOpen(true);
    setSelectedTodo(getTodo());
    setListId(listId);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(userDocRef, (doc: any) => {
      const updatedLists = [...doc.data().lists];
      const updatedTodo = updatedLists[listId]?.todos.find(
        (t: any) => t.id === todo.id
      );

      if (updatedTodo) {
        setIsTodoCompleted(updatedTodo.isCompleted);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [listId, todo.id, userDocRef]);

  useEffect(() => {
    const updateTodoCompletedStatus = async () => {
      const updatedLists = [...lists];
      updatedLists[listId].todos[todo.id].isCompleted = isTodoCompleted;

      await updateDoc(userDocRef, {
        lists: updatedLists,
      });
    };

    updateTodoCompletedStatus();
  }, [isTodoCompleted, listId, todo.id, userDocRef]);

  return (
    <motion.div
      className={`${styles.todo} ${styles[theme]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <InputCheckbox
        onChange={(event) => setIsTodoCompleted(event.target.checked)}
        isChecked={isTodoCompleted}
      />
      <p onClick={toggleTodoDetails}>{todo.title}</p>
    </motion.div>
  );
};

export default Todo;
