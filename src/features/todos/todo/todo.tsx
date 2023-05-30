import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { onSnapshot, updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import InputCheckbox from "src/components/input-checkbox";
import styles from "./todo.module.scss";

export default function Todo({
  id = 0,
  todo,
  setIsDetailsOpen,
  setSelectedTodo,
  setFavoriteTodosId = () => 0,
}: TodoProps) {
  const { lists, userDocRef } = useContext(ListsContext);

  // Get the information of selected todo
  const getTodo = () => {
    const updatedList = [...lists];
    return updatedList?.[id]?.todos?.[todo.id] ?? null;
  };

  // Create reactive isTodoDone variable to use it in the InputCheckbox component
  const [isTodoCompleted, setIsTodoCompleted] = useState(
    getTodo() ? getTodo().isCompleted : false
  );

  // The function of toggling the todo details menu
  const toggleTodoDetails = () => {
    setIsDetailsOpen(true);
    setSelectedTodo(getTodo());
    setFavoriteTodosId(id);
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(userDocRef, (doc: any) => {
      const updatedLists = [...doc.data().lists];
      const updatedTodo = updatedLists[id].todos.find(
        (t: any) => t.id === todo.id
      );

      if (updatedTodo) {
        setIsTodoCompleted(updatedTodo.isCompleted);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [id, todo.id, userDocRef]);

  useEffect(() => {
    const updateTodoCompletedStatus = async () => {
      const updatedLists = [...lists];
      updatedLists[id].todos[todo.id].isCompleted = isTodoCompleted;

      await updateDoc(userDocRef, {
        lists: updatedLists,
      });
    };

    updateTodoCompletedStatus();
  }, [isTodoCompleted, id, todo.id, userDocRef]);

  return (
    <motion.div
      className={styles.todo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <InputCheckbox
        onChange={(event) => setIsTodoCompleted(event.target.checked)}
        checked={isTodoCompleted}
      />
      <p onClick={toggleTodoDetails}>{todo.title}</p>
    </motion.div>
  );
}
