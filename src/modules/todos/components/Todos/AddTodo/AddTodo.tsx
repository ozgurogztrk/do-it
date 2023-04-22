import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
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
      <button type="submit">
        <Icon icon={"lucide:plus"} />
      </button>

      <input
        type="text"
        name="todoTitle"
        defaultValue=""
        pattern="^[^\s]+(\s[^\s]+)*$"
        placeholder="Add Something To Do"
        required
      />
    </form>
  );
}

const getFormData = (formEvent: any) => {
  const form = formEvent.target;
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};
