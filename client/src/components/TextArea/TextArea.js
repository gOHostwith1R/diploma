import { Controller } from "react-hook-form";
import "./textArea.styles.css";

export const TextArea = ({ name, placeholder, control }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange } }) => (
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        className="textarea"
      />
    )}
  />
);
