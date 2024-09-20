const primeiroCarro = prompt ("Informe o primeiro carro")
const velocidadePrimeiroCarro = prompt ("Qual a velocidade em Km/h máxima?")
const segundoCarro = prompt ("Informe o segundo carro: ")
const velocidadeSegundoCarro = prompt ("Qual a velocidade em Km/h máxima?")

if (velocidadePrimeiroCarro>velocidadeSegundoCarro){
alert(primeiroCarro + " é mais rápido")
} else {
    alert(segundoCarro + " é mais rápido")
}