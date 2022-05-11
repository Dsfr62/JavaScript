class Member { 
    constructor(name, power, dream) {
        this.name = name
        this.power = power
        this.dream = dream
    }

    motivation () {
        console.log("My dream is " + this.dream)
    }
}

class Captain extends Member {
    constructor(name, power, dream) {
        super(name, power, dream)
    }

    navigate () {
        console.log("Let's go for a new adventure!")
    }

    ancorUp () {
        console.log("Ancor up, let's go!")
    }
    
    ancorDown() {
        console.log("Ancor down, let's go!")
    }
}

class RightArm extends Member {
    constructor(name, power, dream) {
        super(name, power, dream)
    }

    protect () {
        console.log("Leave, Captain. I'm going to protect you!")
    }
}

class Cooker extends Member {
    constructor(name, power, dream) {
        super(name, power, dream)
    }

    cook () {
        console.log("Let's see what we have in the fridge...")
    }

    cook_done () {
        console.log("Come guys, the food is on the table.")
    }
}

class Crew {
    constructor(name) {
        this.name = name
        this.members = []
    }

    recruiter (member) {
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
hatStraw.members[0].ancorUp()
hatStraw.members[1].protect()