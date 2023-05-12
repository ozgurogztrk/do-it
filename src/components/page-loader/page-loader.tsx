import PageContainer from "../page-container/page-container";
import styles from "./page-loader.module.scss";

export default function PageLoader() {
  return (
    <PageContainer>
      <div className={styles["page-loader"]}>
        <h1>Loading...</h1>
      </div>
    </PageContainer>
  );
}
