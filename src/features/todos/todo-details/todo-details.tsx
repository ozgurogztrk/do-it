import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { db } from "src/utils/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import InputText from "src/components/input-text";
import ButtonIcon from "src/components/button-icon";
import Button from "src/components/button";
import InputCheckbox from "src/components/input-checkbox";
import Modal from "src/components/modal";
import styles from "./todo-details.module.scss";

export default function TodoDetails({
  id = 0,
  activeState = false,
  setActiveState,
  selectedTodoState,
}: TodoDetailsProps) {
  // Get lists variable from lists context
  const { lists } = useContext(ListsContext);

  // Create a reactive variable to check if the modal is open or not
  const [modalState, setModalState] = useState(false);

  // Create reactive todoTitle and todoFavorite variables to use them in the InputText components
  const [todoTitle, setTodoTitle] = useState(selectedTodoState.title);
  const [todoFavoriteState, setTodoFavoriteState] = useState(
    selectedTodoState.isFavorite
  );

  // Create a variable named docRef to get a specific document in list-collection
  const docRef = doc(db, "list-collection", "1wSSriX8Y6ism0UyzTJP");

  // Animation properties
  const sidebarVariants = {
    opened: {
      width: 400,
      transition: { duration: 0.2 },
    },
    closed: {
      width: 0,
      transition: { duration: 0.2 },
    },
  };

  // The function of closing the todo details menu
  const closeDetails = () => {
    setActiveState(false);
  };

  // The function of updating new todo details to cloud firestore
  const saveNewTodoDetails = async (event: any) => {
    event.preventDefault();

    const updatedLists = [...lists];

    updatedLists[id].todos[selectedTodoState.id] = {
      id: selectedTodoState.id,
      title: todoTitle,
      isFavorite: todoFavoriteState,
    };

    await updateDoc(docRef, {
      lists: updatedLists,
    });

    closeDetails();
  };

  // The function of toggling a confirmation modal to delete the current todo
  const toggleDeleteModal = () => {
    setModalState(!modalState);
  };

  const deleteTodo = () => {
    toggleDeleteModal();
  };

  return createPortal(
    <div className={styles.backdrop}>
      <motion.section
        className={styles["todo-details"]}
        animate={activeState ? "opened" : "closed"}
        variants={sidebarVariants}
      >
        <div className={styles["todo-details__header"]}>
          <h1>Todo Details:</h1>
          <ButtonIcon icon={"lucide:x"} onClick={closeDetails} />
        </div>

        <form onSubmit={saveNewTodoDetails}>
          <div className={styles["todo-details__inputs"]}>
            <InputText
              placeholder="Add New Title"
              onChange={(event) => setTodoTitle(event.target.value)}
              value={todoTitle}
            />

            <InputCheckbox
              onChange={(event) => setTodoFavoriteState(event.target.checked)}
              checked={todoFavoriteState}
            >
              Add To Favorites
            </InputCheckbox>
          </div>

          <div className={styles["todo-details__buttons"]}>
            <Button type="submit">Save Changes</Button>
            <Button role="secondary" onClick={toggleDeleteModal}>
              Delete Todo
            </Button>

            <Modal modalState={modalState}>
              <h1>Confirm Your Action!</h1>
              <p>Are you sure you want to delete this item?</p>

              <div className={styles.modal__buttons}>
                <Button onClick={deleteTodo}>Yes</Button>
                <Button role="secondary" onClick={toggleDeleteModal}>
                  Cancel
                </Button>
              </div>
            </Modal>
          </div>
        </form>
      </motion.section>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
