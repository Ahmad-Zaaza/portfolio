import classNames from "classnames";

interface ISectionTitleProps {
  underline?: boolean;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  underline
}) => {
  return (
    <h3
      className={`${classNames("font-bold  font-body text-xl my-6", {
        "underline underline-offset-6 text-primary": underline
      })}`}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
