
document.addEventListener("DOMContentLoaded", () => {
  // Marca uma missão como concluída.
  document.querySelectorAll(
    '[data-missao-concluir], .concluir-missao'
  ).forEach((botao) => {
    botao.addEventListener("click", () => {
      const missao = botao.closest(
        ".missao, [data-missao]"
      );

      if (missao) {
        missao.classList.toggle("concluida");

        const concluida =
          missao.classList.contains("concluida");

        botao.textContent = concluida
          ? "Missão concluída ✓"
          : "Concluir missão";

        botao.setAttribute(
          "aria-pressed",
          String(concluida)
        );
      }
    });
  });

  // Mostra ou esconde conteúdos de cursos.
  document.querySelectorAll(
    "[data-toggle-curso]"
  ).forEach((botao) => {
    botao.addEventListener("click", () => {
      const id = botao.dataset.toggleCurso;
      const conteudo = document.getElementById(id);

      if (conteudo) {
        const oculto =
          conteudo.hidden === false;

        conteudo.hidden = oculto;
        botao.setAttribute(
          "aria-expanded",
          String(!oculto)
        );
      }
    });
  });

  // Exibe uma mensagem para formulários de demonstração.
  document.querySelectorAll(
    "form[data-demo]"
  ).forEach((formulario) => {
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      alert("Atividade registrada nesta demonstração!");
    });
  });
});
