import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  console.log(1)
  expect(sum(1.0, 2)).toBe(3)
})
