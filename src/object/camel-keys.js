import { camelCase } from '../string/camel-case.js'

export function camelKeys(obj) {
  if(Array.isArray(obj)) {
    return obj.map(v => camelKeys(v))
  } else if(obj != null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelKeys(obj[key]),
      }),
      {},
    )
  }
  return obj
}