import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { PageContainer } from "src/components/page-container";
import { Settings } from "src/features/settings";
import styles from "./settings-page.module.scss";

const SettingsPage = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <PageContainer>
      <div className={`${styles["settings-page-header"]} ${styles[theme]}`}>
        <div id="sidebar-toggle"></div>
        <h1>Settings</h1>
      </div>

      <Settings />
    </PageContainer>
  );
};

export default SettingsPage;
