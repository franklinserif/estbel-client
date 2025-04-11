import * as z from "zod";

const email = z.string().email({message: 'Por favor ingresé un email válido'})

const password = z.string()
  .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  .regex(/[a-z]/, { message: 'La contraseña debe tener al menos una letra minúscula' })
  .regex(/[A-Z]/, { message: 'La contraseña debe tener al menos una letra mayúscula' })
  .regex(/[0-9]/, { message: 'La contraseña debe tener al menos un número' })
  .regex(/[^a-zA-Z0-9]/, { message: 'La contraseña debe tener al menos un carácter especial (e.g., !@#$%^&*)' });

export const formSignInSchema = z.object({email, password})

export const forgotPasswordSchema = z.object({
 email
});

export const formChangePasswordSchema = z.object({
  provisionalPassword: password,
  newPassword: password,
});

export type TChangePasswordSchema = z.infer<typeof formChangePasswordSchema>;


