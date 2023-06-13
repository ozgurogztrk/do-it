import styles from "./base-card.module.scss";

type BaseCardProps = {
  className?: string;
  children?: React.ReactNode;
};

const BaseCard = ({ className, children }: BaseCardProps) => {
  return (
    <div className={`${styles["base-card"]} ${className}`}>{children}</div>
  );
};

export default BaseCard;
