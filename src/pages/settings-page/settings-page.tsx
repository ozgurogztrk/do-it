import { PageContainer } from "src/components/page-container";
import { Settings } from "src/features/settings";
import styles from "./settings-page.module.scss";

const SettingsPage = () => {
  return (
    <PageContainer>
      <div className={styles["settings-page-header"]}>
        <div id="sidebar-toggle"></div>
        <h1>Settings</h1>
      </div>

      <Settings />
    </PageContainer>
  );
};

export default SettingsPage;
