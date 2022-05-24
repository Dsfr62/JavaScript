// Objects

let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
};

let { name: spaceshipName, crewQuantity } = spaceship;
console.log(spaceshipName);
console.log(crewQuantity);

// Arrays

let numbers = [200, 800, 100, 500, 1000];
numbers.sort();

let [smaller] = numbers;
console.log(smaller);

// Functions

function printFirstNum([ firstNum ]) {
    console.log(firstNum);
};

printFirstNum(numbers);