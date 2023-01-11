import { datestamp } from './datestamp.js'

export function prettyDate(stamp, opts = {}) {
  const date = new Date(stamp || Date.now())
  const options = Object.assign({}, {
    utc: false,
    padStart: 2,
    delimiter: '/',
  }, opts)

  return datestamp(stamp, Object.assign({}, options, { join: false }))
    .join(options.delimiter || '')
}
