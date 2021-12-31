/* 
Questionário:
    Q 01) Já sabe organizar pastas com VSCode?
        R: Sim.

    Q 02) O Node.js já está instalado no seu computador?
        R: Sim, ele server para rodar JS fora do navegador.

    Q 03) Sabe diferenciar HTML5, CSS3 e JS dentro de um código?
        R: Sim.

    Q 04) Sabe disparar alertas, confirmações e perguntas?
        R: Sim, windown.alert, window.confirm, window.prompt.

Passei!!!!!

Tipos de Dados e Variáveis

Anteriormete...
    aprendemos como disparar um alerta
        window.alert() ou só alert()
    uma janela de confirmação
        window.confirm() ou só confirm()
    e um input do teclado
        window.prompt() ou só promp()

Mas tinhamos um problema:
    1° como ver se a confirmação foi ok ou cancel
    2° como guardar a resposta do úsuario

Variáveis:
        Vamos supor que eu tenho u estavionamento e para guardar os carros
    temos delimitadores de espaço que são as vagas e denominaremos elas como:
            vaga a1
            vaga a2
            vaga a3
            vaga a4
            vaga a5
            vaga a6
        Mas o grande o probrema é que preciso de vagas maiores e menores
    para caminhões e bicicletas
        Caminhões:
            vaga c1
            vaga c2
            vaga c3
            vaga c4
        Bicicletas:
            vaga m1
            vaga m2
            vaga m3
            vaga m4
            vaga m5
            vaga m6

        Para "estacionar" um valor à essa "vaga" usamos:
            vaga a1 = carro1
        No JS quando vêmos apenas um sinal de igual lêmos "recebe".
    Mas vamos supôr que o carro2 queira entrar nessa "vaga" poderiamos fazer:
            vaga a1 = carro2
        E obviamente que não dá para colocarmos o carro2 temos que tirar o carro1
    outra coisa que posso fazer é falar que essa "vaga" é vazia com o:
            vaga a1 = null

    E na linguagem Técnica:
        O terreno é a memória e as vagas, espaços são as variáveis
        fazendo:
            var n1 = 5
            var n2 = 8.5
            var n3 = 15
        Este processo é chamado de atribuição, e como nas vagas temos variáveis de tamanhos
    diferentes que será um string:
            var s1 = "JavaScript"
            var s2 = "Curso em Video"
            var s3 = "Guanabara"
    Regras de nomes para variáveis. O nome das váriaveis são chamados de identificadores:
        1° Podem começar com "letra", "$" ou _;
        2° Não podem começar com "números";
        3° Pode usar "letras" e "números";
        4° Pode usar "acentos" e "símbolos";
        5° Não pode conter "espaços";
        6° Não podem ser "palavras reservadas"
    Dicas de identificadores:
        1° Maiusuculas e minusculas fazem diferença
        2° Utilize nomes coerentes para as variáveis
        3° Evite se tornar um "programador alfabeto" ou um "programador contador"

Tipos de Dados:
    Grupo 1 (inteiro):
        5 18 -12 
    Grupo 2 (float):
        0.5 -15.9 3.14 8.0
    Grupo 3 *booleans:
        true false
    Grupo 4 (strings):
        "Google"
        'JavaScript'
        `Maria`

    Esses são os dados primitivos.

    Data Type:
        number
            infinity
            NaN
        string
        boolean
        null
        undefined
        object
            array
        function
    Para usarmos esse tipos precisamos usar o typeof. Vamos ver na prática:
    Praticando...
Notas:
    No JS moderno podemos usar let inves de var
    No JS podemos tanto usar; ("") aspas duplas, ('') aspas, apóstrofo, clase (``)
    No JS os tipos inteiros e float são iguais com a nomeclatura number
    No JS o tipo null é considerado como object
*/
