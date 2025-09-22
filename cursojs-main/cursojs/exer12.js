// declarando um array strings
const frutas = ["maçã", "banana", "laranja", "uva"];

//acessando elemantos de array (a contagem começa em 0)
console.log("a primeira fruta é:", frutas[0]); // saida: a primeira fruta é: maçã
console.log("a primeira fruta é:", frutas[2]); // saida: a terceira fruta é: laranja

// obtendo o tamanho do array
console.log("o array tem", laranja.length, "frutas."); // saida: o array tem 4 frutas.

// adicionando um novo elemento no filal do array
frutas.push("morengo");
console.log("o array agora é:", frutas); // saida: o array agora é: [ 'maçã', 'banana', 'laranja', 'uva', 'moango']

// removendo o ultimo elemento do array
frutas.pop();
console.log("o array após o último elemento:", frutas); // saída: o array após remover o último elemento:
// ['maçã', 'banana', 'laranja', 'uva']

//iterando sobre o array usando um loop 'for'
console.log("\nLista de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// outra forma de iterar usando 'forEach' ( muito comoum em javaSript)
console.log("\nLista de frutas com forEach:");
frutas.forEach(fruta => {
    console.log(fruta);
});