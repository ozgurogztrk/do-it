import { Icon } from "@iconify/react";
import styles from "./button-icon.module.scss";

export default function ButtonIcon({
  type = "button",
  icon = "lucide:mouse-pointer-click",
  isAbsolute = false,
  onClick,
}: ButtonIconProps) {
  return (
    <button
      type={type}
      className={
        isAbsolute
          ? `${styles["button-icon"]} ${styles["absolute"]}`
          : styles["button-icon"]
      }
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
}
