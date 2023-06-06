import { ChangeEmail } from "./change-email";
import { ChangePassword } from "./change-password";
import { DeleteAccount } from "./delete-account";
import styles from "./settings.module.scss";

const Settings = () => {
  return (
    <section className={styles.settings}>
      <ChangeEmail />
      <ChangePassword />
      <DeleteAccount />
    </section>
  );
};

export default Settings;
