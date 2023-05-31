import ChangeEmail from "./change-email";
import ChangePassword from "./change-password";
import DeleteAccount from "./delete-account";
import styles from "./settings.module.scss";

export default function Settings() {
  return (
    <section className={styles.settings}>
      <ChangeEmail />
      <ChangePassword />
      <DeleteAccount />
    </section>
  );
}
