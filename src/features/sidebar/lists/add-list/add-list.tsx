import { useContext, useState } from "react";
import { updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import { notContains } from "src/utils/not-contains";
import { IconButton } from "src/components/icon-button";
import { InputText } from "src/components/input-text";
import styles from "./add-list.module.scss";

const AddList = () => {
  // Get lists and userDocRef variable from lists context
  const { lists, userDocRef } = useContext(ListsContext);

  // Create a reactive listTitle variable to use it in the InputText component
  const [listTitle, setListTitle] = useState("");

  // The function of adding a new list to cloud firestore
  const addNewList = async (event: any) => {
    event.preventDefault();

    // Check if the new list title is already in the lists variable
    if (notContains(lists, listTitle)) {
      await updateDoc(userDocRef, {
        lists: [
          ...lists,
          {
            id: lists.length,
            title: listTitle,
            todos: [],
          },
        ],
      }).catch((error) => console.error(error.code, error.message));

      setListTitle("");
    }
  };
  return (
    <form className={styles["add-list"]} onSubmit={addNewList}>
      <IconButton type="submit" icon="lucide:plus" isAbsolute={true} />

      <InputText
        placeholder="Add New List"
        hasIcon={true}
        onChange={(event) => setListTitle(event.target.value)}
        value={listTitle}
      />
    </form>
  );
};

export default AddList;
