const Input = ({ name, label, required, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">
        {required && <span className="text-danger">*</span>}
        {label}
      </label>
      <input
        style={{ background: "#fffece" }}
        name={name}
        id={name}
        className="form-control"
        {...rest}
      />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
