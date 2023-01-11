/**
 * Extends console logging methods and adds a prefix with the instantiator
 * process' current heap size in human-readable units.
 */

import { Logger } from './logger.js'

class HeapLogger extends Logger {
  constructor(namespace = 'HeapLogger') {
    super()
    this.namespace = namespace
  }

  get prefix() {
    return `[${this.namespace}] [${this.heap}]`
  }

  get relevantHeap() {
    return this.serverHeap || this.clientHeap || 0
  }

  get heap() {
    const { value, unit } = this.bytesToUnit(this.relevantHeap)
    return `${value} ${unit}`
  }

  bytesToUnit(bytes, decimals = 2) {
    if(!bytes) return 0

    const k = 1024
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    const value = parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))
    return { value, unit: units[i] }
  }

  get clientHeap() {
    if(typeof window === 'object' && window.performance?.memory) {
      return window.performance.memory.usedJSHeapSize || 0
    }
  }

  get serverHeap() {
    if(typeof process === 'object' && process.memoryUsage) {
      return process.memoryUsage().heapUsed || 0
    }
  }
}

export { HeapLogger, HeapLogger as Heap }