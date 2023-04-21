import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.scss";
import Lists from "../Lists/Lists";

export default function Sidebar() {
  const [activeState, setActiveState] = useState<boolean>(true);

  const navVariant = {
    width: activeState ? "400px" : "30px",
  };

  const toggleSidebar = () => {
    setActiveState(!activeState);
  };

  return (
    <motion.nav
      className={styles.sidebar}
      animate={navVariant}
      transition={{ duration: "0.25", type: "spring" }}
    >
      <div className={styles.sidebar__header}>
        <h1 className={activeState ? "" : styles.hidden}>To Do</h1>

        <Icon
          icon={activeState ? "lucide:x" : "lucide:menu"}
          onClick={toggleSidebar}
        />
      </div>

      <Lists sidebarState={activeState} />
    </motion.nav>
  );
}
