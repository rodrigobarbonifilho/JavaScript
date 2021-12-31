var date       = new Date()
var dayOfWeek  = date.getDay()

// Jeito Mais Rápido
console.log("Jeito mais Rápido usando dicionário: ");

// Dicionário dos dias da Semana
var daysOfWeek = {
    0: "Domingo",
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sábado"
}

console.log(daysOfWeek[dayOfWeek]); // Mostrando o dia da semana atual

// Espaço
console.log("\n");

// Jeito mais Demoradinho
console.log("Jeito mais Demoradinho usando SwitchCase:");

switch (dayOfWeek) {
    case 0:
        console.log("Domingo");
        break;

    case 1:
        console.log("Segunda");
        break;

    case 2:
        console.log("Terça");
        break;

    case 3:
        console.log("Quarta");
        break;

    case 4:
        console.log("Quinta");
        break;

    case 5:
        console.log("Sexta");
        break;

    case 6:
        console.log("Sábado");
        break;

    default:
        console.log("Dia da Semana não Identificado!");
        break;
}