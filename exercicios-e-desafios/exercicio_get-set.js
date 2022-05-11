// It's not working, but I understand the concept.

class Member { 
    constructor(name, power, dream) {
        this.name = name
        this.power = power
        this.dream = dream
    }

    motivation() {
        console.log("My dream is " + this.dream)
    }
}

class Captain extends Member {
    constructor(name, power, dream) {
        super(name, power, dream)
        this.ancor = false
    }

    navigate() {
        if (this.ancor == false) {
            this.ancor = true
            console.log("Let's go for a new adventure!")
        } else {
            console.log("Ancor down here!")
        }
    }
}

class RightArm extends Member {
    constructor(name, power, dream) {
        super(name, power, dream)
    }

    protect() {
        console.log("Leave, Captain. I'm going to protect you!")
    }

    set concentration(nivel) {
        if (this.concentration == 0) {
            this.concetration = nivel
            return console.log("Having a deep breath...")
        } else if (nivel > 100) {
            return console.warn("You can't concentrate too much.")
        } else {
            this.concentration = nivel
            return console.log("...")
        }
    }
}

class Cooker extends Member {
    constructor(name, power, dream) {
        super(name, power, dream)
    }

    cook() {
        console.log("Let's see what we have in the fridge...")
    }

    cook_done() {
        console.log("Come guys, the food is on the table.")
    }
}

class Crew {
    constructor(name) {
        this.name = name
        this.members = []
    }

    recruiter(member) {
        this.members.push(member)
    }
}

luffy = new Captain("Luffy", "Gomu gomu no mii", "be the next pirate king")
zoro = new RightArm("Zoro", "Santoryuu", "be the best swordsman")
sanji = new Cooker("Sanji", "Taekwondo", "see the all blue")

hatStraw = new Crew("Hat Straw Crew")
hatStraw.recruiter(luffy)
hatStraw.recruiter(zoro)
hatStraw.recruiter(sanji)

console.log(hatStraw.members)
hatStraw.members[2].cook()
hatStraw.members[0].navigate()
hatStraw.members[1].protect()
hatStraw.members[0].navigate()
hatStraw.members[1].concetration = 50
console.log(hatStraw.members[1].concentration)
hatStraw.members[1].concetration = 100
console.log(hatStraw.members[1].concentration)
hatStraw.members[1].concetration = 80
console.log(hatStraw.members[1].concentration)