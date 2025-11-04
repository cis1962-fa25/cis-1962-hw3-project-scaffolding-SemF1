#!/usr/bin/env node
import { parseArgs } from 'node:util'
import fs from 'node:fs'
import { validatePizza } from './validatePizza'

const { positionals } = parseArgs({ allowPositionals: true })
const filePath = positionals[0]
//check if file path is provided
if (!filePath) {
  console.error('Error: No JSON file provided.')
  process.exit(1)
}
//read and validate the pizza JSON file
try {
  const data = fs.readFileSync(filePath, 'utf-8')
  const json = JSON.parse(data)
  const result = validatePizza(json)

  if (result.isPizza) {
    console.log('Valid pizza!')
    console.log(result.pizza)
  } else {
    console.log('Invalid pizza:')
    console.log(result.errors)
  }
} catch (err) {
  console.error(`Error reading file: ${err}`)
  process.exit(1)
}
