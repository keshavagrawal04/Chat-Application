import { TextInput } from "../../components";
import { useFormik } from "formik";
import { loginSchema } from "../../schema";
import { Link } from "react-router-dom";

const Login = ({ setActiveKey }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
        <TextInput
          type="email"
          name="email"
          label="Email Address"
          formik={formik}
          placeholder="Enter Email Address"
          required={true}
        />
        <TextInput
          type="password"
          name="password"
          label="Password"
          formik={formik}
          placeholder="Enter Password"
          required={true}
        />
        <Link className="mb-3" to="/forgot-password">
          Forgot Password ?
        </Link>
        <button
          style={{ backgroundColor: "#FF4F5A" }}
          className="mb-1 text-light btn"
          type="submit"
        >
          Login
        </button>
        <p className="text-center fw-bold">
          <span>Don&apos;t Have Account ? </span>
          <Link
            onClick={() => {
              setActiveKey("signup");
            }}
          >
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
