import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { PageContainer } from "src/components/page-container";
import { IconButton } from "src/components/icon-button";
import { Settings } from "src/features/settings";
import styles from "./settings-page.module.scss";

const SettingsPage = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen and toggleSidebar variables from sidebar context
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <PageContainer>
      <div className={`${styles["settings-page-header"]} ${styles[theme]}`}>
        <div id="sidebar-toggle">
          {!isSidebarOpen ? (
            <IconButton icon={"lucide:menu"} onClick={toggleSidebar} />
          ) : null}
        </div>

        <h1>Settings</h1>
      </div>

      <Settings />
    </PageContainer>
  );
};

export default SettingsPage;
