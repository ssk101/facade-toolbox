export function bytesToBase64(bytes) {
  const size = 0x8000
  const typedArray = new Uint8Array(bytes)
  let base64String = ''

  for(let i = 0; i < Math.ceil(typedArray.length / size); i++) {
    base64String += String
      .fromCharCode
      .apply(
        null,
        typedArray.slice(i * size, Math.min((i + 1) * size, typedArray.length))
      )
  }

  return `data:image\/webp;base64,${btoa(base64String)}`
}