import styles from "./input-text.module.scss";

export default function InputText({
  inputTitle = "",
  title,
  value,
  placeholder = "Placeholder...",
  hasIcon = false,
  onChange,
}: InputTextProps) {
  return (
    <div className={styles["input-wrapper"]}>
      {inputTitle.length > 0 ? <h3>{inputTitle}</h3> : null}

      <input
        type="text"
        className={
          hasIcon
            ? `${styles["input-text"]} ${styles["with-icon"]}`
            : styles["input-text"]
        }
        value={value}
        placeholder={placeholder}
        title={title}
        pattern="^[^\s]+(\s[^\s]+)*$"
        onChange={onChange}
        required
      />
    </div>
  );
}
