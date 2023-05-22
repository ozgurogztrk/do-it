import { useContext, useState } from "react";
import { db } from "src/utils/firebase-config";
import { updateDoc, doc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import { notContains } from "src/utils/not-contains";
import ButtonIcon from "src/components/button-icon";
import InputText from "src/components/input-text";
import styles from "./add-list.module.scss";

export default function AddList() {
  const { lists } = useContext(ListsContext);
  const [listTitle, setListTitle] = useState("");

  const docRef = doc(db, "list-collection", "1wSSriX8Y6ism0UyzTJP");

  const addNewList = async (event: any) => {
    event.preventDefault();

    if (notContains(lists, listTitle)) {
      await updateDoc(docRef, {
        lists: [...lists, { id: lists.length, title: listTitle, todos: [] }],
      });

      setListTitle("");
    }
  };

  return (
    <form className={styles["add-list"]} onSubmit={addNewList}>
      <ButtonIcon type="submit" icon="lucide:plus" isAbsolute={true} />
      <InputText
        placeholder="Add New List"
        hasIcon={true}
        onChange={(event) => setListTitle(event.target.value)}
        value={listTitle}
      />
    </form>
  );
}
