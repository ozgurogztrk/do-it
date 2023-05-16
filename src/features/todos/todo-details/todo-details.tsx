import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
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
  const { lists, setLists } = useContext(ListsContext);

  const [modalState, setModalState] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoFavoriteState, setTodoFavoriteState] = useState(
    selectedTodoState.isFavorite
  );

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

  const closeDetails = () => {
    setActiveState(false);
  };

  const saveNewTodoDetails = (event: any) => {
    event.preventDefault();

    const updatedList = [...lists];

    updatedList[id].todos[selectedTodoState.id] = {
      id: selectedTodoState.id,
      title: todoTitle,
      isFavorite: todoFavoriteState,
    };

    setLists(updatedList);

    closeDetails();
  };

  const deleteTodo = () => {
    setModalState(true);
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
              defaultValue={selectedTodoState.title}
              placeholder="Add New Title"
              onChange={(event) => setTodoTitle(event.target.value)}
            />

            <InputCheckbox
              defaultChecked={selectedTodoState.isFavorite}
              onChange={(event) => setTodoFavoriteState(event.target.checked)}
              isChecked={todoFavoriteState}
            >
              Add To Favorites
            </InputCheckbox>
          </div>

          <div className={styles["todo-details__buttons"]}>
            <Button type="submit">Save Changes</Button>
            <Button role="secondary" onClick={deleteTodo}>
              Delete Todo
            </Button>

            {modalState ? (
              <Modal modalState={modalState}>
                <h1>Confirm Your Action!</h1>
                <p>Are you sure you want to delete this item?</p>

                <div>
                  <Button>Yes</Button>
                  <Button role="secondary">Cancel</Button>
                </div>
              </Modal>
            ) : null}
          </div>
        </form>
      </motion.section>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
