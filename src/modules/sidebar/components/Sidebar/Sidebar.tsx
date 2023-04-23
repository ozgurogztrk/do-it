import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.scss";
import Lists from "./Lists";
import Main from "./Main";

export default function Sidebar() {
  const [activeState, setActiveState] = useState<boolean>(true);

  const sidebarVariant = {
    width: activeState ? "300px" : "30px",
    minWidth: activeState ? "300px" : "30px",
  };

  const toggleSidebar = () => {
    setActiveState(!activeState);
  };

  return (
    <motion.nav
      className={styles.sidebar}
      animate={sidebarVariant}
      transition={{ duration: "0.25", type: "spring" }}
    >
      <div className={styles.sidebar__header}>
        <h1 className={activeState ? "" : styles.hidden}>To Do</h1>

        <Icon
          icon={activeState ? "lucide:x" : "lucide:menu"}
          onClick={toggleSidebar}
        />
      </div>

      <Main sidebarState={activeState} />
      <Lists sidebarState={activeState} />
    </motion.nav>
  );
}
