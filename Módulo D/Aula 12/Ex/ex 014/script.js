// Funções
function carregar() {
    // Conteúdo Dos Sites
    var msg = document.querySelector("div#msg");
    var img = document.querySelector("img#imagem");

    // Date
    var date = new Date();
    var hour = date.getHours();
    hour = 16
    // Mudando a mensagem
    msg.innerHTML = `Agora são exatamente ${hour} Horas.`

    // Mudando a imagem
    if (hour >= 0 && hour < 12) {
        // Bom Dia!!
        img.src = "Imagens/manha.png"
        document.body.style.background = "#e2cd9f"
    } else if (hour <= 18) {
        // Bom Tarde!!
        img.src = "Imagens/tarde.png"
        document.body.style.background = "#b9846f"
    } else {
        // Bom Noite!!
        img.src = "Imagens/noite.png"
        document.body.style.background = "#515154"
    }
}