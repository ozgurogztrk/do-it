import { useContext } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { notContains } from "src/utils/not-contains";
import { getFormData } from "src/utils/get-form-data";
import { ListsContext } from "src/contexts/lists-context";
import InputText from "src/components/input-text";
import ButtonIcon from "src/components/button-icon";
import Button from "src/components/button";
import InputCheckbox from "src/components/input-checkbox";
import styles from "./item-todo-details.module.scss";

export default function ItemTodoDetails({
  id = 0,
  activeState = false,
  setActiveState,
  selectedTodoState,
}: ItemTodoDetailsProps) {
  const { lists, setLists } = useContext(ListsContext);

  const detailsVariant = {
    width: activeState ? "400px" : "0px",
    minWidth: activeState ? "400px" : "0px",
  };

  const closeDetails = () => {
    setActiveState(false);
  };

  const saveNewTodoDetails = (event: any) => {
    event.preventDefault();

    const updatedList = [...lists];

    updatedList[id].todos[selectedTodoState.id] = {
      id: selectedTodoState.id,
      title: getFormData(event).todoTitle,
      isFavorite: getFormData(event).todoFavoriteState,
    };

    setLists(updatedList);

    closeDetails();
  };

  const deleteTodo = () => {
    closeDetails();
  };

  return createPortal(
    <div className={styles.backdrop}>
      <motion.section
        className={styles["item-todo-details"]}
        animate={detailsVariant}
        transition={{ duration: "0.25", type: "spring" }}
      >
        <div className={styles["item-todo-details__header"]}>
          <h1>Todo Details:</h1>
          <ButtonIcon icon={"lucide:x"} onClick={closeDetails} />
        </div>

        <form onSubmit={saveNewTodoDetails}>
          <div className={styles["item-todo-details__inputs"]}>
            <InputText
              defaultValue={selectedTodoState.title}
              name="todoTitle"
              placeholder="Add New Title"
            />

            <InputCheckbox
              defaultChecked={selectedTodoState.isFavorite}
              name="todoFavoriteState"
            >
              Add To Favorites
            </InputCheckbox>
          </div>

          <div className={styles["item-todo-details__buttons"]}>
            <Button type="submit">Save Changes</Button>
            <Button role="secondary" onClick={deleteTodo}>
              Delete Todo
            </Button>
          </div>
        </form>
      </motion.section>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
