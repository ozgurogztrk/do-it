import { Icon } from "@iconify/react";
import styles from "./accordion.module.scss";

export default function Accordion({
  isAccordionOpen,
  title,
  children,
  onClick,
}: AccordionProps) {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header} onClick={onClick}>
        <h3>{title}</h3>
        <Icon
          icon={isAccordionOpen ? "lucide:arrow-up" : "lucide:arrow-down"}
        />
      </div>

      {isAccordionOpen ? children : null}
    </div>
  );
}
