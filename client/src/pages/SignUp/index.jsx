import { TextInput } from "../../components";
import { useFormik } from "formik";
import { signUpSchema } from "../../schema";
import { Link } from "react-router-dom";
import { useCreateUserMutation } from "../../services/userService";

const SignUp = ({ setActiveKey }) => {
  const [createUser] = useCreateUserMutation();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      await createUser(values);
    },
  });

  return (
    <>
      <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
        <TextInput
          type="text"
          name="fullName"
          label="Full Name"
          formik={formik}
          placeholder="Enter Full Name"
          required={true}
        />
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
        <TextInput
          type="file"
          name="profilePicture"
          label="Profile Picture"
          formik={formik}
          placeholder="Upload Profile Picture"
        />
        <button
          style={{ backgroundColor: "#FF4F5A" }}
          className="mb-1 text-light btn"
          type="submit"
        >
          SignUp
        </button>
        <p className="text-center fw-bold">
          <span>Already Have Account ? </span>{" "}
          <Link
            onClick={() => {
              setActiveKey("login");
            }}
          >
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
