import { useContext } from "react";
import { createPortal } from "react-dom";
import { ThemeContext } from "src/contexts/theme-context";
import { IconButton } from "src/components/icon-button";
import styles from "./header.module.scss";

type HeaderProps = {
  activeState: boolean;
  toggleEvent: React.MouseEventHandler<SVGElement>;
};

const Header = ({ activeState, toggleEvent }: HeaderProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <section className={` ${styles.header} ${styles[theme]}`}>
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
