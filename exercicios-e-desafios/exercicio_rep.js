let nome = prompt('Insira o nome da espaçonave')
let nomeInv = ""
let i = nome.length

while(i >= 0){
  if(nome[i] == 'e'){
    break
  } else {
    nomeInv += nome[i]
    i = i - 1
  }
}
alert("Nome original: " + nome)
alert("Nome invertido: " + nomeInv)