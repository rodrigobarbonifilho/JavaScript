var p        = document.querySelector("p#contagem")

function verificaSeEstaVazio(variavel) {
    if (variavel ==+ "") {
        return true;
    } else {
        return false;
    }
}

function contar() {
    var inicio   = document.querySelector("input#inicio").value;
    var fim      = document.querySelector("input#fim").value;
    var passo    = document.querySelector("input#passo").value;

    if (verificaSeEstaVazio(inicio)) {
        alert("Impossivel realizar a contagem, é necessário ser infomado o ínicio!");
        return false;
    } else if (verificaSeEstaVazio(fim)) {
        alert("Impossivel realizar a contagem, é necessário ser informado o fim!");
        return false;
    } else if (verificaSeEstaVazio(passo)) {
        alert("Passo é necessário, como não foi informado será considerado como: 1.");
        passo = "1";
    }

    inicio = Number.parseInt(inicio);
    fim    = Number.parseInt(fim);
    passo  = Number.parseInt(passo);

    p.innerHTML = "";

    while (inicio <= fim) {
        p.innerHTML += `${inicio} ↷ `;
        inicio += passo;
    }
    p.innerHTML += "🚩";
}