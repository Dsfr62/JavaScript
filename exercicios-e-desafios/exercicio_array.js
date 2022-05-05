let grandLineCrews = [
    "Luffy", "Zoro", "Nami", "Usopp", "Sanji", "Choper", "Robin",
    //["Shanks", "Doflamingor", "Ace", "Smoker", "Crocodile"],
    //["Wyper", "Gan Fall", "Calgara", "Noland"]
]
//console.log(grandLineCrews.slice(0,2)) //begin, end
let upcasedCrews = grandLineCrews.map(function(currentCrew, index) {
    let upcased = currentCrew.toUpperCase()
    return upcased
})
console.log(upcasedCrews)
 
grandLineCrews.forEach(function(currentCrew, index) {
    console.log("Crew: " + currentCrew + '\nIndex: ' + index)
})
let filterWith3Chars = grandLineCrews.filter(element => { return element.length >= 3})
console.log(filterWith3Chars)
let findWith3Chars = grandLineCrews.find(element => { return element.length >= 3})
console.log(findWith3Chars)