let distancia_al = prompt("Qual a distância em anos-luz?")
let choice = prompt("Escolha a distância para conversão\n1 - Parsec(pc)\n2 - Unidade astronônima(AU)\n3 - Quilômetros(km)")

switch(choice) {
    case "1":
        d_convertida = distancia_al / 3.306601
        alert("Distância em Anos-luz: " + distancia_al + "\nConversão desejada: " + d_convertida + "pc")
        break
    case "2":
        d_convertida = distancia_al * 63241.1
        alert("Distância em Anos-luz: " + distancia_al + "\nConversão desejada: " + d_convertida + "AU")
        break
    case "3":
        d_convertida = distancia_al * (95*(10**11))
        alert("Distância em Anos-luz: " + distancia_al + "\nConversão desejada: " + d_convertida + "km")
        break
    default:
        alert("Distância em Anos-luz: " + distancia_al + "\nConversão desejada: Conversão fora do escopo")
}