
function login(){
    users_array = ['admin', 'root', 'kali', 'java'];
    passwords_array = ['admin', 'root', 'kali', 'script'];

    var chances = 5
    while (chances > 0){
        chances = chances - 1;
        if (chances == 0){
            alert('Only one more chance');
        }

        user = prompt('Insert the user');
        if (users_array.includes(user) == true){
            var passwd = prompt('Insert the password');
            if (passwords_array.indexOf(passwd) == users_array.indexOf(user)){
                alert('Login successful');
                break
            }
            else{
                alert('Incorrect password');
            }
        }
        else{
            alert("User don't exist")
        }
    }
}

login()