import { padStart } from '../string/pad-start.js'

export function timestamp(stamp, opts = {}) {
  const date = new Date(stamp || Date.now())
  const options = Object.assign({}, {
    utc: false,
    ms: false,
    padStart: 2,
    join: true,
  }, opts)

  const t = options.utc ? 'UTC' : ''

  const units = [
    date[`get${t}Hours`](),
    date[`get${t}Minutes`](),
    date[`get${t}Seconds`](),
    options.ms ? date[`get${t}Milliseconds`]() : null,
  ]
    .filter(u => u !== null)
    .map(p => padStart(p.toString(), options.padStart))

  return options.join
    ? units.join('')
    : units
}
