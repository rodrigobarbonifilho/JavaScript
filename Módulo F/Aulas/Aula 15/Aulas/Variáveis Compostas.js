/*
Diferença entre Variáveis simples e Variáveis Compostas:
    Variáveis Simples:
        So conseguem armazenar uma valor por vez.
    Variáveis Compostas:
        Conseguem armazenar varios valores por vez.

Se formos pensar que nem pensamos na outra aula sobre variáveis. Vamos imageinar o mesmo exemplo de vagas e cada vaga e uma variavel e cada vaga tera a sua identificação entao teremos a: vaga a0, vaga a1, vaga a2, etc... mas e se tivermos 1000 vagas para cada vaga teremos que usar uma linha para podermos declarar aquela vaga? Não! Podemos chamar todas as vagas do tipo a de vagas automotivas e na vaga a temos a vaga a[0] para podermos pegar a vaga da posição 0 do vaga a.

             0       1       2
vaga a = [carro1, carro2, carro3]

Eu declarei uma variável que guarda varios valores e cada valor recebe uma identificação, um índice. Para podermos pegar o carro da posição 0 (sim 0) basta digitarmos a[0]

Este tipo de variável que declaramos nós chamamos de Array ou Vetor em Português, e dentro de um Array temos elementos que guardam dentro de si; um valor e um índice, o índice por sua vez e uma identificação que cada elemento recebe que pode ser chamado de chave ou key também e o conteúdo que o elemtno guarda e chamado de valor.

ou seja: Um Array (ou Vetor) é uma variável composta que guarda elementos, que, por sua vez possuem um chave de identificação, o índice; e um valor, o conteúdo.
*/
// Exemplo de código
// let num = [5, 8, 4]; Aqui temos um vetor de 3 elementos que contem os valores 5, 8 e 4

// Praticando //

/*
Mas agora que declaramos a variavel com 3 elementos quer dizer que para sempre teremos apenas 3 espaços nessa variavel? Não de novo! Podemos expandir essa variável de duas formas:
    let num = [5, 8, 4]
    1º Forma:
        num[3] = 6;
    E o resultado será:
        <- console.log(num);
        -> [5, 8, 4, 6]
    2º Forma:
        num.push(7);
    E o resultado será:
        <- console.log(num);
        -> [5, 8, 4, 6, 7]

Podemos tambem saber o comprimento de um array usando o length:
    <- num.length
    -> 5

Outro metódo internos de um vetor é o sort, que basicamente colocar o array em ordem:
    <- num.sort;
    <- console.log(num);
    -> [4, 5, 6, 7, 8]

Para podermos mostrar um array sem aquela formatação padrao de "[elementos]" podemos usar o for, while, do..while, ou seja, estruturas de repetições:

for (let c = 0; c <= num.length; c++) {
    console.log(num[c]);

    Porem temos outra forma de percorrer um vetor (chamamos esse feito de percussão de vetores), desse jeito:

for (let pos in num) {
    console.log(num[pos]);
}

Podemos buscar valores dentro de vetor, assim:
    <- num.indexOf(7);
    -> 3
    <- num.indexOf(3);
    -> -1
Basicamente passamos um elemento para esse metódo e ele irá retornar a posição desse elemento caso ele o ache, caso não, ele irá retornar -1.
*/