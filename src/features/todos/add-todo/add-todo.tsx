import { useContext } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { getFormData } from "src/utils/get-form-data";
import { notContains } from "src/utils/not-contains";
import ButtonIcon from "src/components/button-icon";
import InputText from "src/components/input-text";
import styles from "./add-todo.module.scss";

export default function AddTodo({ id = 0 }: AddTodoProps) {
  const { lists, setLists } = useContext(ListsContext);

  const addNewTodo = (event: any) => {
    event.preventDefault();

    if (notContains(lists[id].todos, getFormData(event)?.todoTitle)) {
      const updatedList = [...lists];

      updatedList[id].todos = [
        ...updatedList[id].todos,
        { title: getFormData(event).todoTitle },
      ];

      setLists(updatedList);

      event.target.reset();
    }
  };

  return (
    <form className={styles["add-todo"]} onSubmit={addNewTodo}>
      <ButtonIcon type="submit" icon="lucide:plus" isAbsolute={true} />
      <InputText
        name="todoTitle"
        placeholder="Add Somethiıng To Do"
        hasIcon={true}
      />
    </form>
  );
}
