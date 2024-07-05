console.log("Exercicio 1")
let nome = "João"
console.log (nome,"\n")

console.log("Exercicio 2")
let a = 5 , b = 10, soma
soma = a + b
console.log (soma,"\n")

console.log("Exercicio 3")
let  primeiroNome = "Josefa", ultimoNome = "Silva"
console.log(primeiroNome , ultimoNome,"\n")

console.log("Exercicio 4")
let pessoa = {
    nome: "Neymar",
    idade: 35,
    endereço: "Alphaville",
    numero: 12345678,
}
console.log(pessoa,"\n")

console.log("Exercicio 4")
let Frutas = ["maçã", "banana", "laranja"]
Frutas.push ("Uva")
Frutas.push ("Melancia")
console.log(Frutas,"\n")

console.log("Exercicio 5")
let Numero = [1,2,3,4,5]
console.log(Numero,"\n")

console.log("Exercicio 6")
let Cores = ["vermelho", "Verde", "Azul"]
for (let c = 0; c < 3; c++){
    console.log (Cores[c],"\n")
}

console.log("Exercicio 7")
let Idade = 17
if (Idade >= 18){
    console.log("Maior de Idade")
}else{
    console.log("Menor de Idade\n")
}

console.log("Exercicio 8")
let Nota = 8
if (Nota >= 7){ 
    console.log("Aprovado\n");
}else if (Nota <= 5) {
    console.log("Recuperação\n");
}else{
    console.log("Reprovado\n");
}

console.log("Exercicio 9")
let diaDaSemana = 1

switch (diaDaSemana){
case 1: {
    console.log("\nDomingo\n");
    break
}
case 2: {
    console.log("\nSegunda-Feira\n");
    break
}
case 3: {
    console.log("\nTerça-Feira\n");
    break
}
case 4:{
    console.log("\nQuarta-Feira\n");
    break
}
case 5:{
    console.log("\nQuinta-Feira\n");
    break
}
case 6:{
    console.log("\nSexta-Feira\n");
    break
}
case 5:{
    console.log("\nSábado\n");
    break
}
}

console.log("Exercicio 10")
for(i = 0; i <= 10; i++){
    console.log(i,"\n")
}

console.log("Exercicio 11")
let contador = 1
while (contador <= 5){
    console.log(contador,"\n");
    contador++
}

console.log("Exercicio 12")
let numero = 0
while (numero <= 30){
    console.log(numero,"\n");
    numero = numero + 2
}

console.log("Exercicio 13")
let valores = [10,20,30,40,50], soma1 = 0
for(i = 0; i <= valores.length; i++){
    soma1 = soma1 + valores[i]
    console.log(soma1,"\n");
}

console.log("Exercicio 14")
let numeros = [13, 20, 2, 75, 53], maior = 0;

for (let i = 0; i < numeros.length; i++) {
    if (maior < numeros[i]) {
        maior = numeros[i];
    }
}
console.log(maior, "\n");

console.log("Exercicio 15")
let numeros2 = [22, 44, 1, 93, 10], menor = 99;

for (let i = 0; i < numeros2.length; i++) {
    if (menor > numeros2[i]) {
        menor = numeros2[i];
    }
}
console.log(menor, "\n");

console.log("Exercicio 16")
let n = 5 , resultado = 1
for (let i = 1; i <= n; i++ ){
    resultado = resultado *  i
}
    console.log(resultado,"\n");

console.log("Exercicio 17")
let numeros3 = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10]
for (let i = 0; i <= numeros3.length; i++){
    if (numeros3[i] % 2 === 0){
        console.log(numeros3[i], "é par\n");
    }else{
        console.log(numeros3[i], "é impar\n");
    }
}

console.log("Exercicio 18")
let texto = "cristiano ronaldo é foda", contagem = 0, vogais = ["a","e","i","o","u"]
for (i = 0; i < texto.length; i++){
    if(vogais.includes(texto[i])){
        contagem++
    }
}
    console.log(contagem, "\n");

console.log("Exercicio 19")
let texto2 = "foda-se a administração" , resultado2 = ""
for (i = texto2.length - 1; i >= 0; i--){
    resultado2 += texto2[i]
}
    console.log("testo invertido:", resultado2);
