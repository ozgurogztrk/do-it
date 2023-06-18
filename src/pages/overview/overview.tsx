import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { SidebarContext } from "src/contexts/sidebar-context";
import { PageContainer } from "src/components/page-container";
import { OverviewTodos } from "src/features/todos/overview-todos";
import { IconButton } from "src/components/icon-button";
import styles from "./overview.module.scss";

const Overview = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);

  // Get isSidebarOpen and toggleSidebar variables from sidebar context
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <PageContainer>
      <div className={`${styles["overview-header"]} ${styles[theme]}`}>
        <div id="sidebar-toggle">
          {!isSidebarOpen ? (
            <IconButton icon={"lucide:menu"} onClick={toggleSidebar} />
          ) : null}
        </div>
        <h1>Overview</h1>
      </div>

      <OverviewTodos />
    </PageContainer>
  );
};

export default Overview;
