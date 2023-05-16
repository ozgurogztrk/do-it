import { Icon } from "@iconify/react";
import styles from "./header.module.scss";

export default function Header({ activeState, toggleEvent }: HeaderProps) {
  return (
    <section className={styles.header}>
      <h1 className={activeState ? "" : styles.hidden}>To Do</h1>

      <Icon
        icon={activeState ? "lucide:x" : "lucide:menu"}
        onClick={toggleEvent}
      />
    </section>
  );
}
