let valores = [8, 1, 7, 2, 9]
valores.sort()

// console.log(valores);

// console.log(valores[0]);
// console.log(valores[1]);
// console.log(valores[2]);
// console.log(valores[3]);
// console.log(valores[4]);

// for (let c = 0; c < valores.length; c++) {
//     console.log(`* A posição ${c} tem o valor: ${valores[c]}`);
// }

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
