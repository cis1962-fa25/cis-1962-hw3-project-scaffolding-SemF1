import { validatePizza } from '../src/validatePizza'

test('valid pizza passes', () => {
  const result = validatePizza({
    size: 12,
    crust: 'normal',
    toppings: ['cheese', 'pepperoni']
  })

  expect(result.isPizza).toBe(true)
})

test('missing size fails', () => {
  const result = validatePizza({
    crust: 'normal',
    toppings: ['cheese']
  })

  if (!result.isPizza) {
    expect(result.errors.length).toBeGreaterThan(0)
  } else {
    throw new Error('Expected validation to fail but got a valid pizza.')
  }
})

test('forbidden topping fails', () => {
  const result = validatePizza({
    size: 14,
    crust: 'stuffed',
    toppings: ['glass']
  })

  if (!result.isPizza) {
    expect(result.errors.length).toBeGreaterThan(0)
  } else {
    throw new Error('Expected validation to fail but got a valid pizza.')
  }
})
