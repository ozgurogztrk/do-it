import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { Header } from "./header";
import { Main } from "./main";
import { Lists } from "./lists";
import { UserActions } from "./user-actions";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen variable from theme context
  const { isSidebarOpen } = useContext(SidebarContext);

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

  return (
    <motion.nav
      className={`${styles.sidebar} ${styles[theme]}`}
      initial={isMobileScreen ? true : false}
      animate={isSidebarOpen ? "opened" : "closed"}
      variants={sidebarVariants}
    >
      <Header />

      <div className={styles.sidebar__content}>
        <Main />
        <Lists />
        <UserActions />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
