export function gradient(from, to, steps = 3) {
  function blendValue(a, b, t) {
    return Math.sqrt((1 - t) * Math.pow(a, 2) + t * Math.pow(b, 2))
  }

  function inputToRGB(input) {
    const rgbPattern = new RegExp(/(rgb\(|)(?<r>\d{1,3}),(\s*|)(?<g>\d{1,3}),(\s*|)(?<b>\d{1,3})(\)|)/)
    const hexPattern = new RegExp(/^#?(?<r>[a-f\d]{2})(?<g>[a-f\d]{2})(?<b>[a-f\d]{2})$/i)
    const rgbMatched = input.match(rgbPattern)
    const hexMatched = input.match(hexPattern)

    return rgbMatched
      ? rgbMatched.groups
      : Object.keys(hexMatched.groups)
        .reduce((acc, key) => {
          acc[key] = parseInt(hexMatched.groups[key], 16)
          return acc
        }, {})
  }

  const [rgbFrom, rgbTo] = [inputToRGB(from), inputToRGB(to)]

  return [...Array(steps).keys()].map(step => {
    return ['r', 'g', 'b']
      .map(c => blendValue(rgbFrom[c], rgbTo[c], step * (1 / steps)))
  })
}
