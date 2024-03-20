import { z } from "zod";

export const issueFormSchema = z.object({
  title: z
    .string({ invalid_type_error: "Title must be a string" })
    .min(1, { message: "Title is required" })
    .max(255),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(3)
    .max(65535),
});
export const patchIssueFormSchema = z.object({
  title: z
    .string({ invalid_type_error: "Title must be a string" })
    .min(1, { message: "Title is required" })
    .max(255)
    .optional(),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(3)
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, { message: "AssignedIssueToUserId is required" })
    .max(255)
    .optional()
    .nullable(),
});
export type TIssueFormData = z.infer<typeof issueFormSchema>;

export const signUpUserSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z
    .string({ invalid_type_error: "Invalid email address" })
    .email({ message: "Email is required" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});
export type TSignUpFormData = z.infer<typeof signUpUserSchema>;

export const signInUserSchema = z.object({
  email: z
    .string({ invalid_type_error: "Invalid email address" })
    .email({ message: "Email is required" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});
export type TSignInFormData = z.infer<typeof signInUserSchema>;
