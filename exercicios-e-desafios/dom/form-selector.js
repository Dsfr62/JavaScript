function showInfo() {
    let name = document.querySelector("input[name='name']").value;
    let favoriteColor = document.querySelector("select[name='color']:checked").value;
    let likeProgramming = document.querySelector("select[name='like-programming']:checked").value;
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked");
    let optionsValue = [];
    developerOptions.forEach(element => { optionsValue.push(element) });
    let optionsChecked = optionsValue.join(", ");
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likeProgramming + "\nConhecimentos em programação web: " + optionsChecked);
};