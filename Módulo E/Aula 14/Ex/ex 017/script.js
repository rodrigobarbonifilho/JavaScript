itensDaLista = document.querySelectorAll("li");

function verificaSeEstaVazio(value) {
    if (value == "") {
        return true;
    } else {
        return false;
    }
}

function gerarTabuada() {
    var tabuada = document.querySelector("input#tabuada").value;

    if (verificaSeEstaVazio(tabuada)) {
        alert("Não é possível gerar a tabuada. Por favor informe um número!");
        return false;
    } else {
        tabuada = Number.parseInt(tabuada);
    }

    for (var c = 0; c <= 10; c++) {
        itensDaLista[c].innerText = `${tabuada} X ${c} = ${tabuada*c}`;
    }
}