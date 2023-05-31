import PageContainer from "src/components/page-container";
import Settings from "src/features/settings";
import styles from "./settings-page.module.scss";

export default function SettingsPage() {
  return (
    <PageContainer>
      <div className={styles["settings-page-header"]}>
        <div id="sidebar-toggle"></div>
        <h1>Settings</h1>
      </div>

      <Settings />
    </PageContainer>
  );
}
