let num = [1, 2, 3]
let btnRed = document.getElementById("btn-red");
let btnBlue = document.getElementById("btn-blue");
let btnGreen = document.getElementById("btn-green");
let btnReset = document.getElementById("btn-reset")
let titulo = document.getElementById("titulo");
let container = document.getElementById("container")

function loaded(){
    btnRed.addEventListener("click", trocaRed)
    btnBlue.addEventListener("click", trocaBlue)
    btnGreen.addEventListener("click", trocaGreen)
    btnReset.addEventListener("click", trocaReset)
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

function trocaReset(){
    titulo.innerText = "Change The Color";
    container = document.getElementById("container").style.backgroundColor = "white";
}