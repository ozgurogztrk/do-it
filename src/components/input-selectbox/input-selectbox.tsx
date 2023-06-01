import styles from "./input-selectbox.module.scss";

export default function InputSelectbox({
  inputTitle = "",
  name = "selectbox",
  options = [
    { value: "1", title: "Option 1" },
    { value: "2", title: "Option 2" },
    { value: "3", title: "Option 3" },
  ],
}: InputSelectboxProps) {
  return (
    <div>
      {inputTitle.length > 0 ? (
        <p className={styles["input-selectbox-title"]}>{inputTitle}</p>
      ) : null}

      <select className={styles["input-selectbox"]} name={name}>
        {options.map((value: string, title: string) => (
          <option value={value}>{title}</option>
        ))}
      </select>
    </div>
  );
}
