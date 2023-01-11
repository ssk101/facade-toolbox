/** Adds items to a Map and deletes the oldest when overflowing. */
import { isConstructor } from './is-constructor.js'

class CacheMap extends Map {
  /**
   * Create a new instance of a Map.
   * @param  {} maxSize
   * @param  {} namespace='CacheMap'
   * @param  {} logger=console
   */
  constructor(maxSize, namespace = 'CacheMap', logger = console) {
    super()

    if(isConstructor(logger)) {
      this.logger = new logger(namespace)
    } else {
      this.logger = logger
    }

    this.maxSize = maxSize
    this.namespace = namespace
  }
  /**
   * Adds an item to the map and unshifts if overflowing.
   * @param  {} key
   * @param  {} value
   */
  set(key, value) {
    if((this.size + 1) >= this.maxSize) {
      if(this.logger && typeof this.logger === 'function') {
        this.logger([
          `Unshifting ${this.namespace} due to imminent overflow.`,
          `Current size: ${this.size}.`,
        ].join(' '))
      }

      this.delete(Array.from(this.keys())[0])
    }

    return super.set(key, value)
  }
}

export { CacheMap, CacheMap as Cache }