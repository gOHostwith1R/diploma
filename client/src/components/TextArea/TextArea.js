import "./textArea.styles.css";

export const TextArea = ({ onChange, placeholder }) => (
  <textarea onChange={onChange} placeholder={placeholder} />
);
