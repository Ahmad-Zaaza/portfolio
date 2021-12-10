import { ComponentPropsWithoutRef, forwardRef } from "react";

const Label = forwardRef<HTMLLabelElement, ComponentPropsWithoutRef<"label">>(
  ({ children, ...props }, ref) => {
    return (
      <label
        className="font-medium text-sm block font-system mb-1"
        {...props}
        ref={ref}
      >
        {children}
      </label>
    );
  }
);

export default Label;
Label.displayName = "Label";
