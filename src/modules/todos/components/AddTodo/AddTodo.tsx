import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ListContext } from "src/contexts/listContext";
import styles from "./AddTodo.module.scss";

export default function AddTodo({ listId = 0 }: any) {
  const { list, setList } = useContext(ListContext);

  const addNewTodo = (event: any) => {
    event.preventDefault();

    const notContained = list[listId].todos.every((todoElement: string) => {
      return todoElement !== getFormData(event)?.todoTitle;
    });

    if (notContained) {
      const updatedList = [...list];

      updatedList[listId].todos = [
        ...updatedList[listId].todos,
        getFormData(event).todoTitle,
      ];

      setList(updatedList);

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
