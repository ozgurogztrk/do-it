import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./modal.module.scss";

export default function Modal({ isModalOpen, children }: ModalProps) {
  return createPortal(
    <AnimatePresence>
      {isModalOpen ? (
        <div className={styles.backdrop}>
          <motion.div
            className={styles.modal}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.getElementById("root") as HTMLElement
  );
}
