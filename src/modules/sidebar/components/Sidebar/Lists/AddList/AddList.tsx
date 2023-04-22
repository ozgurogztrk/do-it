import { Icon } from "@iconify/react";
import { useContext } from "react";
import { ListsContext } from "src/contexts/listsContext";
import styles from "./AddList.module.scss";

export default function AddList() {
  const { lists, setLists } = useContext(ListsContext);

  const addNewList = (event: any) => {
    event.preventDefault();

    const notContained = lists.every((obj: { title: string }) => {
      return obj.title !== getFormData(event)?.listTitle;
    });

    if (notContained) {
      setLists([
        ...lists,
        { id: lists.length, title: getFormData(event).listTitle, todos: [] },
      ]);

      event.target.reset();
    }
  };

  return (
    <form className={styles["add-list"]} onSubmit={addNewList}>
      <button type="submit">
        <Icon icon={"lucide:plus"} />
      </button>

      <input
        type="text"
        name="listTitle"
        defaultValue=""
        pattern="^[^\s]+(\s[^\s]+)*$"
        placeholder="Add New List"
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
