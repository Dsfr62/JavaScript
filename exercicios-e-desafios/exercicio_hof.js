function slowDown(velocity, printer){
    while(velocity > 0){
        printer(velocity)
        velocity -= 20
    }
    console.log('Spaceship stopped, the doors are open!')
}

let spaceshipVelocity = prompt('Spaceship velocity')
slowDown(spaceshipVelocity, velocity => console.log('Velocity: ', velocity))
