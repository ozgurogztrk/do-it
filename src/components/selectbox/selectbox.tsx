import styles from "./selectbox.module.scss";

export default function SelectBox({
  inputTitle = "",
  value,
  onChange,
  options = [
    { value: "a", title: "Option 1" },
    { value: "b", title: "Option 2" },
    { value: "c", title: "Option 3" },
  ],
}: InputSelectboxProps) {
  return (
    <div className={styles["wrapper"]}>
      {inputTitle.length > 0 ? <h3>{inputTitle}</h3> : null}

      <select className={styles["selectbox"]} value={value} onChange={onChange}>
        {options.map(
          (option: { value: string; title: string }, index: number) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          )
        )}
      </select>
    </div>
  );
}
