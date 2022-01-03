tabuadaSelect = document.querySelector("select#tabuadaSelect");

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
        var option = document.createElement("option");
        option.innerText = `${tabuada} X ${c} = ${tabuada*c}`;
        tabuadaSelect.appendChild(option);
    }
}