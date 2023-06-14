import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { updateDoc } from "firebase/firestore";
import { ListsContext } from "src/contexts/lists-context";
import { ThemeContext } from "src/contexts/theme-context";
import { InputText } from "src/components/input-text";
import { Select } from "src/components/select";
import { InputCheckbox } from "src/components/input-checkbox";
import { IconButton } from "src/components/icon-button";
import { Button } from "src/components/button";
import { Modal } from "src/components/modal";
import styles from "./todo-details.module.scss";

type TodoDetailsProps = {
  listId?: number;
  setIsDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTodo: {
    id: number;
    title: string;
    isFavorite: boolean;
    isCompleted: boolean;
  };
};

const TodoDetails = ({
  listId = 0,
  setIsDetailsOpen,
  selectedTodo,
}: TodoDetailsProps) => {
  // Get lists and userDocRef variable from lists context
  const { lists, userDocRef } = useContext(ListsContext);

  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Create a reactive variable to check if the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create reactive todoTitle and todoFavorite variables to use them in the InputText components
  const [todoTitle, setTodoTitle] = useState(selectedTodo?.title);
  const [currentList, setCurrentList] = useState(listId.toString());
  const [isTodoFavorite, setIsTodoFavorite] = useState(
    selectedTodo?.isFavorite
  );

  // The function of closing the todo details menu
  const closeDetails = () => {
    setIsDetailsOpen(false);
  };

  // The function of updating new todo details to cloud firestore
  const saveNewTodoDetails = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (listId == parseInt(currentList)) {
      const updatedLists = [...lists];

      updatedLists[listId].todos[selectedTodo.id] = {
        id: selectedTodo.id,
        title: todoTitle,
        isFavorite: isTodoFavorite,
        isCompleted: selectedTodo.isCompleted,
      };

      await updateDoc(userDocRef, {
        lists: updatedLists,
      });
    } else {
      // Move to another list

      deleteTodo();

      const updatedLists = [...lists];

      const newTodo = {
        id: updatedLists[parseInt(currentList)].todos.length,
        title: todoTitle,
        isFavorite: isTodoFavorite,
        isCompleted: selectedTodo.isCompleted,
      };

      updatedLists[parseInt(currentList)].todos.push(newTodo);

      await updateDoc(userDocRef, {
        lists: updatedLists,
      });
    }

    closeDetails();
  };

  // The function of toggling a confirmation modal to delete the current todo
  const toggleDeleteModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // The function of deleting the current todo
  const deleteTodo = async () => {
    const updatedLists = [...lists];
    const todos = updatedLists[listId].todos;

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
  };
  return createPortal(
    <div className={styles.backdrop}>
      <motion.section
        className={`${styles["todo-details"]} ${styles[theme]}`}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <div className={`${styles["todo-details__header"]} ${styles[theme]}`}>
          <h1>Details:</h1>
          <IconButton icon={"lucide:x"} onClick={closeDetails} />
        </div>

        <form onSubmit={saveNewTodoDetails}>
          <div className={styles["todo-details__inputs"]}>
            <InputText
              inputTitle="Change Title"
              placeholder="Add New Title"
              onChange={(event) => setTodoTitle(event.target.value)}
              value={todoTitle}
            />

            <Select
              selectTitle="Move To List"
              options={lists.map((list: any) => ({
                value: list.id.toString(),
                title: list.title,
              }))}
              onChange={(event) => setCurrentList(event.target.value)}
              value={currentList}
            />

            <InputCheckbox
              inputTitle="Add To Favorites"
              onChange={(event) => setIsTodoFavorite(event.target.checked)}
              isChecked={isTodoFavorite}
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
                <Button
                  onClick={() => {
                    deleteTodo();
                    toggleDeleteModal();
                    closeDetails();
                  }}
                >
                  Yes
                </Button>
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
};

export default TodoDetails;
