import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import styles from "./ItemTodoDetails.module.scss";

export default function ItemTodoDetails({
  activeState = false,
  setActiveState,
}: any) {
  const detailsVariant = {
    width: activeState ? "400px" : "0px",
    minWidth: activeState ? "400px" : "0px",
  };

  const closeDetails = () => {
    setActiveState(false);
  };

  return createPortal(
    <motion.section
      className={styles["item-todo-details"]}
      animate={detailsVariant}
      transition={{ duration: "0.25", type: "spring" }}
    >
      <div>
        <h1>Todo Details:</h1>
      </div>

      <Icon icon={"lucide:arrow-right-circle"} onClick={closeDetails} />
    </motion.section>,
    document.getElementById("root") as HTMLElement
  );
}
