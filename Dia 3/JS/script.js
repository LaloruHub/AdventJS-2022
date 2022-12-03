const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2


function distributeGifts(packOfGifts, reindeers) {
  let pesoRenos = calcular(packOfGifts, 1);
  let pesoRegalos = calcular(reindeers, 2);
  
  return parseInt(pesoRegalos / pesoRenos)
}

function calcular(array, mult, peso = 0) {
  array.forEach(element=> {
    peso += element.length * mult;
  });
  return peso;
}

