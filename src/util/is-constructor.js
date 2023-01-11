/**
 * Test if a function is a constructor instantiable with `new`.
 * @param  {Function} func
 * @return {boolean}
 */

const handler = {
  construct() {
    return handler
  }
}

export function isConstructor(func) {
  try {
    return !!(new(new Proxy(func, handler))())
  } catch (e) {
    return false
  }
}