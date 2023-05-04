import styles from "./input-email.module.scss";

export default function InputEmail({
  name = "inputEmail",
  defaultValue = "",
  placeholder = "Enter Your E-Mail....",
  hasIcon = false,
}: InputEmailProps) {
  return (
    <input
      type="email"
      className={
        hasIcon
          ? `${styles["input-email"]} ${styles["with-icon"]}`
          : styles["input-email"]
      }
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      required
    />
  );
}
