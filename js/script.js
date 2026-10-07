/* ==========================================================
   PROFESSOR NOTA 10
   script.js
========================================================== */


/* ==========================================================
   PERGUNTAS
========================================================== */

const perguntas = [

    {
        pergunta:
            "Qual é o verdadeiro superpoder de um(a) professor(a)?",

        emoji:
            "🦸‍♀️",

        alternativas: [

            "Apagar o quadro em 1 segundo",

            "Fazer a chamada de cabeça",

            "Encontrar um aluno que está quieto demais",

            "Paciência infinita"

        ],

        correta:
            3
    },


    {
        pergunta:
            "Qual frase o(a) professor(a) provavelmente já ouviu muitas vezes?",

        emoji:
            "😂",

        alternativas: [

            "Professor, é para copiar?",

            "Professor, posso ir ao banheiro?",

            "Professor, vale ponto?",

            "Todas as anteriores"

        ],

        correta:
            3
    },


    {
        pergunta:
            "O que nunca pode faltar na rotina de um(a) professor(a)?",

        emoji:
            "🤔",

        alternativas: [

            "Café",

            "Caneta",

            "Paciência",

            "Tudo isso e muito mais!"

        ],

        correta:
            3
    },


    {
        pergunta:
            "Qual destas características combina com um(a) Professor(a) Nota 10?",

        emoji:
            "⭐",

        alternativas: [

            "Inspiração",

            "Dedicação",

            "Carinho pelos alunos",

            "Todas as anteriores"

        ],

        correta:
            3
    },


    {
        pergunta:
            "Depois de tudo que você faz pelos seus alunos, qual prêmio você merece?",

        emoji:
            "🏆",

        alternativas: [

            "Uma salva de palmas",

            "Um dia inteiro de descanso",

            "Um café gigante",

            "O título de Professor(a) Nota 10!"

        ],

        correta:
            3
    }

];


/* ==========================================================
   VARIÁVEIS
========================================================== */

let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


/* ==========================================================
   ELEMENTOS
========================================================== */

const telaInicio =
    document.getElementById(
        "telaInicio"
    );

const telaQuiz =
    document.getElementById(
        "telaQuiz"
    );

const telaResultado =
    document.getElementById(
        "telaResultado"
    );

const telaHomenagem =
    document.getElementById(
        "telaHomenagem"
    );


const btnComecar =
    document.getElementById(
        "btnComecar"
    );

const btnProxima =
    document.getElementById(
        "btnProxima"
    );

const btnHomenagem =
    document.getElementById(
        "btnHomenagem"
    );

const btnReiniciar =
    document.getElementById(
        "btnReiniciar"
    );


const pergunta =
    document.getElementById(
        "pergunta"
    );

const emojiPergunta =
    document.getElementById(
        "emojiPergunta"
    );

const alternativas =
    document.getElementById(
        "alternativas"
    );

const feedback =
    document.getElementById(
        "feedback"
    );

const numeroPergunta =
    document.getElementById(
        "numeroPergunta"
    );

const pontuacao =
    document.getElementById(
        "pontuacao"
    );

const barraProgresso =
    document.getElementById(
        "barraProgresso"
    );


/* ==========================================================
   TROCAR TELA
========================================================== */

