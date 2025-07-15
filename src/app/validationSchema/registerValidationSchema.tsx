import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().min(2).required("First name is required"),
  lastName: Yup.string().min(2).required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});
