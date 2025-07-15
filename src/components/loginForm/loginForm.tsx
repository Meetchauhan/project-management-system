"use client";

import { useFormik } from "formik";
import InputText from "../formComponent/inputText/ inputText";
import FormValidationError from "../errors/formValidationError/formValidationError";
import Form from "../formComponent/form/form";
import FormHeading from "../formComponent/formHeading/formHeading";
import SubmitButton from "../formComponent/submitButton/submitButton";
import { useDispatch } from "react-redux";
import { userLogin } from "@/features/userSlice/userSlice";
import { AppDispatch } from "@/store/store";
import useToast from "@/customHooks/useToast/useToast";
import Link from "next/link";
import { loginValidationSchema } from "@/app/validationSchema/loginValidationSchema";
import { useRouter } from "next/navigation";
import { showToast } from "@/features/toastSlice/toastSlice";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isToast = useToast();
  const router = useRouter();

  // const loginData = useSelector((state) => state);
  // console.log("loginData", loginData);

  const initialValue = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: loginValidationSchema,
    onSubmit: async (value, action) => {
      console.log("Login value", value);
      const isLogin = await dispatch(userLogin(value)).unwrap();
      dispatch(showToast());
      if (isLogin) {
        action.resetForm();
      }

      if (isLogin?.success) {
        router.push("/");
      }
    },
  });
  return (
    <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
      <FormHeading
        title="Login"
        className="text-3xl font-semibold text-center text-white mb-8"
      />
      <Form className="space-y-6" onSubmit={handleSubmit}>
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
          title="Login"
          disabled={isToast}
          className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300"
        />
      </Form>
      <div className="text-center my-2">
        Don&apos;t have an account{" "}
        <Link
          className="text-blue-400 hover:text-green-300 transition duration-300"
          href={"/register"}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
