import styles from "./input-text.module.scss";

export default function InputText({
  name = "inputText",
  defaultValue = "",
  title,
  placeholder = "Placeholder...",
  hasIcon = false,
}: InputTextProps) {
  return (
    <input
      type="text"
      className={
        hasIcon
          ? `${styles["input-text"]} ${styles["with-icon"]}`
          : styles["input-text"]
      }
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      title={title}
      pattern="^[^\s]+(\s[^\s]+)*$"
      required
    />
  );
}
