import { PageContainer } from "src/components/page-container";
import { OverviewTodos } from "src/features/todos/overview-todos";
import styles from "./overview.module.scss";

const Overview = () => {
  return (
    <PageContainer>
      <div className={styles["overview-header"]}>
        <div id="sidebar-toggle"></div>
        <h1>Overview</h1>
      </div>

      <OverviewTodos />
    </PageContainer>
  );
};

export default Overview;
