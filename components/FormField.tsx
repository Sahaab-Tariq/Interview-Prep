import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Controller, Control, FieldValues, Path, Form } from "react-hook-form";
import { Input } from "./ui/input";

interface FormFieldProps<T extends FieldValues>{
  control : Control<T>;
  name : Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => {
  return (
    <div>
      < Controller control={control} name = {name} render={({field})=>(
        <FormItem>
          <FormLabel className="label">{label}</FormLabel>
          <FormControl>
            <Input className="input" type={type} placeholder={placeholder} {...field}/>
          </FormControl>
        </FormItem>
      )} />
    </div>
  );
};

export default FormField;
