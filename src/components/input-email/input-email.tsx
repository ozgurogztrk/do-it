import styles from "./input-email.module.scss";

export default function InputEmail({
  title,
  value,
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
      value={value}
      placeholder={placeholder}
      title={title}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      onChange={onChange}
      required
    />
  );
}
