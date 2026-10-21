
document.addEventListener("DOMContentLoaded", () => {
  // QUIZ AMBIENTAL
  const perguntas = [
    {
      pergunta: "Qual atitude ajuda a economizar água?",
      opcoes: [
        "Deixar a torneira aberta",
        "Fechar a torneira ao escovar os dentes",
        "Tomar banhos mais longos"
      ],
      correta: 1
    },
    {
      pergunta: "Onde devemos jogar uma garrafa plástica?",
      opcoes: [
        "No rio",
        "Em qualquer lugar",
        "Na coleta seletiva adequada"
      ],
      correta: 2
    },
    {
      pergunta: "Como economizar energia elétrica?",
      opcoes: [
        "Apagar luzes desnecessárias",
        "Deixar todas as luzes acesas",
        "Deixar aparelhos ligados sem uso"
      ],
      correta: 0
    },
    {
      pergunta: "Qual atitude ajuda as árvores?",
      opcoes: [
        "Queimar folhas",
        "Evitar desperdício de papel",
        "Quebrar galhos"
      ],
      correta: 1
    },
    {
      pergunta: "O que fazer com o lixo durante um passeio?",
      opcoes: [
        "Deixá-lo na rua",
        "Jogá-lo em um rio",
        "Descartá-lo no local adequado"
      ],
      correta: 2
    }
  ];

  let indice = 0;
  let pontosQuiz = 0;
  let respondeu = false;

  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const resultadoEl = document.getElementById("resultado");
  const pontosEl = document.getElementById("pontos");
  const proximaBtn = document.querySelector(
    '#quiz button[onclick="proximaPergunta()"]'
  );

  function mostrarPergunta() {
    if (!perguntaEl || !opcoesEl) return;

    respondeu = false;
    perguntaEl.textContent = perguntas[indice].pergunta;
    resultadoEl.textContent = "";

    const botoes = opcoesEl.querySelectorAll("button");

    perguntas[indice].opcoes.forEach((texto, i) => {
      if (botoes[i]) {
        botoes[i].textContent = texto;
        botoes[i].disabled = false;
      }
    });

    if (proximaBtn) {
      proximaBtn.disabled = true;
    }
  }

  window.responder = function(numero) {
    if (respondeu || !perguntas[indice]) return;

    respondeu = true;
    const acertou = numero === perguntas[indice].correta;

    if (acertou) {
      pontosQuiz += 10;
      resultadoEl.textContent = "Resposta correta! +10 pontos 🌟";
    } else {
      resultadoEl.textContent =
        "Não foi dessa vez! Tente a próxima pergunta.";
    }

    if (pontosEl) {
      pontosEl.textContent = pontosQuiz;
    }

    opcoesEl.querySelectorAll("button").forEach(botao => {
      botao.disabled = true;
    });

    if (proximaBtn) {
      proximaBtn.disabled = false;
    }
  };

  window.proximaPergunta = function() {
    if (!respondeu) return;

    indice = (indice + 1) % perguntas.length;
    mostrarPergunta();
  };

  if (perguntaEl && opcoesEl) {
    mostrarPergunta();
  }

  // MISSÕES ECOLÓGICAS
  const lista = document.getElementById("lista-missoes");

  function atualizarMissoes() {
    if (!lista) return;

    const caixas = lista.querySelectorAll(
      'input[type="checkbox"]'
    );

    let totalPontos = pontosQuiz;
    let concluidas = 0;

    caixas.forEach(caixa => {
      const pontos = Number(caixa.dataset.pontos) || 0;

      if (caixa.checked) {
        concluidas++;
        totalPontos += pontos;
      }

      const missao = caixa.closest(".missao");
      if (missao) {
        missao.classList.toggle("concluida", caixa.checked);
      }
    });

    document.querySelectorAll("#total-missoes").forEach(el => {
      el.textContent = concluidas + "/" + caixas.length;
    });

    document.querySelectorAll("#barra-progresso").forEach(barra => {
      barra.style.width = caixas.length
        ? (concluidas / caixas.length * 100) + "%"
        : "0%";
    });

    document.querySelectorAll("#pontos").forEach(el => {
      el.textContent = totalPontos;
    });
  }

  if (lista) {
    lista.querySelectorAll('input[type="checkbox"]').forEach(caixa => {
      caixa.addEventListener("change", atualizarMissoes);
    });

    atualizarMissoes();
  }

  // COMPROMISSO ECOLÓGICO
  window.mostrarCompromisso = function() {
    const secao = document.getElementById("compromisso");
    const mensagem = document.getElementById("mensagem");

    if (!secao || !mensagem) return;

    const escolha = secao.querySelector("select");

    if (!escolha || !escolha.value) {
      mensagem.textContent = "Escolha um compromisso primeiro.";
      return;
    }

    mensagem.textContent =
      "🌱 Seu compromisso foi registrado: " +
      escolha.options[escolha.selectedIndex].text;
  };
});
