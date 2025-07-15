interface submitButtonType {
  title: string;
  type: "button" | "submit" | "reset";
  className: string;
  disabled: boolean;
}

const SubmitButton = ({
  title,
  type,
  className,
  disabled,
}: submitButtonType) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {title}
    </button>
  );
};

export default SubmitButton;
