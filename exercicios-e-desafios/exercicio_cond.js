
let nome = prompt("Qual o nome do piloto?")
let velocity = 0
velocity = prompt("A que velocidade você gostaria de acelerar a nave?")
let confirmacao = confirm('Confirme a velocidade que você deseja ir: ' + velocity + " km/s")

if(confirmacao == true){
    alert("Preparar para decolar, " + nome)
} else {
    velocity = prompt("A que velocidade você gostaria de acelerar a nave?")
    confirmacao = confirm('Confirme a velocidade que você deseja ir: ' + velocity + " km/s")
    alert("Preparar para decolar, " + nome)
}

if(velocity < 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if(velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para se manter")
} else if(velocity >= 80 && velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else if(velocity > 100) {
    alert("Velocidade perigosa. Controle automático forçado")
}

console.info('Piloto: ' + nome + '\nVelocidade atual: ' + velocity)