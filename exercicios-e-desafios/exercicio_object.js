/* let chapeu_de_palha = {
    name: "Chapeu de Palha",
    crew: ["Luffy", "Zoro", "Usopp", "Sanji", "Nami", "Choper", "Robin"],
    captain: "Luffy", 
    sword: "Zoro",
    cooker: "Sanji",
    ancorUp: () => {
        alert("Ancor up")
    },
    ancorDown: () => {
        alert("Ancor Down")
    },
    food: function() {
        console.log(this.captain + " says: " + this.cooker + " I'm hungryy\nGOMU GOMU NO PISTOLLL")
    }
}
chapeu_de_palha.crewQuantity = chapeu_de_palha.crew.length

chapeu_de_palha.ancorDown()
chapeu_de_palha.food()
chapeu_de_palha.ancorUp() */

let spaceship = {
    name: prompt("Spaceship name"),
    type: prompt("Spaceship type"),
    maxVelocity: parseInt(prompt("Spaceship max velocity")),
    velocity: 0
}
spaceship.setMode = prompt("Speed up or Speed down? (type up or down)")

while(spaceship.setMode == "up") {
    if(spaceship.velocity >= spaceship.maxVelocity) {
        alert("Max velocity exceeded, stoping the " + spaceship.name)
        spaceship.velocity = 0
        break
    } else {
        setVelocity = prompt("How much do you want to speed up?")
        spaceship.velocity = spaceship.velocity + setVelocity
    }
}