import { useContext, useState } from "react";
import { updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import { IconButton } from "src/components/icon-button";
import { InputText } from "src/components/input-text";
import styles from "./add-todo.module.scss";

type AddTodoProps = {
  id?: number;
};

const AddTodo = ({ id = 0 }: AddTodoProps) => {
  // Get lists and userDocRef variable from lists context
  const { lists, userDocRef } = useContext(ListsContext);

  // Create a reactive todoTitle variable to use it in the InputText component
  const [todoTitle, setTodoTitle] = useState("");

  // The function of adding a new todo to cloud firestore
  const addNewTodo = async (event: any) => {
    event.preventDefault();

    const newTodo = {
      id: [...lists][id].todos.length,
      title: todoTitle,
      isFavorite: false,
      isCompleted: false,
    };

    const updatedLists = [...lists];

    updatedLists[id].todos.push(newTodo);

    await updateDoc(userDocRef, {
      lists: updatedLists,
    }).catch((error) => console.error(error.code, error.message));

    setTodoTitle("");
  };
  return (
    <form className={styles["add-todo"]} onSubmit={addNewTodo}>
      <IconButton type="submit" icon="lucide:plus" isAbsolute={true} />
      <InputText
        placeholder="Add Something To Do"
        hasIcon={true}
        onChange={(event) => setTodoTitle(event.target.value)}
        value={todoTitle}
      />
    </form>
  );
};

export default AddTodo;
