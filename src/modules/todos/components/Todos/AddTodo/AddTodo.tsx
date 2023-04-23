import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import ButtonIcon from "src/modules/common/components/ButtonIcon";
import InputText from "src/modules/common/components/InputText";
import styles from "./AddTodo.module.scss";

export default function AddTodo({ listId = 0 }: any) {
  const { lists, setLists } = useContext(ListsContext);

  const addNewTodo = (event: any) => {
    event.preventDefault();

    const notContained = lists[listId].todos.every((todoElement: string) => {
      return todoElement !== getFormData(event)?.todoTitle;
    });

    if (notContained) {
      const updatedList = [...lists];

      updatedList[listId].todos = [
        ...updatedList[listId].todos,
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

const getFormData = (formEvent: any) => {
  const form = formEvent.target;
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};
