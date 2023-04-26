import { useContext } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { getFormData } from "src/utils/get-form-data";
import { notContains } from "src/utils/not-contains";
import ButtonIcon from "src/components/button-icon";
import InputText from "src/components/input-text";
import styles from "./add-list.module.scss";

export default function AddList() {
  const { lists, setLists } = useContext(ListsContext);

  const addNewList = (event: any) => {
    event.preventDefault();

    if (notContains(lists, getFormData(event)?.listTitle)) {
      setLists([
        ...lists,
        { id: lists.length, title: getFormData(event).listTitle, todos: [] },
      ]);

      event.target.reset();
    }
  };

  return (
    <form className={styles["add-list"]} onSubmit={addNewList}>
      <ButtonIcon type="submit" icon="lucide:plus" isAbsolute={true} />
      <InputText name="listTitle" placeholder="Add New List" hasIcon={true} />
    </form>
  );
}
