import styles from "./base-card.module.scss";

export default function BaseCard({ children }: BaseCardProps) {
  return <div className={styles["base-card"]}>{children}</div>;
}
