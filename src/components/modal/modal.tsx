import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import styles from "./modal.module.scss";

export default function modal({ modalState, children }: ModalProps) {
  const modalVariant = {
    height: modalState ? "fit-content" : "0px",
  };

  return createPortal(
    <div className={styles.backdrop}>
      <motion.div
        className={styles.modal}
        animate={modalVariant}
        transition={{ duration: "0.25", type: "spring" }}
      >
        {children}
      </motion.div>
    </div>,
    document.getElementById("root") as HTMLElement
  );
}
