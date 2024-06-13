import { z } from "zod";
//schema le validatiion ko rule define gardincha with the help of zod
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);
export const SignUpSchema = z
  .object({
    //yo validation le string value accept garcha ani empty vayo vane side ko mssg dincha
    firstName: z.string().nonempty("First Name is required"),
    lastName: z.string().nonempty("Last Name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(12, "Password must be less than 12 characters")
      .regex(passwordValidation, {
        message: "Your password is not valid",
      }),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(15, "Password must be less than 12 characters")
      .regex(passwordValidation, {
        message: "Your password is not valid",
      }),

    date: z.string().nonempty("Date is required"),
    // gender: z.enum(["male", "female", "others"]),
    gender: z.string().nonempty("Gender is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Set error on confirmPassword field
  });

//Aba arko form lai feri esmai arko const banara garauna nee milcha
//z.obj ko thau ma euta baseSchema banata base.extend(garera validation constraints lagauni)

export const expenseSchema = z.object({
  tripName: z.string().nonempty("Trip Name cannot be empty"),
  title: z.string().nonempty("Title cannot be empty"),
  // totalAmount: z.number().positive(),
  heading: z.string().nonempty("Heading cannot be empty"),
  type: z.string().nonempty("Type cannot be empty"),
  // photos: z.string().nonempty("Photo cannot be empty"),
  // relevantFile: z.string().nonempty("Relevant File cannot be empty"),
  photos: z.coerce.string(),
  relevantFile: z.coerce.string(),
  totalAmount: z.coerce.number("Should be a number"),
});

export const tripPlan = z.object({
  trip_name: z.string().nonempty("Trip Name cannot be empty"),
  start_date: z.string(),
  // end_date: z.coerce.date("Start Date cannot be empty"),
  end_date: z.string(),
  budget: z.coerce.number("budget cannot be empty"),
  trip_duration: z.string().nonempty("Trip Duration cannot be empty"),
  advance_payment: z.coerce.number("budget cannot be empty"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Invalid password")
    .max(15, "Inavalid password")
    .regex(passwordValidation, {
      message: "Your password is not valid",
    }),
});
