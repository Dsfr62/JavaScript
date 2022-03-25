
function batalha(pokemon1, pokemon2){
    var ataque1 = prompt('Qual o ataque do ' + pokemon1.nome);
    if (ataque1 == 'flamethrower'){
        dano_flamethrower = 10
        pokemon2.vida = pokemon2.vida - dano_flamethrower
        flamethrower(pokemon1)
        alert(pokemon2.nome + ' está com ' + pokemon2.vida + ' de vida')
    }
    if (ataque1 == 'thunderball'){
        dano_thunderball = 10
        pokemon2.vida = pokemon2.vida - dano_thunderball
        thunderBall(pokemon1)
        alert(pokemon2.nome + ' está com ' + pokemon2.vida + ' de vida')
    }
    if (ataque1 == 'magicleaf'){
        dano_magicleaf = 15
        pokemon2.vida = pokemon2.vida - dano_magicleaf
        magicLeaf(pokemon1)
        alert(pokemon2.nome + ' está com ' + pokemon2.vida + ' de vida')   
    }
    

}


function thunderBall(pokemon){
    if (pokemon.tipo == 'raio'){
        alert(pokemon.nome + ' lançou uma bola do trovão');
    }
    else{
        alert(pokemon.nome + ' não pode utilizar essa habilidade');
    }

}

function flamethrower(pokemon){
    if (pokemon.tipo == 'fogo'){
        alert(pokemon.nome + ' lançou fogo');
    }
    else{
        alert(pokemon.nome + ' não pode utilizar essa habilidade');
    }
}

function magicLeaf(pokemon){
    if (pokemon.tipo == 'planta'){
        alert(pokemon.nome + ' lançou plantas mágicas');
    }
    else{
        alert(pokemon.nome + ' não pode utilizar essa habilidade')
    }
}

var pikachu = {
    nome: 'Pikachu',
    vida: 20,
    cor: 'amarelo',
    tamanho: 'pequeno',
    tipo: 'raio'
};

var celebi = {
    nome: 'Celebi',
    vida: 60,
    cor: 'verde',
    tamanho: 'pequeno',
    tipo: 'planta'
}

var charmander = {
    nome: 'Charmander',
    vida: 15,
    cor: 'vermelho',
    tamanho: 'pequeno',
    tipo: 'fogo'
}

batalha(charmander, celebi)