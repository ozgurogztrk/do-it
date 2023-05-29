import { useContext, useState } from "react";
import { updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import { notContains } from "src/utils/not-contains";
import ButtonIcon from "src/components/button-icon";
import InputText from "src/components/input-text";
import styles from "./add-todo.module.scss";

export default function AddTodo({ id = 0 }: AddTodoProps) {
  // Get lists and userDocRef variable from lists context
  const { lists, userDocRef } = useContext(ListsContext);

  // Create a reactive todoTitle variable to use it in the InputText component
  const [todoTitle, setTodoTitle] = useState("");

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

      await updateDoc(userDocRef, {
        lists: updatedLists,
      }).catch((error) => console.error(error.code, error.message));

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
