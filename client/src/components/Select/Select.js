import { Controller } from "react-hook-form";
import "./select.styles.css";

export const Select = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <select onChange={onChange}>
          <option value="">Please choose an option</option>
          <option value="mathematics">Mathematics</option>
          <option value="physics">Physics</option>
          <option value="programming">Programming</option>
          <option value="other">Other</option>
        </select>
      )}
    />
  );
};
