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
    let envoltorio = "*", j = 0;

    do{
      envoltorio += "*";
      j++;
    } while(j <= element.length);
  
    regalos.push(envoltorio + "\n" + "*" + element + "*" + "\n" + envoltorio);
  });
  return regalos;
}