import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionMain from "./section-main";
import SectionLists from "./section-lists";
import styles from "./sidebar.module.scss";

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

      <SectionMain sidebarState={activeState} />
      <SectionLists sidebarState={activeState} />
    </motion.nav>
  );
}
