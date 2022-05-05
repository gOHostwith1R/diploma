import "./formAuth.styles.css";

export const FormAuth = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="form__auth">
    {children}
  </form>
);
