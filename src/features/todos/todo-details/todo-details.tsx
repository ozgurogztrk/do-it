import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import InputText from "src/components/input-text";
import InputSelectbox from "src/components/input-selectbox";
import InputCheckbox from "src/components/input-checkbox";
import ButtonIcon from "src/components/button-icon";
import Button from "src/components/button";
import Modal from "src/components/modal";
import styles from "./todo-details.module.scss";

export default function TodoDetails({
  id = 0,
  setIsDetailsOpen,
  selectedTodo,
}: TodoDetailsProps) {
  // Get lists and userDocRef variable from lists context
  const { lists, userDocRef } = useContext(ListsContext);

  // Create a reactive variable to check if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create reactive todoTitle and todoFavorite variables to use them in the InputText components
  const [todoTitle, setTodoTitle] = useState(selectedTodo?.title);
  const [isTodoFavorite, setIsTodoFavorite] = useState(
    selectedTodo?.isFavorite
  );

  // The function of closing the todo details menu
  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  // The function of updating new todo details to cloud firestore
  const saveNewTodoDetails = async (event: any) => {
    event.preventDefault();

    const updatedLists = [...lists];

    updatedLists[id].todos[selectedTodo.id].title = todoTitle;
    updatedLists[id].todos[selectedTodo.id].isFavorite = isTodoFavorite;

    await updateDoc(userDocRef, {
      lists: updatedLists,
    });

    closeDetails();
  };

  // The function of toggling a confirmation modal to delete the current todo
  const toggleDeleteModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // The function of deleting the current todo
  const deleteTodo = async () => {
    const updatedLists = [...lists];
    const todos = updatedLists[id].todos;

    const todoIndex = todos.findIndex(
      (todo: any) => todo.id === selectedTodo.id
    );

    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
      todos.map((todo: any) => (todo.id = todos.indexOf(todo)));
    }
    await updateDoc(userDocRef, {
      lists: updatedLists,
    }).catch((error) => console.error(error.code, error.message));

    toggleDeleteModal();
    closeDetails();
  };
  return createPortal(
    <div className={styles.backdrop}>
      <motion.section
        className={styles["todo-details"]}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles["todo-details__header"]}>
          <h1>Todo Details:</h1>
          <ButtonIcon icon={"lucide:x"} onClick={closeDetails} />
        </div>

        <form onSubmit={saveNewTodoDetails}>
          <div className={styles["todo-details__inputs"]}>
            <InputText
              inputTitle="Change Title"
              placeholder="Add New Title"
              onChange={(event) => setTodoTitle(event.target.value)}
              value={todoTitle}
            />

            <InputSelectbox inputTitle="Move To List" />

            <InputCheckbox
              inputTitle="Add To Favorites"
              onChange={(event) => setIsTodoFavorite(event.target.checked)}
              checked={isTodoFavorite}
            />
          </div>

          <div className={styles["todo-details__buttons"]}>
            <Button type="submit">Save Changes</Button>
            <Button role="danger--outline" onClick={toggleDeleteModal}>
              Delete
              <Icon icon="lucide:trash-2" />
            </Button>

            <Modal isModalOpen={isModalOpen}>
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
