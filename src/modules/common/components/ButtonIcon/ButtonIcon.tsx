import { Icon } from "@iconify/react";
import styles from "./ButtonIcon.module.scss";

export default function ButtonIcon({
  type = "button",
  icon = "lucide:mouse-pointer-click",
  isAbsolute = false,
  click = () => console.log("Clicked!"),
}: any) {
  return (
    <button
      type={type}
      className={
        isAbsolute
          ? `${styles["button-icon"]} ${styles["absolute"]}`
          : styles["button-icon"]
      }
      onClick={click}
    >
      <Icon icon={icon} />
    </button>
  );
}
