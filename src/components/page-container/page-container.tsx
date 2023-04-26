import { motion } from "framer-motion";
import styles from "./page-container.module.scss";

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <motion.main
      className={styles["page-container"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.main>
  );
}
