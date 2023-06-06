import styles from "./base-card.module.scss";

type BaseCardProps = {
  children?: React.ReactNode;
};

const BaseCard = ({ children }: BaseCardProps) => {
  return <div className={styles["base-card"]}>{children}</div>;
};

export default BaseCard;
