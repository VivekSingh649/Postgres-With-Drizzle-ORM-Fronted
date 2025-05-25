import * as yup from "yup";

export const userSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  age: yup.string().required("Age is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  isActive: yup.boolean(),
  gender: yup.string().required("Gender is required"),
  address: yup.object({
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zip: yup.string().required("ZIP code is required"),
    country: yup.string().required("Country is required"),
    street: yup.string().required("Street address is required"),
  }),
  education: yup.array().of(
    yup.object({
      degree: yup.string().required("Degree is required"),
      stream: yup.string().required("Stream is required"),
      year: yup.string().required("Year is required"),
      institute: yup.string().required("Institute is required"),
    })
  ),
  preferences: yup.object({
    language: yup.string().required("Language is required"),
    newsletterSubscribed: yup.boolean(),
    darkMode: yup.boolean(),
  }),
  hobbies: yup.array().of(yup.string()),
  socialProfiles: yup.object({
    linkedin: yup.string().url("Invalid LinkedIn URL"),
    github: yup.string().url("Invalid GitHub URL"),
    twitter: yup.string().url("Invalid Twitter URL"),
  }),
});
