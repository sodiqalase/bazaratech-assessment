import { object, string, InferType } from "yup";

// Login form validation schema using Yup
export const LoginSchema = object({
	email: string().email("Please enter a valid email address.").required("Email is required.").trim().label("Email"),
	password: string()
		.required("Password is required.")
		.min(8, "Password must be at least 8 characters long.")
		.trim()
		.label("Password"),
});

export type LoginSchemaType = InferType<typeof LoginSchema>;
