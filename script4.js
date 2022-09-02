let num = [1, 2, 3]
let btnRed = document.getElementById("btn-red");
let btnBlue = document.getElementById("btn-blue");
let btnGreen = document.getElementById("btn-green");
let titulo = document.getElementById("titulo");
let container = document.getElementById("container")

function loaded(){
    btnRed.addEventListener("click", trocaRed)
    btnBlue.addEventListener("click", trocaBlue)
    btnGreen.addEventListener("click", trocaGreen)
}

function trocaRed(){
    titulo.innerText = "Color changed to RED";
    container = document.getElementById("container").style.backgroundColor = "red";
}

function trocaBlue(){
    titulo.innerText = "Color changed to BLUE";
    container = document.getElementById("container").style.backgroundColor = "blue"
}

function trocaGreen(){
    titulo.innerText = "Color change to GREEN";
    container = document.getElementById("container").style.backgroundColor = "green"
}

function troca(){
    let math = Math.floor(Math.random() * 3)
    if(math == 0){
        titulo.innerText = "RED"
        container = document.getElementById("container").style.backgroundColor = "red";
    } else if ( math == 2){
        titulo.innerText = "BLUE"
        container = document.getElementById("container").style.backgroundColor = "blue";
    } else {
        titulo.innerText = "GREEN"
        container = document.getElementById("container").style.backgroundColor = "green";
    }
}