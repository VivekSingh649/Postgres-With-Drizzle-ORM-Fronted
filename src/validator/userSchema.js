import * as yup from "yup";

export const userSchema = yup.object({
  fullName: yup.string().required("Full name is required."),
  age: yup
    .number()
    .typeError("Age must be a number.")
    .required("Age is required.")
    .min(0, "Age must be a positive number."),
  email: yup
    .string()
    .required("Email address is required.")
    .email("Invalid email address."),
  phone: yup
    .string()
    .required("Phone number is required.")
    .min(10, "Phone number must be at least 10 characters.")
    .max(15, "Phone number must be 15 or fewer characters long."),
  isActive: yup.boolean().default(false),
  gender: yup.string().required("Gender is required."),
  address: yup.object({
    street: yup.string().notRequired(),
    city: yup.string().required("City is required."),
    state: yup.string().required("State is required."),
    zip: yup
      .string()
      .required("ZIP code is required.")
      .matches(/^\d{6}$/, "Invalid ZIP code format."),
    country: yup.string().required("Country is required."),
  }),
  preferences: yup.object({
    language: yup.string().required("Language preference is required."),
    newsletterSubscribed: yup.boolean().notRequired(),
    darkMode: yup.boolean().notRequired(),
  }),
  hobbies: yup
    .array()
    .of(yup.string())
    .min(1, "At least one hobby is required."),
  education: yup
    .array()
    .of(
      yup.object({
        degree: yup.string().required("Degree is required."),
        stream: yup.string().required("Stream is required."),
        year: yup
          .number()
          .typeError("Year must be a number.")
          .required("Year is required.")
          .min(1900, "Year must be valid."),
        institute: yup.string().required("Institute is required."),
      })
    )
    .min(1, "At least one education entry is required."),
  socialProfiles: yup.object({
    linkedIn: yup
      .string()
      .required("LinkedIn URL is required.")
      .url("Invalid LinkedIn URL."),
    github: yup
      .string()
      .required("GitHub URL is required.")
      .url("Invalid GitHub URL."),
    twitter: yup
      .string()
      .required("Twitter URL is required.")
      .url("Invalid Twitter URL."),
  }),
});
