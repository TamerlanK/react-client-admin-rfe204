import { z } from "zod";

export const AddProductFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((value) => !isNaN(Number(value)), "Price must be a number"),

  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  image: z.string().url("Invalid URL format").min(1, "Image URL is required"),
});

export type AddProductFormSchemaType = z.infer<typeof AddProductFormSchema>;
