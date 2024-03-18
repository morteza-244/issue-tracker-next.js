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
    .min(3),
});
