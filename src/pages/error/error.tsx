import { PageContainer } from "src/components/page-container";
import styles from "./error.module.scss";

const Error = () => {
  return (
    <PageContainer>
      <div className={styles.error}>
        <h1>Error 404 - Page Not Found</h1>
      </div>
    </PageContainer>
  );
};

export default Error;
