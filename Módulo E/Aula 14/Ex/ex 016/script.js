var p = document.querySelector("p#contagem")

function verificaSeEstaVazio(variavel) {
    if (variavel == "") {
        return true;
    } else {
        return false;
    }
}

function contar() {
    let inicio   = document.querySelector("input#inicio").value;
    let fim      = document.querySelector("input#fim").value;
    let passo    = document.querySelector("input#passo").value;
    let progressiva = true;

    if (verificaSeEstaVazio(inicio)) {
        p.innerHTML = "Impossivel contar, informe o Inicio!";
        return false;
    } else if (verificaSeEstaVazio(fim)) {
        p.innerHTML = "Impossivel contar, informe o Fim!";
        return false;
    } else if (verificaSeEstaVazio(passo) || passo == "0") {
        alert("Passo é necessário, como não foi informado ou foi colocado como sendo 0; será considerado como: 1.");
        passo = "1";
    }

    inicio = Number.parseInt(inicio);
    fim    = Number.parseInt(fim);
    passo  = Number.parseInt(passo);

    p.innerHTML = "";

    if (inicio > fim) {
        progressiva = false;
    }

    if (progressiva) {
        while (inicio <= fim) {
            p.innerHTML += `${inicio} \u{1F449} `;
            inicio += passo;
        }
    } else {
        while (inicio >= fim) {
            p.innerHTML += `${inicio} \u{1F449} `;
            inicio -= passo;
        }
    }

    p.innerHTML += `\u{1F3C1}`;
}