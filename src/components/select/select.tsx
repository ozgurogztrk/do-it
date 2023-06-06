import styles from "./select.module.scss";

type SelectProps = {
  selectTitle?: string;
  value: string;
  options: [{ value: string; title: string }];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

const Select = ({
  selectTitle = "",
  value,
  onChange,
  options = [{ value: "optionValue", title: "Option 1" }],
}: SelectProps) => {
  return (
    <div className={styles["wrapper"]}>
      {selectTitle.length > 0 ? <h3>{selectTitle}</h3> : null}

      <select className={styles["select"]} value={value} onChange={onChange}>
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
};

export default Select;
