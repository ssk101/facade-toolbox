import { padStart } from '../string/pad-start.js'

export function datestamp(stamp, opts = {}) {
  const date = new Date(stamp || Date.now())
  const options = Object.assign({}, {
    utc: false,
    padStart: 2,
    join: true,
  }, opts)

  const t = options.utc ? 'UTC' : ''

  const units = [
    date[`get${t}FullYear`](),
    date[`get${t}Month`]() + 1,
    date[`get${t}Date`](),
  ]
    .map(p => padStart(p.toString(), options.padStart))

  return options.join
    ? +units.join('')
    : units
}
