import { SignOutButton } from "./sign-out-button";
import { SwitchThemeButton } from "./switch-theme-button";
import { SettingsButton } from "./settings-button";
import styles from "./user-actions.module.scss";

type UserActionsProps = {
  sidebarState?: boolean;
};

const UserActions = ({ sidebarState = false }: UserActionsProps) => {
  return (
    <section className={sidebarState ? styles["user-actions"] : styles.hidden}>
      <SignOutButton />
      <SwitchThemeButton />
      <SettingsButton />
    </section>
  );
};

export default UserActions;
