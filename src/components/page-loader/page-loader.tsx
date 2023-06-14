import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import { PageContainer } from "../page-container";
import styles from "./page-loader.module.scss";

const PageLoader = () => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <PageContainer>
      <div className={`${styles["page-loader"]} ${styles[theme]}`}>
        <div
          className={`${styles["page-loader__spinner"]} ${styles[theme]}`}
        ></div>
      </div>
    </PageContainer>
  );
};

export default PageLoader;
