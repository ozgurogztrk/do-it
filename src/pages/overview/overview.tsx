import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { PageContainer } from "src/components/page-container";
import { OverviewTodos } from "src/features/todos/overview-todos";
import styles from "./overview.module.scss";

const Overview = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <PageContainer>
      <div className={`${styles["overview-header"]} ${styles[theme]}`}>
        <div id="sidebar-toggle"></div>
        <h1>Overview</h1>
      </div>

      <OverviewTodos />
    </PageContainer>
  );
};

export default Overview;
