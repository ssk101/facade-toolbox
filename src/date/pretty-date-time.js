import { datestamp } from './datestamp.js'
import { timestamp } from './timestamp.js'

export function prettyDateTime(stamp, opts = {}) {
  const date = new Date(stamp || Date.now())
  const options = Object.assign({}, {
    utc: false,
    ms: false,
    padStart: 2,
    dateDelimiter: '/',
    timeDelimiter: ':',
  }, opts)

  return [
    datestamp(stamp, Object.assign({}, options, { join: false }))
      .join(options.dateDelimiter || ''),
    timestamp(stamp, Object.assign({}, options, { join: false }))
      .join(options.timeDelimiter || ''),
  ].join(' ')
}
