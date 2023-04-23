import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import styles from "./ItemTodoDetails.module.scss";
import InputText from "../InputText";
import ButtonIcon from "../ButtonIcon";

export default function ItemTodoDetails({
  activeState = false,
  setActiveState,
  selectedTodoState,
  listId = 0,
}: any) {
  const detailsVariant = {
    width: activeState ? "400px" : "0px",
    minWidth: activeState ? "400px" : "0px",
  };

  const closeDetails = () => {
    setActiveState(false);
  };

  const saveNewTodoDetails = (event: any) => {};

  return createPortal(
    <motion.section
      className={styles["item-todo-details"]}
      animate={detailsVariant}
      transition={{ duration: "0.25", type: "spring" }}
    >
      <div>
        <h1>Todo Details:</h1>
      </div>

      <form action="">
        <InputText
          defaultValue={selectedTodoState.title}
          placeholder="Add New Title"
        />
      </form>

      <ButtonIcon icon={"lucide:arrow-right-circle"} click={closeDetails} />
    </motion.section>,
    document.getElementById("root") as HTMLElement
  );
}
