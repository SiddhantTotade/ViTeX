import * as Yup from "yup";

const first_name = Yup.string().required("First Name is required");
const last_name = Yup.string().required("Last Name is required");
const email = Yup.string().required("Email is required").email("Invalid Email");
const password = Yup.string()
  .required("Password is required")
  .min(6, "Password must be atleast 6 characters");
const password2 = Yup.string()
  .required("Confirm Password is required")
  .oneOf([Yup.ref("password"), ""], "Confirm Password does not match");

export const registrationSchema = Yup.object().shape({
  first_name,
  last_name,
  email,
  password,
  password2,
});
