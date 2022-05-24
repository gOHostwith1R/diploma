import { Controller } from "react-hook-form";
import "./select.styles.css";

export const Select = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <select onChange={onChange}>
          <option value="">Выберите опцию</option>
          <option value="Математика">Математика</option>
          <option value="Физика">Физика</option>
          <option value="Программирование">Программирование</option>
          <option value="Другое">Другое</option>
        </select>
      )}
    />
  );
};
