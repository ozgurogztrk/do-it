import styles from "./input-password.module.scss";

export default function InputPassword({
  inputTitle = "",
  value,
  title = "Enter a password with a minimum length of 6 characters",
  placeholder = "Enter Your Password...",
  minLength = 6,
  hasIcon = false,
  onChange,
}: InputPasswordProps) {
  return (
    <div className={styles["input-wrapper"]}>
      {inputTitle.length > 0 ? (
        <p className={styles["input-password-title"]}>{inputTitle}</p>
      ) : null}

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
    </div>
  );
}
