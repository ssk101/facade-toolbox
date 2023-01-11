export const base36 = {
  decode(int) {
    return (+int).toString(36).toUpperCase()
  },
  encode(str) {
    return parseInt(str, 36)
  },
  random(min, max) {
    return Math
      .floor(Math.random() * (max - min + 1) + min)
      .toString(36)
      .toUpperCase()
  }
}