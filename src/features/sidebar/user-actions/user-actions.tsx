import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { SignOutButton } from "./sign-out-button";
import { ThemeButton } from "./theme-button";
import { SettingsButton } from "./settings-button";
import styles from "./user-actions.module.scss";

type UserActionsProps = {
  sidebarState?: boolean;
};

const UserActions = ({ sidebarState = false }: UserActionsProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={
        sidebarState
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
