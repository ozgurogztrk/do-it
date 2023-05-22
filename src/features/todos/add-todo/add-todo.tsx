import { useContext, useState } from "react";
import { db } from "src/utils/firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import { notContains } from "src/utils/not-contains";
import ButtonIcon from "src/components/button-icon";
import InputText from "src/components/input-text";
import styles from "./add-todo.module.scss";

export default function AddTodo({ id = 0 }: AddTodoProps) {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create a reactive todoTitle variable to use it in the InputText component
  const [todoTitle, setTodoTitle] = useState("");

  // Create a variable named docRef to get a specific document in list-collection
  const docRef = doc(db, "list-collection", "1wSSriX8Y6ism0UyzTJP");

  // The function of adding a new todo to cloud firestore
  const addNewTodo = async (event: any) => {
    event.preventDefault();

    // Check if the new todo title is already in the todos array in the lists variable with the specified id
    if (notContains(lists[id].todos, todoTitle)) {
      const newTodo = {
        id: [...lists][id].todos.length,
        title: todoTitle,
        isFavorite: false,
      };

      const updatedLists = [...lists];

      updatedLists[id].todos.push(newTodo);

      await updateDoc(docRef, {
        lists: updatedLists,
      });

      setTodoTitle("");
    }
  };

  return (
    <form className={styles["add-todo"]} onSubmit={addNewTodo}>
      <ButtonIcon type="submit" icon="lucide:plus" isAbsolute={true} />
      <InputText
        placeholder="Add Something To Do"
        hasIcon={true}
        onChange={(event) => setTodoTitle(event.target.value)}
        value={todoTitle}
      />
    </form>
  );
}
