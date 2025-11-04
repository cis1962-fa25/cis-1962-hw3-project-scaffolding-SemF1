import { z } from 'zod'

//chose toppings that shouldnt be allowed:
const forbiddenToppings = ['glass', 'metal', 'nails', 'soap']

//defining zod schema for pizza
const PizzaSchema = z.object({
  size: z.number(),
  crust: z.enum(['normal', 'stuffed']),
  isDeepDish: z.boolean().optional().default(false),
  toppings: z
    .array(z.string())
    .optional()
    .refine(
      (arr) => !arr || arr.every((t) => !forbiddenToppings.includes(t)),
      { message: 'Contains forbidden toppings' }
    ),
})

// defining return type for validatePizza function
export type PizzaResult =
  | { isPizza: true; pizza: z.infer<typeof PizzaSchema> }
  | { isPizza: false; errors: string[] }

export function validatePizza(input: unknown): PizzaResult {
  const parsed = PizzaSchema.safeParse(input)

  if (parsed.success) {
    return { isPizza: true, pizza: parsed.data }
  }

  const errors = parsed.error.issues.map((issue) => issue.message)
  return { isPizza: false, errors }
}
