const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");





    const perguntas = [
        {
            enunciado: "Qual é a importância da cultura para uma sociedade?",
            alternativas: [
                {
                    texto: "A cultura ajuda a preservar tradições, costumes e valores.",
                    afirmacao: "afirmacao"
                },
                {
                    texto: "A cultura não possui relação com a identidade de um povo.",
                    afirmacao:"afirmacao"
                }
            ]
        },
        {
            enunciado: "O que podemos entender por diversidade cultural?",
            alternativas: [
                {
                texto:"É a existência de diferentes costumes, crenças e tradições.",
                afirmacao:"afirmacao"
                },
                {
                    texto:"A diversidade cultural significa que todos os povos possuem os mesmos costumes.",
                    afirmacao:"afirmacao"
                }
            ]
        },
        {
            enunciado: "Por que é importante preservar as tradições culturais?",
            alternativas: [
                {
                    texto:"Porque as tradições ajudam a manter a história e a identidade de um povo.",
                    afirmacao:"afirmacao"
                },
                {
                    texto:"Porque preservar tradições impede qualquer mudança na sociedade.",
                    afirmacao:"afirmacao"
                }
            ]
        },
        {
            enunciado: "Como a música pode representar uma cultura?",
            alternativas: [
                {
                    texto: "A música pode expressar costumes, histórias e sentimentos de diferentes povos.",
                    afirmacao:"afirmacao"
                },
                {
                    texto:"A música não possui nenhuma relação com a cultura de uma sociedade.",
                    afirmacao:"afirmacao"
                }
            ]
        },
        {
            enunciado: "Qual é a importância do respeito entre diferentes culturas?",
            alternativas: [
                {
                    texto:"O respeito ajuda a combater o preconceito e promove a convivência.",
                    afirmacao:"afirmacao"
                },
                {
                    texto:"Respeitar outras culturas significa abandonar a própria cultura.",
                    afirmacao:"afirmacao"
                }
            ]
        }
]; 


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", function() {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

