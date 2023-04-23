import styles from "./InputText.module.scss";

export default function InputText({
  defaultValue = "",
  name = "inputText",
  placeholder = "Placeholder...",
  hasIcon = false,
}) {
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
