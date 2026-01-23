import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  services: z.string().min(1, "Please specify services"),
  details: z.string().min(10, "Please describe your idea"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
