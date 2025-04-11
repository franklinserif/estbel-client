import * as z from "zod";

const email = z.string().email({message: 'Please enter a valid email address'})

const password = z.string()
  .min(6, { message: 'Password must be at least 6 characters' })
  .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
  .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' })
  .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character (e.g., !@#$%^&*)' });

export const formSignInSchema = z.object({email, password})

export const forgotPasswordSchema = z.object({
 email
});

export const formChangePasswordSchema = z.object({
  provisionalPassword: z.string().min(1, "La contraseña provisional es requerida"),
  newPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export type TChangePasswordSchema = z.infer<typeof formChangePasswordSchema>;


