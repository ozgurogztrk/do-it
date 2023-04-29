import styles from "./button.module.scss";

export default function Button({
  type = "button",
  role = "primary",
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[role]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
