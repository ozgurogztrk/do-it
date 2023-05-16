import { useContext, useState } from "react";
import { ListsContext } from "src/contexts/lists-context";
import { notContains } from "src/utils/not-contains";
import ButtonIcon from "src/components/button-icon";
import InputText from "src/components/input-text";
import styles from "./add-list.module.scss";

export default function AddList() {
  const { lists, setLists } = useContext(ListsContext);
  const [listTitle, setListTitle] = useState("");

  const addNewList = (event: any) => {
    event.preventDefault();

    if (notContains(lists, listTitle)) {
      setLists([...lists, { id: lists.length, title: listTitle, todos: [] }]);

      event.target.reset();
    }
  };

  return (
    <form className={styles["add-list"]} onSubmit={addNewList}>
      <ButtonIcon type="submit" icon="lucide:plus" isAbsolute={true} />
      <InputText
        placeholder="Add New List"
        hasIcon={true}
        onChange={(event) => setListTitle(event.target.value)}
      />
    </form>
  );
}
