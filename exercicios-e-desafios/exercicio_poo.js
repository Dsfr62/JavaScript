class Crew {
    constructor(crewName, captainName, captainPower) {
        this.crew = {
            name: crewName,
            captain: {
                name: captainName,
                power: captainPower,
                role: "Captain",
            },
            members: [{
                name: captainName,
                power: captainPower,
                role: "Captain",
            }],
        }
    }
    recruiter (member, power, role) {
        let newMate = {
            name: member,
            power: power,
            role: role,
        }
        this.crew.members.push(newMate)
    }
}

let hatCrew = new Crew("Hat Straw Crew", "Luffy", "Gomu gomu no Mii")

hatCrew.recruiter("Zoro", "Santoryuu", "Right Arm")
hatCrew.recruiter("Robin", "30 flower", "Archaeologist")
hatCrew.recruiter("Sanji", "Taekwondo", "Cooker")

console.log(hatCrew.crew.members)
console.log(hatCrew.crew.captain)
console.log(hatCrew.crew.members[0].role)
console.log(hatCrew.crew.members[3].role)