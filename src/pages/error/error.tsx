import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { PageContainer } from "src/components/page-container";
import styles from "./error.module.scss";

const Error = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <PageContainer>
      <div className={`${styles.error} ${styles[theme]}`}>
        <h1>Error 404 - Page Not Found</h1>
      </div>
    </PageContainer>
  );
};

export default Error;
