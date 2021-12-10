import Input from "@/components/Input";
import Label from "@/components/Label";
import Section from "@/components/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import Textarea from "@/components/Textarea";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { handleSubmit, register } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = data => {
    try {
      console.log(data);
    } catch (error) {}
  };
  return (
    <Section>
      <SectionTitle>Say hi !</SectionTitle>
      <form className="grid my-6 gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name", { required: "Required" })} />
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...register("email", { required: "Required" })} />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            {...register("message", { required: "Required" })}
            rows={4}
          />
        </div>
        <button type="submit" className="btn mt-4 btn-primary">
          Submit
        </button>
      </form>
    </Section>
  );
};

export default Contact;
