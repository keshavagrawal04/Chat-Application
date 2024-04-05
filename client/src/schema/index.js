import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter email"),
  password: Yup.string()
    .required("Please Enter Password")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])/, "Password must contain at least one letter")
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Password must contain at least one special character"
    )
    .matches(
      /^[A-Za-z\d@$!%*#?&]+$/,
      "Password must not contain invalid characters"
    ),
});

export const signUpSchema = Yup.object({
  fullName: Yup.string().required("Please Enter Full Name"),
  email: Yup.string().email().required("Please Enter email"),
  password: Yup.string()
    .required("Please Enter Password")
    .min(8, "Password must be at least 8 characters")
    .matches(/^(?=.*[A-Za-z])/, "Password must contain at least one letter")
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(
      /^(?=.*[@$!%*#?&])/,
      "Password must contain at least one special character"
    )
    .matches(
      /^[A-Za-z\d@$!%*#?&]+$/,
      "Password must not contain invalid characters"
    ),
});
