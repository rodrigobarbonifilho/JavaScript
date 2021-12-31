/*
Questionário:
    Q 01) Como é possivel guardar o valor digitado em um prompt() dentro de uma variável?
    R: Ex:
        var n1 = prompt('Digite um número:')
        n1

    Q 02) Como fazer com que um número digitado em um prompt() possa ser usado em cálculo?
    R: Ex:
        var n1 = Number(prompt('Digite um número:')) // Convertendo ele para Number.
    
    Q 03) Como transformar um texto todo para letras MAIÚSCULAS?
    R: Ex:
        var nome = prompt('Qual o seu nome?')
        nome.toUpperCase()

    Q 04) Como mostrar um número formatado como valor monetário?
    R: Ex:
        var sal = 1534.5
        sal.toLocateString('pt-br', {style: 'currency', currency: 'BRL'})
Passei!!!!
*/

/* 
Prática e Teoria:
    Operadores:
        Aritméticos
        Atribuição
        Relacionais
        Lógicos
        Ternário
    Nesta aula iremos ver só os:
        ▼ Aritméticos
            ▼ +
                5 + 2 = 7
            ▼ -
                5 - 2 = 3
            ▼ *
                5 * 2 = 10
            ▼ /
                5 / 2 = 2.5
            ▼ %
                5 % 2 = 1
            ▼ **
                5 ** 2 = 25 
        ▼ Atribuição
            Atribução Simples:
                ▼ var a = 5 + 3
                    8
                ▼ var b = a % 5
                    3
                ▼ var c = 5 * b ** 2
                    45
                ▼ var d = 10 - a / 2
                    6
                ▼ var e = 6 * 2 / d
                    2
                ▼ var f = b % e + 4 / e
                    3
            
            Auto-atribuições:
                var n = 3
                ▼ var + n  
                    n = n + 4 | n += 4
                    n = 7
                ▼ var - n
                    n = n - 5 | n -= 5
                    n = 2
                ▼ var * n
                    n = n * 4 | n *= 4
                    n = 8
                ▼ var / n
                    n = n / 2 | n /= 2
                    n = 4
                ▼ var ** n
                    n = n ** 2 | n **= 2
                    n = 16
                ▼ var % n
                    n = n % 5  | n 5= 5
                    n = 1
            
            Incremento:
                var x = 5
                x = x + 1 | x += 1
                x = x - 1 | x -= 1
                ▼ x++
                    
                ▼ x--
Notas:
    • Todos os operadores aritméticos são binários, ou seja usam dois números para fazer o cálculo
    • Como na matemática também temos a precedência de operadores:
        Ex:
            5 + 3 / 2 = 6.5 // Pois efetuamos primeiro a divisão Real e depois a soma
    • Para mudar a ordem de precedência temos:
        | ()
        | **
        | *, /, %
        | +, -
        ▼
*/