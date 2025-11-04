# Pizza Validator

This is a small TypeScript + Zod package that validates whether a JSON object is a real pizza or not. It includes a command-line interface as well as a function you can import normally in code.

The project uses:
- TypeScript
- Zod for schema validation
- Jest for testing
- ESLint + Prettier for linting/formatting
- A CLI that reads a JSON file and reports whether it's a valid pizza

------------------------------------

## Install & Build

Clone the project and install dependencies:

npm install
npm run build

If you want to use the CLI globally:

npm link

Now you can run the validator from anywhere on your machine.

------------------------------------

## CLI Usage

You can pass in any .json file that describes a pizza:

pizza-validator test-pizza.json

If it’s a valid pizza you’ll see something like:

Valid pizza!
{ size: 12, crust: 'normal', isDeepDish: false, toppings: [ 'cheese' ] }

If it’s invalid, you’ll see the errors:

Invalid pizza:
[ 'Contains forbidden toppings' ]

If the file doesn’t exist or can’t be read, the CLI will catch the error and print it out.

------------------------------------

## Using the Validator in Code

import { validatePizza } from 'cis-1962-hw3-project-scaffolding-semf1'

const result = validatePizza({
  size: 14,
  crust: 'stuffed',
  toppings: ['pepperoni']
})

if (result.isPizza) {
  console.log('Valid pizza:', result.pizza)
} else {
  console.log('Errors:', result.errors)
}

------------------------------------

## Example JSON Files

Valid example:
{ "size": 12, "crust": "normal", "toppings": ["cheese"] }

Invalid example:
{ "size": "big", "crust": "metal", "toppings": ["glass"] }

------------------------------------

## Testing

All tests are written with Jest. To run them:

npm test

There is one valid pizza test and two invalid pizza tests.

------------------------------------

## Project Structure

src/validatePizza.ts
src/cli.ts
tests/pizza.test.ts
dist/
