export function changedProxy(o = {}, callback) {
  return new Proxy(o, {
    set: function(target, property, newValue) {
      if(typeof callback === 'function') {
        callback({
          property,
          previousValue: target[property],
          newValue,
        })
      }
      return Reflect.set(...arguments)
    },
    deleteProperty: function(target, property) {
      callback({
        property,
        previousValue: target[property],
        newValue: null,
      })
      return true
    }
  })
}
