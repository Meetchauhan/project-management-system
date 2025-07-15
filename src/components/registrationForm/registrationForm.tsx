"use client";

import { useFormik } from "formik";
import InputText from "../formComponent/inputText/ inputText";
import { registerValidationSchema } from "@/app/validationSchema/registerValidationSchema";
import FormValidationError from "../errors/formValidationError/formValidationError";
import Form from "../formComponent/form/form";
import FormHeading from "../formComponent/formHeading/formHeading";
import SubmitButton from "../formComponent/submitButton/submitButton";
import { useDispatch } from "react-redux";
import { userRegister } from "@/features/userSlice/userSlice";
import { AppDispatch } from "@/store/store";
import useToast from "@/customHooks/useToast/useToast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { showToast } from "@/features/toastSlice/toastSlice";

const RegistrationForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isToast = useToast();
  const router = useRouter();

  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: registerValidationSchema,
    onSubmit: async (value, action) => {
      console.log("registration value", value);
      const isRegister = await dispatch(userRegister(value)).unwrap();
      dispatch(showToast());
      
      if (isRegister?.success) {
        router.push("/login");
        action.resetForm();
      }
    },
  });
  return (
    <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
      <FormHeading
        title="Registration Form"
        className="text-3xl font-semibold text-center text-white mb-8"
      />
      <Form className="space-y-6" onSubmit={handleSubmit}>
        <div className="">
          <InputText
            type="text"
            placeHolder="First Name"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
          {touched.firstName && (
            <FormValidationError message={errors.firstName} />
          )}
        </div>
        <div className="">
          <InputText
            type="text"
            placeHolder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
          {touched.lastName && (
            <FormValidationError message={errors.lastName} />
          )}
        </div>
        <div className="">
          <InputText
            type="email"
            placeHolder="Email Address"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && <FormValidationError message={errors.email} />}
        </div>
        <div className="">
          <InputText
            type="password"
            placeHolder="Password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {touched.password && (
            <FormValidationError message={errors.password} />
          )}
        </div>

        <SubmitButton
          type="submit"
          title="Register"
          disabled={isToast}
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
        />
      </Form>
      <div className="text-center my-2">
        Already have an account{" "}
        <Link
          className="text-blue-400 hover:text-green-300 transition duration-300"
          href={"/login"}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
