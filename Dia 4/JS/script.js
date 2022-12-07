/*
fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]) // true
*/

/*
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

fitsInOneBox(boxes) // false
*/

const boxes = [{
    l: 1,
    w: 1,
    h: 1
  },
  {
    l: 3,
    w: 3,
    h: 3
  },
  {
    l: 2,
    w: 2,
    h: 2
  }
]

fitsInOneBox(boxes) // true

function fitsInOneBox(boxes) {
  return false
}