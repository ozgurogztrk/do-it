import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Header } from "./header";
import { Main } from "./main";
import { Lists } from "./lists";
import { UserActions } from "./user-actions";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  // Create a reactive activeState variable to check if the sidebar is open or not
  const [activeState, setActiveState] = useState<boolean>(true);

  // Check if the user is on mobile screen
  const isMobileScreen = useMediaQuery({ query: "(max-width: 481px)" });

  // Animation properties
  const sidebarVariants = {
    opened: {
      width: isMobileScreen ? "93%" : 380,
      transition: { duration: 0.2 },
    },
    closed: {
      width: 0,
      padding: 0,
      transition: { duration: 0.2 },
    },
  };

  // The function of toggling the sidebar menu
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
        <UserActions sidebarState={activeState} />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
