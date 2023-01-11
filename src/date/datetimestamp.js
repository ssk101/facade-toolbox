import { datestamp } from './datestamp.js'
import { timestamp } from './timestamp.js'

export function datetimestamp(stamp, opts = {}) {
  const date = new Date(stamp || Date.now())
  const options = Object.assign({}, {
    utc: false,
    ms: false,
    padStart: 2,
  }, opts, {
    join: true,
  })

  return +[
    datestamp(stamp, options),
    timestamp(stamp, options),
  ].join('')
}