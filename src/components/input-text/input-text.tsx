import styles from "./input-text.module.scss";

export default function InputText({
  name = "inputText",
  defaultValue = "",
  placeholder = "Placeholder...",
  hasIcon = false,
}: InputProps) {
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
      pattern="^[^\s]+(\s[^\s]+)*$"
      required
    />
  );
}
