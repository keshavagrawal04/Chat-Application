import clsx from "clsx";

const TextInput = (props) => {
  const {
    label,
    name,
    type,
    placeholder,
    formik,
    disabled = false,
    required = false,
    style = "",
  } = props;
  return (
    <>
      <div>
        <label htmlFor="productName" className="form-label">
          {label}{" "}
          {required ? <span className="text-danger fw-bold">*</span> : ""}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          disabled={disabled}
          className={clsx("form-control rounded-3 ps-3 py-2", style)}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          style={{
            border: `1.5px solid ${
              formik.touched[name] && formik.errors[name]
                ? "rgb(200, 23, 23)"
                : "#01256033"
            }`,
          }}
        />
      </div>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-danger error w-100">{formik.errors[name]}</div>
      ) : (
        <div className="error2"></div>
      )}
    </>
  );
};

export default TextInput;
