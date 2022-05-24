function greetCrew(message, ...names) {
    names.forEach(name => console.log(`${message}, ${name}`));
};

greetCrew("Welcome", "Arthur", "Jake", "Hannibal");