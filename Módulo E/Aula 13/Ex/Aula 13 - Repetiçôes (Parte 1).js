/* Uma repetição é uma coisa muita usada no dia-a-dia */

// Ex:
// Vamos supor que eu queira comer uma Pizza
var body = document.body;
var textPizzaPedacos = document.getElementById("pizza");
var pizza = 8;
var pedacos = document.getElementById('pedaco').value;


function comerPizza() {
    // Para comer uma pizza eu tenho que morder e mastigar
    while (pizza !== pedacos) {
        pizza--;
    }
    textPizzaPedacos.innerHTML = `Pedações de pizza restante: ${pizza}`;
    // Mas com apenas uma mordida eu não consigo comer a pizza inteira, então eu repito
}

