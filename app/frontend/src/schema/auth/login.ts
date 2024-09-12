import * as Yup from "yup";

const email = Yup.string().required("Email is required").email("Invalid email");
const password = Yup.string()
  .required("Password is required")
  .min(6, "Password must be atleat 6 characters")
  .max(40, "Password must not exceed 40 characters");

export const loginSchema = Yup.object().shape({
  email,
  password,
});
