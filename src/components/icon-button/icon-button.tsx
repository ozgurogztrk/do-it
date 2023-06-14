import { useContext } from "react";
import { Icon } from "@iconify/react";
import { ThemeContext } from "src/contexts/theme-context";
import styles from "./icon-button.module.scss";

type IconButtonProps = {
  type?: "button" | "submit" | "reset";
  icon?: string;
  isAbsolute?: boolean;
  onClick?: React.MouseEventHandler<HTMLOrSVGElement>;
};

const IconButton = ({
  type = "button",
  icon = "lucide:mouse-pointer-click",
  isAbsolute = false,
  onClick,
}: IconButtonProps) => {
  // Get theme variable from theme context
  const { theme } = useContext(ThemeContext);
  return (
    <button
      type={type}
      className={`${styles["icon-button"]} ${
        isAbsolute && styles["absolute"]
      } ${styles[theme]}`}
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
};

export default IconButton;
