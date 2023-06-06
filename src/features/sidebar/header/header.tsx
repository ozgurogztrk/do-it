import { createPortal } from "react-dom";
import { IconButton } from "src/components/icon-button";
import styles from "./header.module.scss";

type HeaderProps = {
  activeState: boolean;
  toggleEvent: React.MouseEventHandler<SVGElement>;
};

const Header = ({ activeState, toggleEvent }: HeaderProps) => {
  return (
    <section className={styles.header}>
      <h1 className={activeState ? "" : styles.hidden}>To Do</h1>

      {activeState ? (
        <IconButton icon={"lucide:x"} onClick={toggleEvent} />
      ) : (
        createPortal(
          <IconButton icon={"lucide:menu"} onClick={toggleEvent} />,
          document.getElementById("sidebar-toggle") as HTMLElement
        )
      )}
    </section>
  );
};

export default Header;