function mostrarTela(tela) {

    document
        .querySelectorAll(".tela")
        .forEach(
            elemento => {

                elemento.classList.remove(
                    "ativa"
                );

            }
        );


    tela.classList.add(
        "ativa"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================================
   COMEÇAR
========================================================== */

/*=========================================
btnComecar.addEventListener(
    "click",
    () => {

        perguntaAtual = 0;

        pontos = 0;

        respondeu = false;

        mostrarTela(
            telaQuiz
        );

        carregarPergunta();

    }
);
=====================================================*/

/*===INSERI O CÓDIGO ABAIXO PARA TESTE. SE NÃO FUNCIONAR, USAR O CÓDIGO ACIMA===*/

btnComecar.addEventListener(
    "click",
    () => {

        perguntaAtual = 0;
        pontos = 0;
        respondeu = false;

        mostrarTela(telaQuiz);
        carregarPergunta();

        // Inicia a música de fundo após o primeiro clique
        const audio = document.getElementById("audioFundo");
        if (audio) {
            audio.volume = 0.4; // Ajuste de volume de 0.0 a 1.0
            audio.play().catch(erro => {
                console.log("A reprodução foi bloqueada pelo navegador:", erro);
            });
        }

    }
);

/* ==========================================================
código abaixo para o audio diminuir em fade out de 2 segundos após clicar em p´lay do vídeo
========================================================== */


document.addEventListener('DOMContentLoaded', () => {
    const audioFundo = document.getElementById('audioFundo');
    const videoHomenagem = document.getElementById('videoHomenagem');

    if (videoHomenagem && audioFundo) {
        // Monitora quando o usuário dá play no vídeo
        videoHomenagem.addEventListener('play', () => {
            fazerFadeOutAudio(audioFundo, 2000); // 2000ms = 2 segundos
        });
    }

    /**
     * Função para aplicar Fade-Out progressivo em um elemento de áudio
     * @param {HTMLAudioElement} audio - Elemento de áudio
     * @param {number} duracaoMs - Duração do fade-out em milissegundos
     */
    function fazerFadeOutAudio(audio, duracaoMs) {
        // Se o áudio já estiver pausado ou sem som, não faz nada
        if (audio.paused || audio.volume === 0) return;

        const volumeInicial = audio.volume;
        const intervalo = 50; // Atualiza o volume a cada 50ms
        const passos = duracaoMs / intervalo;
        const decrementoVolume = volumeInicial / passos;

        const timerFade = setInterval(() => {
            if (audio.volume > decrementoVolume) {
                audio.volume -= decrementoVolume;
            } else {
                // Quando o volume chega próximo de zero:
                audio.volume = 0;
                audio.pause();
                clearInterval(timerFade);
                
                // Opcional: restaura o volume original para caso o jogo seja reiniciado
                audio.volume = volumeInicial; 
            }
        }, intervalo);
    }
});


/* ==========================================================
   CARREGAR PERGUNTA
========================================================== */

function carregarPergunta() {

    respondeu = false;

    btnProxima.style.display =
        "none";

    feedback.textContent =
        "";

    feedback.className =
        "feedback";


    const dados =
        perguntas[
            perguntaAtual
        ];


    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    pontuacao.textContent =
        `${pontos} ponto${pontos === 1 ? "" : "s"}`;


    const progresso =
        (
            perguntaAtual /
            perguntas.length
        ) * 100;


    barraProgresso.style.width =
        `${progresso}%`;


    emojiPergunta.textContent =
        dados.emoji;


    pergunta.textContent =
        dados.pergunta;


    alternativas.innerHTML =
        "";


    dados.alternativas.forEach(
        (texto, indice) => {

            const botao =
                document.createElement(
                    "button"
                );


            botao.type =
                "button";


            botao.className =
                "alternativa";


            botao.textContent =
                texto;


            botao.addEventListener(
                "click",
                () => {

                    verificarResposta(
                        indice,
                        botao
                    );

                }
            );


            alternativas.appendChild(
                botao
            );

        }
    );

}


/* ==========================================================
   VERIFICAR RESPOSTA
========================================================== */

function verificarResposta(
    indice,
    botaoSelecionado
) {

    if (respondeu) {
        return;
    }


    respondeu = true;


    const dados =
        perguntas[
            perguntaAtual
        ];


    const botoes =
        document.querySelectorAll(
            ".alternativa"
        );


    botoes.forEach(
        botao => {

            botao.classList.add(
                "desabilitada"
            );

        }
    );


    if (
        indice ===
        dados.correta
    ) {

        pontos++;


        botaoSelecionado.classList.add(
            "correta"
        );


        feedback.textContent =
            "🎉 Muito bem! Resposta correta!";


        feedback.classList.add(
            "correto"
        );

    } else {

        botaoSelecionado.classList.add(
            "errada"
        );


        botoes[
            dados.correta
        ].classList.add(
            "correta"
        );


        feedback.textContent =
            `😊 A resposta certa era: ${dados.alternativas[dados.correta]}`;


        feedback.classList.add(
            "errado"
        );

    }


    pontuacao.textContent =
        `${pontos} ponto${pontos === 1 ? "" : "s"}`;


    btnProxima.style.display =
        "block";

}


/* ==========================================================
   PRÓXIMA PERGUNTA
========================================================== */

btnProxima.addEventListener(
    "click",
    () => {

        perguntaAtual++;


        if (
            perguntaAtual <
            perguntas.length
        ) {

            carregarPergunta();

        } else {

            finalizarQuiz();

        }

    }
);


/* ==========================================================
   FINALIZAR QUIZ
========================================================== */

function finalizarQuiz() {

    barraProgresso.style.width =
        "100%";


    document.getElementById(
        "pontuacaoFinal"
    ).textContent =
        `${pontos}/${perguntas.length}`;


    const resultadoTexto =
        document.getElementById(
            "resultadoTexto"
        );


    let mensagem;


    if (
        pontos === perguntas.length
    ) {

        mensagem =
            "Impressionante! Você acertou todas! Parece que o título de Professor(a) Nota 10 já era seu mesmo! 😍";

    } else if (
        pontos >= 3
    ) {

        mensagem =
            "Excelente resultado! Você provou que merece o título de Professor(a) Nota 10! 🌟";

    } else {

        mensagem =
            "O resultado pouco importa... depois de tudo que você faz, você continua sendo um(a) Professor(a) Nota 10! ❤️";

    }


    resultadoTexto.textContent =
        mensagem;


    mostrarTela(
        telaResultado
    );


    soltarConfetes();

}


/* ==========================================================
   ABRIR HOMENAGEM
========================================================== */

btnHomenagem.addEventListener(
    "click",
    () => {

        mostrarTela(
            telaHomenagem
        );


        /*
           Tenta iniciar a música
           após a interação do usuário.
        */

        const audio =
            document.getElementById(
                "audioHomenagem"
            );


        if (audio) {

            audio.volume =
                0.5;

        }

    }
);


/* ==========================================================
   REINICIAR
========================================================== */

btnReiniciar.addEventListener(
    "click",
    () => {

        perguntaAtual = 0;

        pontos = 0;

        respondeu = false;


        mostrarTela(
            telaInicio
        );

    }
);


/* ==========================================================
   CONFETES
========================================================== */

function soltarConfetes() {

    if (
        typeof confetti !==
        "function"
    ) {

        return;

    }


    const duracao =
        3000;


    const fim =
        Date.now() +
        duracao;


    const intervalo =
        setInterval(
            () => {

                if (
                    Date.now() >
                    fim
                ) {

                    clearInterval(
                        intervalo
                    );

                    return;

                }


                confetti({

                    particleCount:
                        6,

                    spread:
                        70,

                    origin: {

                        x:
                            Math.random(),

                        y:
                            Math.random() * 0.6

                    }

                });

            },
            150
        );


    confetti({

        particleCount:
            120,

        spread:
            100,

        startVelocity:
            40,

        origin: {

            x:
                0.5,

            y:
                0.5

        }

    });

}


/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarTela(
            telaInicio
        );

    }
);
