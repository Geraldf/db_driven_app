import { z } from 'zod'

const passwordSchema = z
  .string({
    required_error: 'Password is required'
  })
  .min(6)

export const Schema = z.object({
  email: z
    .string({
      required_error: 'Email is required'
    })
    .trim()
    .min(1)
    .email(),
  password: passwordSchema,

})

export type SchemaInputType = z.input<typeof Schema>
export type SchemaOutputType = z.output<typeof Schema>

export const FieldNames = Schema.keyof().options
