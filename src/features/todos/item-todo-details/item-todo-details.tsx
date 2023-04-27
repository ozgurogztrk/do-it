import { createPortal } from "react-dom";
import { motion } from "framer-motion";
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
  const detailsVariant = {
    width: activeState ? "400px" : "0px",
    minWidth: activeState ? "400px" : "0px",
  };

  const closeDetails = () => {
    setActiveState(false);
  };

  const saveNewTodoDetails = (event: any) => {};

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

        <form>
          <div className={styles["item-todo-details__inputs"]}>
            <InputText
              defaultValue={selectedTodoState.title}
              placeholder="Add New Title"
            />

            <InputCheckbox defaultChecked={selectedTodoState.isFavorite}>
              Add To Favorites
            </InputCheckbox>
          </div>

          <div className={styles["item-todo-details__buttons"]}>
            <Button type="submit">Save Changes</Button>

            <Button>Delete Todo</Button>
          </div>
        </form>
      </motion.section>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
