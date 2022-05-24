let spaceships = ["Colossus", "Ártemis", "Fenix"];

let newSpaceships = [...spaceships, "Apollo 11"];
console.log(newSpaceships)

function speedUp(velocity, acceleration) {
    return velocity + acceleration;
};

let spaceshipAcceleration = [60, 10];

let newVelocity = speedUp(...spaceshipAcceleration);
console.log(newVelocity);