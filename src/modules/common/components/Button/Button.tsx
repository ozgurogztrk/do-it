import styles from "./Button.module.scss";

export default function Button({
  type = "button",
  role = "--primary",
  click = () => console.log("Clicked!"),
  children,
}: any) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[role]}`}
      onClick={click}
    >
      {children}
    </button>
  );
}
