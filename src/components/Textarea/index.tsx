import { ComponentPropsWithRef, forwardRef } from "react";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithRef<"textarea">
>((props, ref) => {
  return (
    <textarea
      className="border min-w-0 w-full rounded p-2"
      {...props}
      ref={ref}
    ></textarea>
  );
});

export default Textarea;
Textarea.displayName = "Textarea";
