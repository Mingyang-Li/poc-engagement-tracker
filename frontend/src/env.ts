import { z } from 'zod';

const EnvSchema = z.object({
  VITE_API_URL: z.string().url(),
});
type Env = z.infer<typeof EnvSchema>;

const validateEnv = (): Env => {
  const result = EnvSchema.safeParse(import.meta.env);

  if (result.success === false) {
    throw new Error(
      `Failed to validate environment variables, please check if you have all required environment variables in place`,
    );
  }

  return result.data;
};

export const env: Env = validateEnv();
