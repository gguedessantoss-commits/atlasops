import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().default(4000),
  CORS_ORIGIN: z.string().default("http://localhost:3000"),
});

export const env = EnvSchema.parse(process.env);
