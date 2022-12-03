const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */



function wrapping(gifts) {
  let regalos = [];

  gifts.forEach(element => {
    let envoltorio = "*";
    let length = element.length;
    length.forEach(e => {
      envoltorio += "*"
      console.log("🚀 ~ file: script.js:15 ~ wrapping ~ e", e)
    });

    regalos.push(envoltorio + "\n" + "*" + element + "*" + "\n" + envoltorio);
  });

  return regalos;
}