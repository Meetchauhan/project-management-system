interface formHeadingType {
  title: string;
  className: string;
}

const FormHeading = ({ title, className }: formHeadingType) => {
  return <h2 className={className}>{title}</h2>;
};

export default FormHeading;
