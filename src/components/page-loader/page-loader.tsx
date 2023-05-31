import PageContainer from "../page-container";
import styles from "./page-loader.module.scss";

export default function PageLoader() {
  return (
    <PageContainer>
      <div className={styles["page-loader"]}>
        <div className={styles["page-loader__spinner"]}></div>
      </div>
    </PageContainer>
  );
}
