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


