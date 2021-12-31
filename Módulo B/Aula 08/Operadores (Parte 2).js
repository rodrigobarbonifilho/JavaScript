/* 
Questionário:
    Q 01) Para que serve o operador % em JS? Seria para calcular porcentagem?
    R: Serve para calcular o resto de uma divisão, não.

    
    Q 02) 6 + 4 / 2 é igual a 5 ou 8?
    R: 8.
    
    Q 03) Se uma variável n está valendo 10 e executamos um n += 5, qual será seu novo valor?
    R: Será 15.

    Q 04) Para que servem os operadores ++ e --?
    R: Serve como um:
        n += 1 | n -= 1
Passei!!!!!!
*/

/* 
Prática e Teoria:
    Operadores:
        Aritméticos
        Atribuição
        Relacionais
        Lógicos
        Ternário
    Nesta aula iremos ver sobre os Relacionais. Lógicos e Ternários:
        Relacionais:
            ▼ >
                5 > 2 = true
            ▼ <
                7 < 4 = false
            ▼ >=
                8 >= 8 = true
            ▼ <=
                9 <= 7 = false
            ▼ ==
                5 == 5 = true
            ▼ !=
                4 != 4 = false
            Identidade:
                ▼ ===
                    5 === '5' = false
                    5 === 5 = true
        Exemplos:
            preço >= 200.50       // O preço é maior ou igual a 200.50?
            idade < 18            // A idade é menor do que 18
            curso == 'JavaScript' // Curso é igual a JavaScript
            n1 != n2              // O primeiro número é diferente do segundo número
    Lógicos:
        ▼ !
            ▼ Negação
                true  ! false
                false ! true
        ▼ && 
            ▼ Conjunção
                true  && true  > true
                true  && false > false
                false && true  > false
                false && false > false
        ▼ ||
            ▼ Disjunção
                true  || true  > true
                true  || false > true
                false || true  > true
                false || false > 
    
    Ternários:
        ▼ :, ?
            teste ? true : false
            média >= 7.0 ? 'Aprovado' : 'Reprovado'
                
Notas:
    • Precedência:
        | (), **, / •••
        | >, <, >=  •••
        | !
        | &&
        | ||
        ▼
*/  