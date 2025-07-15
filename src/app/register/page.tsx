"use client"

import RegistrationForm from "@/components/registrationForm/registrationForm";
import FormSubmissionToast from "../../components/toast/formSubmissionToast/formSubmissionToast";

const Page = () => {
  return (
    <div className="bg-gray-900">
      
      <div className="min-h-screen flex items-center justify-center  p-6">
      <FormSubmissionToast />
        <RegistrationForm />
      </div>
    </div>
  );
};
export default Page;
