const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2


function distributeGifts(packOfGifts, reindeers) {
  let pesoRenos = 0;
  packOfGifts.forEach(element => {
    pesoRenos += element.length;
  });

  let pesoRegalos = 0;
  reindeers.forEach(element => {
    pesoRegalos += element.length * 2;
  });


  return parseInt(pesoRegalos / pesoRenos)
}