import { useEffect } from "react";
import { createPortal } from "react-dom";
import ButtonIcon from "src/components/button-icon";
import styles from "./header.module.scss";

export default function Header({ activeState, toggleEvent }: HeaderProps) {
  return (
    <section className={styles.header}>
      <h1 className={activeState ? "" : styles.hidden}>To Do</h1>

      {activeState ? (
        <ButtonIcon icon={"lucide:x"} onClick={toggleEvent} />
      ) : (
        createPortal(
          <ButtonIcon icon={"lucide:menu"} onClick={toggleEvent} />,
          document.getElementById("sidebar-toggle") as HTMLElement
        )
      )}
    </section>
  );
}
