import * as Joi from "joi";

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid("development", "production", "test").required(),
  PORT: Joi.number().default(3000),
  PREFIX: Joi.string().valid("api/v1").required()
});
