//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Para o sorteio do amigo posso acessar o indice do array usando Math.random, e parar limitar ate quanto 
// ele vai sortear, uso uma variavel que vai receber o length do array 

let amigos = [];

function adicionarAmigo(){
    const input = document.getElementById('amigo');


    if(input.value.trim() === ''){
        alert("Por favor, insira um nome.")
    }
    else{
    let amigo = input.value.trim();
    amigos.push(amigo)

    let table = document.getElementById('listaAmigos')
    table.innerHTML += amigo + "<br>"

    input.value = '';
    }  
}

function sortearAmigo(){
    let qntAmigos = amigos.length

    let numeroSortido = parseInt(Math.random() * qntAmigos)

    let result = document.getElementById('resultado');

    result.innerHTML = amigos[numeroSortido]
}
