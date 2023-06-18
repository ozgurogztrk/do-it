import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { SignOutButton } from "./sign-out-button";
import { ThemeButton } from "./theme-button";
import { SettingsButton } from "./settings-button";
import styles from "./user-actions.module.scss";

const UserActions = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen variable from sidebar context
  const { isSidebarOpen } = useContext(SidebarContext);
  return (
    <section
      className={
        isSidebarOpen
          ? `${styles["user-actions"]} ${styles[theme]}`
          : styles.hidden
      }
    >
      <SignOutButton />
      <ThemeButton />
      <SettingsButton />
    </section>
  );
};

export default UserActions;
