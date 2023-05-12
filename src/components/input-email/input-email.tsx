import styles from "./input-email.module.scss";

export default function InputEmail({
  defaultValue = "",
  title,
  placeholder = "Enter Your E-Mail....",
  hasIcon = false,
  onChange,
}: InputEmailProps) {
  return (
    <input
      type="email"
      className={
        hasIcon
          ? `${styles["input-email"]} ${styles["with-icon"]}`
          : styles["input-email"]
      }
      defaultValue={defaultValue}
      placeholder={placeholder}
      title={title}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      onChange={onChange}
      required
    />
  );
}
