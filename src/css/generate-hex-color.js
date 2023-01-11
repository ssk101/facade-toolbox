export function generateHexColor(str = '') {
  const hex = parseInt(str, 36)
    .toString(16)
    .slice(0, 6)
    .padEnd(6, '0')
  const rgb = hex
    .match(/.{1,2}/g)
    .map(c => +`0x${c}`)

  const min = Math.min.apply(Math, rgb)
  const i = rgb.indexOf(Math.min.apply(Math, rgb))
  rgb[i] = 255

  return {
    fg: rgb.map(n => Math.floor(n).toString(16)).join(''),
    bg: rgb.map(n => Math.floor(n * 0.35).toString(16)).join(''),
  }
}