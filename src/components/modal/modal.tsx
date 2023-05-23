import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import styles from "./modal.module.scss";

export default function modal({ modalState, children }: ModalProps) {
  // Animation properties
  const backdropVariants = {
    opened: {
      display: "flex",
      opacity: 1,
      transition: { duration: 0.2 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
      transitionEnd: { display: "none" },
    },
  };

  const modalVariants = {
    opened: {
      scale: 1,
      transition: { duration: 0.2 },
    },
    closed: {
      scale: 0,
      transition: { duration: 0.2 },
    },
  };

  return createPortal(
    <motion.div
      className={styles.backdrop}
      initial={false}
      animate={modalState ? "opened" : "closed"}
      variants={backdropVariants}
    >
      <motion.div
        className={styles.modal}
        initial={false}
        animate={modalState ? "opened" : "closed"}
        variants={modalVariants}
      >
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById("root") as HTMLElement
  );
}
