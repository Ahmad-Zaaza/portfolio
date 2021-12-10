import { ComponentPropsWithRef, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithRef<"input">>(
  (props, ref) => {
    return (
      <input
        className="border min-w-0 w-full rounded p-2"
        {...props}
        ref={ref}
      ></input>
    );
  }
);

export default Input;
Input.displayName = "Input";
