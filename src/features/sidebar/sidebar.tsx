import { useState } from "react";
import { motion } from "framer-motion";
import Main from "./main";
import Lists from "./lists";
import styles from "./sidebar.module.scss";
import Header from "./header";

export default function Sidebar() {
  const [activeState, setActiveState] = useState<boolean>(true);

  const sidebarVariants = {
    opened: {
      width: 380,
      transition: { duration: 0.2 },
    },
    closed: {
      width: 30,
      transition: { duration: 0.2 },
    },
  };

  const toggleSidebar = () => {
    setActiveState(!activeState);
  };

  return (
    <motion.nav
      className={styles.sidebar}
      initial={false}
      animate={activeState ? "opened" : "closed"}
      variants={sidebarVariants}
    >
      <Header activeState={activeState} toggleEvent={toggleSidebar} />

      <div className={styles.sidebar__content}>
        <Main sidebarState={activeState} />
        <Lists sidebarState={activeState} />
      </div>
    </motion.nav>
  );
}
