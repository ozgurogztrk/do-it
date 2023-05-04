import styles from "./input-password.module.scss";

export default function InputPassword({
  name = "inputPassword",
  defaultValue = "",
  placeholder = "Enter Your Password...",
  minLength = 6,
  hasIcon = false,
}: InputPasswordProps) {
  return (
    <input
      type="password"
      className={
        hasIcon
          ? `${styles["input-password"]} ${styles["with-icon"]}`
          : styles["input-password"]
      }
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      pattern="[^' ']+"
      minLength={minLength}
      required
    />
  );
}
