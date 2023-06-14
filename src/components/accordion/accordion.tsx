import { useContext } from "react";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./accordion.module.scss";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isAccordionOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Accordion = ({
  title,
  children,
  isAccordionOpen,
  onClick,
}: AccordionProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.accordion__header} ${styles[theme]}`}
        onClick={onClick}
      >
        <h3>{title}</h3>
        <Icon
          icon={isAccordionOpen ? "lucide:arrow-up" : "lucide:arrow-down"}
        />
      </div>

      <div className={styles.accordion__content}>
        {isAccordionOpen ? children : null}
      </div>
    </div>
  );
};

export default Accordion;
