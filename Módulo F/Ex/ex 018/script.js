var divRes = document.querySelector("div#result");
var listaNumeros = [];

function verificaSeEstaVazio(variavel) {
    if (variavel.length == 0) {
        return 1;
    } else {
        return -1;
    }
}

function estaEntre1e100(n) {
    if (n >= 1 && n <= 100) {
        return 1;
    } else {
        return -1;
    }
}

function pegaMaiorValorArray(array) {
    let maiorValor = array[0];
    for (let pos in array) {
        if (array[pos] > maiorValor) {
            maiorValor = array[pos]
        }
    }
    return maiorValor
}

function pegaMenorValorArray(array) {
    let menorValor = array[0];
    for (let pos in array) {
        if (array[pos] < menorValor) {
            menorValor = array[pos]
        }
    }
    return menorValor;
}

function somaArray(array) {
    let soma = 0;
    for (let pos in array) {
        soma += array[pos];
    }
    return soma;
}

function createP(content) {
    let p = document.createElement("p");
    p.innerText = content;
    return p;
}

function adicionar() {
    divRes.innerHTML = "";

    // Declarando as variaveis a serem usadas.
    let num = document.querySelector("input#num");
    let list = document.querySelector("select#numeros");

    // Verificando se as campos de dados foram preenchidos
    if (verificaSeEstaVazio(num.value) == 1) {
        alert("Por favor informe um número.");
        num.innerHTML = "";
        return -1;
    } else {
        num = Number.parseInt(num.value);
    }

    // Verificando se o número está entre 1 e 100
    if (estaEntre1e100(num) == -1) {
        alert("Informe um valor entre 1 e 100!");
        num.innerHTML = "";
        return -1;
    } 

    // Verificando se nao esta sendo adicionando um numero que ja esteja armazenado na lista
    if (listaNumeros.indexOf(num) == -1) {
        listaNumeros.push(num);
        list.innerHTML = "";
    } else { // Caso ja esteja armazenado aprensa mensagem de erro e retorna -1
        alert("Informe um número que não esteja na lista!");
        return -1;
    }

    // Percorrendo a lista e criando um li para cada numero presente no array
    for (let pos in listaNumeros) {
        let option = document.createElement("option");
        option.innerText = `Valor ${listaNumeros[pos]} foi adicionado`;
        list.appendChild(option);    
    }
}

function finalizar() {

    if (listaNumeros.length == 0) {
        alert("Não foi informado nenhum número!");
        return false;
    }

    // Variaveis que serao usadas para mostrar na div de res
    let listaNumerosLength = listaNumeros.length;
    let maiorValorListaNumeros = pegaMaiorValorArray(listaNumeros);
    let menorValorListaNumeros = pegaMenorValorArray(listaNumeros);
    let somaListaNumeros = somaArray(listaNumeros);
    let mediaListaNumeros = somaListaNumeros / listaNumeros.length;
    
    // Variaveis que irao guardar os p's
    let pLength = createP(`Ao todo temos: ${listaNumerosLength} números cadastrados`);
    let pMaiorValor = createP(`O maior valor encontrado foi: ${maiorValorListaNumeros}`)
    let pMenorValor = createP(`O menor valor encontrado foi: ${menorValorListaNumeros}`)
    let pSoma = createP(`Somando todos os valores temos: ${somaListaNumeros}`)
    let pMedia = createP(`A média dos valores digitados é: ${mediaListaNumeros}`)

    let valoresParaMostrar = [pLength, pMaiorValor, pMenorValor, pSoma, pMedia];

    // Adicionando os p's à div de uma forma mais eficiente
    for (let pos in valoresParaMostrar) {        
        divRes.appendChild(valoresParaMostrar[pos]);
    }
}