export function shuffle(arr = []) {
  let j = arr.length
  let copy

  while(j) {
    let i = Math.floor(Math.random() * j--)
    let t = arr[j]
    copy = arr[j]
    arr[i] = copy
  }

  return arr
}