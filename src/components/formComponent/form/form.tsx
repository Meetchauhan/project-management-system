import { formType } from "./formType";

const Form = ({ onSubmit, children, className }: formType) => {
  return <form onSubmit={onSubmit} className={className}>{children}</form>;
};

export default Form;
