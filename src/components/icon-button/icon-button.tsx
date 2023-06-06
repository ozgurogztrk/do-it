import { Icon } from "@iconify/react";
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
  return (
    <button
      type={type}
      className={
        isAbsolute
          ? `${styles["icon-button"]} ${styles["absolute"]}`
          : styles["icon-button"]
      }
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
};

export default IconButton;
