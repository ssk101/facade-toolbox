export function stringToHexColor(str = '') {
  return parseInt(str.toUpperCase(), 36)
    .toString(16)
    .slice(0, 6)
    .padEnd(6, '0')
}
