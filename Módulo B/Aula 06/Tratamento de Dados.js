/*
Questionário:
    Q 01) O que é uma variável?
    R: É um espaço na memória para guardar dados.

    Q 02) Como declarar uma variável numérica Inteiro ou Real usando JS?
    R: Ex:
        var idade = 18

    Q 03) Quais são os tipos primitivos do JS?
    R: São:
        number
        string
        boolean

    Q 04) O que significa colocar o valor null dentro de uma variável?
    R: Usamos o null para indicar ao computador que aquela variável está vazia.

    Passei!!!!

Manipulação de Dados:
    Vamos tratar nesta aula sobre number e boolean
    
    Strings:
        Conversão:
            Para fazer uma conversão de String > Número:
                Number.parseInt(n)
                Number.parseFloat(n)
            Para fazer uma conversão de Número > String:
                String(n)
                n.toString()
        Formatação:
            s.length         // Quantos caracteres a string tem
            s.toUpperCase()  // Tudo "Maiusculo"
            s.toLowerCase()  // Tido "Minisculo"
    Numbers:
        Formatção:
            var n1 = 1534.5
            Para deixarmos com duas casas decimais:    
                n1.toFixed(2)
            Para trocarmos o ponto flutuante por vírgula:
                n1.toFixed(2).replace('.', ',')
            Para mostrar o sálario de uma pessoa:
                n1.toLocateString('pt-BR', {style: 'currency', currency: 'BRL'})
Fim da Aula
*/ 
    