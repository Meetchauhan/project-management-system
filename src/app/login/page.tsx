import LoginForm from "../../components/loginForm/loginForm";
import FormSubmissionToast from "../../components/toast/formSubmissionToast/formSubmissionToast";

const page = () => {
  return (
    <div className="bg-gray-900">
      <div className="min-h-screen flex items-center justify-center  p-6">
        <FormSubmissionToast />
        <LoginForm />
      </div>
    </div>
  );
};
export default page;
