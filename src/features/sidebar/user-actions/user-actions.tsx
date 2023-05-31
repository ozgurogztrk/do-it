import SignOutButton from "./sign-out-button";
import SwitchThemeButton from "./switch-theme-button";
import SettingsButton from "./settings-button";
import styles from "./user-actions.module.scss";

export default function UserActions({
  sidebarState = false,
}: UserActionsProps) {
  return (
    <section className={sidebarState ? styles["user-actions"] : styles.hidden}>
      <SignOutButton />
      <SwitchThemeButton />
      <SettingsButton />
    </section>
  );
}
