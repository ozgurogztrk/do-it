import styles from "./input-password.module.scss";

export default function InputPassword({
  value,
  title = "Enter a password with a minimum length of 6 characters",
  placeholder = "Enter Your Password...",
  minLength = 6,
  hasIcon = false,
  onChange,
}: InputPasswordProps) {
  return (
    <input
      type="password"
      className={
        hasIcon
          ? `${styles["input-password"]} ${styles["with-icon"]}`
          : styles["input-password"]
      }
      value={value}
      placeholder={placeholder}
      title={title}
      minLength={minLength}
      pattern="[^' ']+"
      onChange={onChange}
      required
    />
  );
}
