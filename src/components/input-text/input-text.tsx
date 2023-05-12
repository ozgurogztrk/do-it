import styles from "./input-text.module.scss";

export default function InputText({
  defaultValue = "",
  title,
  placeholder = "Placeholder...",
  hasIcon = false,
  onChange,
}: InputTextProps) {
  return (
    <input
      type="text"
      className={
        hasIcon
          ? `${styles["input-text"]} ${styles["with-icon"]}`
          : styles["input-text"]
      }
      defaultValue={defaultValue}
      placeholder={placeholder}
      title={title}
      pattern="^[^\s]+(\s[^\s]+)*$"
      onChange={onChange}
      required
    />
  );
}
