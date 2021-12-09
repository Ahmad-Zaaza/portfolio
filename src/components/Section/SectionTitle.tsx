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
      className={`${classNames("font-bold text-xl my-4", {
        "underline underline-offset-6": underline
      })}`}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
