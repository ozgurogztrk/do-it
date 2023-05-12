import { useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { notContains } from "src/utils/not-contains";
import ButtonIcon from "src/components/button-icon";
import InputText from "src/components/input-text";
import styles from "./add-todo.module.scss";

export default function AddTodo({ id = 0 }: AddTodoProps) {
  const { lists, setLists } = useContext(ListsContext);
  const [todoTitle, setTodoTitle] = useState("");

  const addNewTodo = (event: any) => {
    event.preventDefault();

    if (notContains(lists[id].todos, todoTitle)) {
      const updatedList = [...lists];

      updatedList[id].todos = [
        ...updatedList[id].todos,
        {
          id: updatedList[id].todos.length,
          title: todoTitle,
          isFavorite: false,
        },
      ];

      setLists(updatedList);

      event.target.reset();
    }
  };

  return (
    <form className={styles["add-todo"]} onSubmit={addNewTodo}>
      <ButtonIcon type="submit" icon="lucide:plus" isAbsolute={true} />
      <InputText
        placeholder="Add Something To Do"
        hasIcon={true}
        onChange={(event) => setTodoTitle(event.target.value)}
      />
    </form>
  );
}
