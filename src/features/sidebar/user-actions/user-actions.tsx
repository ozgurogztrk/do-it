import SignOut from "./sign-out";
import SwitchTheme from "./switch-theme";
import Settings from "./settings";
import styles from "./user-actions.module.scss";

export default function UserActions({
  sidebarState = false,
}: UserActionsProps) {
  return (
    <section className={sidebarState ? styles["user-actions"] : styles.hidden}>
      <SignOut />
      <SwitchTheme />
      <Settings />
    </section>
  );
}
