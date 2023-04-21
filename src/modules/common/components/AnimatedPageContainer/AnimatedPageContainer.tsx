import { motion } from "framer-motion";
import styles from "./AnimatedPageContainer.module.scss";

export default function AnimatedPageContainer(props: any) {
  return (
    <motion.main
      className={styles["animated-page-container"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {props.children}
    </motion.main>
  );
}
