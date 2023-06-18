import { useContext } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { IconButton } from "src/components/icon-button";
import styles from "./header.module.scss";

const Header = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen and toggleSidebar variables from sidebar context
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <section className={` ${styles.header} ${styles[theme]}`}>
      <h1 className={isSidebarOpen ? "" : styles.hidden}>Do It</h1>

      {isSidebarOpen ? (
        <IconButton icon={"lucide:x"} onClick={toggleSidebar} />
      ) : null}
    </section>
  );
};

export default Header;
