import styles from "./page-loader.module.scss";

export default function PageLoader() {
  return (
    <div className={styles["page-loader"]}>
      <h1>Loading...</h1>
    </div>
  );
}
