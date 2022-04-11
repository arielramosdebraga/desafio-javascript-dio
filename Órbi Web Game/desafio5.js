//TODO: Complete os espaços em branco com uma solução possível para o problema.
let line = gets();
const entradas = [];
let pessoa;
let matricula;

for(let i = 1; i <= line; i++){
  entradas.push(gets());
}

entradas.forEach(function(participante, i) {
    pessoa = participante.split(" ");
  
  if (converterFloat(pessoa[1]) >= 0.0 && converterFloat(pessoa[1]) <= 10.0) {
    if (pessoa[0] > 0 && pessoa[0] < 1000000) {
      if(converterFloat(pessoa[1]) >= 8.0) {
        matricula = pessoa[0];
      }
    }
  }
});

if(matricula !== undefined) {
  print(matricula);
} else {
  print("Minimum note not reached");
}

function converterFloat(num) {
  let number = parseFloat(num);
  return number.toFixed(1);
}