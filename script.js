const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Uma grande paz surgirá e todas as guerras cessarão para sempre, não haverá mais brigas e violência. Mas você terá que viver o resto da vida exilado em uma ilha para que isso aconteça",
        alternativas: [
            {
                texto: "Eu aceito.",
                afirmacoes: "Você se sacrificaria pela humanidade."
            },
            {
                texto:"Eu recuso.",
                afirmacoes: "Para você, não ser solitário é mais importante do que a paz mundial."
            },
            ]
    },
    {

        enunciado: "Você será um artista famoso. Mas todos os seus filmes serão horríveis.",
        alternativas: [            
            {
            texto: "Eu aceito.",
            afirmacoes: "Você quer ser reconhecido, não importa se é por algum trabalho merda."
        },
        {
            texto:"Eu recuso.",
            afirmacoes: "Sua dignidade é mais importante do que a fama. Antes fazer algo bem feito e não ser reconhecido, do que ser conhecido por algo ruim."
        },
    ]
    },
    {
        enunciado: "Você conseguirá se comunicar em qualquer idioma. Mas não saberá ler e nem escrever",
        alternativas: [
            {
                texto: "Eu aceito.",
                afirmacoes: "Você é o ser humano mais comunicativo e, ao mesmo tempo, o menos comunicativo da Terra."
            },
            {
                texto:"Eu recuso.",
                afirmacoes: "Vpcê é alguém alfabetizado normalmente."
            },
        ]
    },
    {
        enunciado: "O mundo não passará mais fome. Mas você terá que escolher um país para passar fome no lugar dos outros e eles saberão que você o escolheu.",
        alternativas: [
            {
                texto: "Eu aceito.",
                afirmacoes: "Considerando que o Vaticano é o menor país do mundo e com a fé deles, todos aceitariam passar fome pelo mundo. Obviamente você escolheu a Argentina."
            },
            {
                texto:"Eu recuso.",
                afirmacoes: "Você é cruel. Escolheu que o mundo continue sentindo fome. Que horror!"
            },
        ]
    },
    {
        enunciado: "Você nunca mais terá que fazer um trabalho do Alura. Mas você terá que fazer 40 flexões, 80 abdominais e 60 polichinelos todos os dias.",
        alternativas: [
            {
                texto: "Eu aceito.",
                afirmacoes: "Você se tornou um atleta muito saudável e feliz."
            },
            {
                texto:"Eu recuso.",
                afirmacoes: "Você é um projeto falho de um programador que não tem um bom sono e não é feliz."
            },
        ]
    },
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Baseado em suas escolhas...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
