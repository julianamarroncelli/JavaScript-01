alert ("Olá! Por favor me informe dois números")

let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")


if (numberOne==numberTwo){
  numberTwo = prompt("Os número inseridos são iguais! Digite outro número")
} 

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multiplicaçao: " + mult)
alert("Divisão: " + div)
alert("Resto da divião: " + restDiv)



if (restDiv == 0) {
  alert ("A soma dos dois números, resultou em um número par")
}else {
  alert ("A soma dos dois números, resultou em um número ímpar")
}


