import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    date: number;
    gender:boolean;
  };

  export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };
  

  export type ValidFieldNames =
  | "firstname" | "lastname" | "email" | "password" | "confirmPassword" | "date" | "gender";