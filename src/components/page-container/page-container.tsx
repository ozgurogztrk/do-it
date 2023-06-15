import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./page-container.module.scss";

type PageContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

const PageContainer = ({ className, children }: PageContainerProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.wrapper}  ${styles[theme]}`}>
      <motion.main
        className={`${styles["page-container"]} ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default PageContainer;
