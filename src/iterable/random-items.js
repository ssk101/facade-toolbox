import { clamp } from '../number/clamp.js'
import { shuffle } from '../array/shuffle.js'

export function randomItems(arrayLike, amount = 1) {
  const arrayLikeValidators = [
    typeof arrayLike === 'string',
    typeof arrayLike?.[Symbol.iterator] !== 'function',
  ]

  if(arrayLikeValidators.some(condition => condition)) {
    return
  }

  const amountValidators = [
    ['number', 'string'].includes(typeof amount),
    !isNaN(amount),
  ]

  if(!amountValidators.every(condition => condition)) {
    return []
  }

  return shuffle(Array.from(arrayLike))
    .slice(0, clamp(Math.abs(amount), 1, arrayLike.length || arrayLike.size))
}
