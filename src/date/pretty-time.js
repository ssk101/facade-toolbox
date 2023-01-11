import { timestamp } from './timestamp.js'

export function prettyTime(stamp, opts = {}) {
  const date = new Date(stamp || Date.now())
  const options = Object.assign({}, {
    utc: false,
    ms: false,
    padStart: 2,
    delimiter: ':',
  }, opts)

  return timestamp(stamp, Object.assign({}, options, { join: false }))
    .join(options.delimiter || '')
}
