import { useContext } from "react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./base-card.module.scss";

type BaseCardProps = {
  className?: string;
  children?: React.ReactNode;
};

const BaseCard = ({ className, children }: BaseCardProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles["base-card"]} ${className} ${styles[theme]}`}>
      {children}
    </div>
  );
};

export default BaseCard;
