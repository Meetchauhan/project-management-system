import { formValidationErrorType } from "./formValidationErrorType";

const FormValidationError = ({ message }: formValidationErrorType) => {
  return <p className="text-red-500">{message}</p>;
};
export default FormValidationError;
