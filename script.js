
function mostrarCompromisso() {
  const acao = document.getElementById("acao");
  const mensagem = document.getElementById("mensagem");

  const atitudes = {
    reciclar: "Você escolheu separar o lixo reciclável! ♻️",
    agua: "Você escolheu economizar água! 💧",
    energia: "Você escolheu economizar energia! 💡",
    natureza: "Você escolheu cuidar de uma planta! 🌱",
    lixo: "Você escolheu manter as ruas limpas! 🌍"
  };

  mensagem.textContent = atitudes[acao.value] +
    " Uma pequena atitude faz diferença!";
}

const perguntas = [
  {
    pergunta: "Qual atitude ajuda a economizar água?",
    opcoes: [
      "Deixar a torneira aberta",
      "Fechar a torneira ao escovar os dentes",
      "Tomar banhos mais longos"
    ],
    correta: 1
