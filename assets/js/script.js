const botoes = document.querySelectorAll(".btn-clicar");
const botaoSecreto = document.getElementById("botao-secreto");
let totalClicados = 0;
botoes.forEach((botao) => {
  const textoOriginal = botao.dataset.original || "...";

  botao.addEventListener("click", () => {
    if (botao.disabled) return;

    botao.textContent = botao.dataset.texto || textoOriginal;
    botao.classList.add("ativo");

    totalClicados++;

    if (totalClicados === botoes.length) {
      botaoSecreto.style.display = "block";
    }

    setTimeout(() => {
      botao.textContent = textoOriginal;
      botao.classList.remove("ativo");
      botao.disabled = false;
    }, 6000);
  });
});
botaoSecreto.addEventListener("click", () => {
  alert(
    "Você: Eu amo muito você, seu corpo, seus braços, seu rosto, seu humor, personalidade, gostos, tudo que faz você ser esse alguém tão importante para mim, a gente nem sempre é perfeito, mas o que importa é no fim do dia, poder contar um com o outro e estar sempre presente. Eu te amo com todo o meu ser e continuarei amando enquanto estiver respirando, Feliz 21 meu amor❤️",
  );
});
