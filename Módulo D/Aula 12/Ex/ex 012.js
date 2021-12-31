// Bom dia, Boa tarde, Boa noite
var agora = new Date()
var hora  = agora.getHours()

console.log(`Agora são exatamente: ${hora} Hrs`);

if (hora <= 6) {
    console.log("Boa Madrugada!!");
} else if (hora <= 12) {                       // Bom dia
    console.log("Bom Dia!!");
} else if (hora <= 18) {                       // Boa tarde
    console.log("Boa Tarde!!");     
} else if (hora <= 24 || hora == 0) {          // Boa noite
    console.log("Boa Noite!!");
}
