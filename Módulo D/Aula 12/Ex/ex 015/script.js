// Vars
var button = document.querySelector("input#verificar");

// AddEventsListeners
button.addEventListener("click", verificar);

function verificar() {
    var img             = document.querySelector("img#pessoa")
    var msg             = document.querySelector("div#msg");
    var data            = new Date();
    var anoDeNascimento = document.getElementById("anoDeNascimento").value;
    var idade           = data.getFullYear() - anoDeNascimento;
    var masc            = document.getElementById('masculino').checked;
    var femi            = document.getElementById('feminino').checked;

    console.log('Masculino: ', masc, 'Feminino: ', femi);
    // Homem
    if (masc === true) {
        msg.innerHTML = `<p>Detectamos um Homem com ${idade} anos.</p>`;
        if (idade > 0 && idade <= 8) {
            // Entre 0 e 8 anos
            img.src = "Imagens/Homem/0-8 anos.png"
        } else if (idade >= 9 && idade <= 13) {
            // Entre 9 e 13
            img.src = "Imagens/Homem/9-13 anos.png"
        } else if (idade >= 14 && idade <= 21) {
            // Entre 14 e 21
            img.src = "Imagens/Homem/14-21 anos.png"
        } else if (idade >= 22 && idade <= 35) {
            // Entre 22 e 35
            img.src = "Imagens/Homem/22-35 anos.png"
        } else if (idade > 36) {
            // Acima de 36
            img.src = "Imagens/Homem/36+ anos.png"
        } 
    }

    // Mulher
    if (femi === true) {
        msg.innerHTML = `<p>Detectamos uma Mulher com ${idade} anos.</p>`;
        if (idade > 0 && idade <= 8) {
            // Entre 0 e 8 anos
            img.src = "Imagens/Mulher/0-8 anos.png"
        } else if (idade >= 9 && idade <= 13) {
            // Entre 9 e 13
            img.src = "Imagens/Mulher/9-13 anos.png"
        } else if (idade >= 14 && idade <= 21) {
            // Entre 14 e 21
            img.src = "Imagens/Mulher/14-21 anos.png"
        } else if (idade >= 22 && idade <= 35) {
            // Entre 22 e 35
            img.src = "Imagens/Mulher/22-35 anos.png"
        } else if (idade > 36) {
            // Acima de 36
            img.src = "Imagens/Mulher/36+ anos.png"
        } 
    }

    console.log(idade);
    console.log(anoDeNascimento);
}