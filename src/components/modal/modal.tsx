import { useContext } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./modal.module.scss";

type ModalProps = {
  isModalOpen?: boolean;
  children?: React.ReactNode;
};

const Modal = ({ isModalOpen, children }: ModalProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return createPortal(
    <AnimatePresence>
      {isModalOpen ? (
        <div className={styles.backdrop}>
          <motion.div
            className={`${styles.modal} ${styles[theme]}`}
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
};

export default Modal;
