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
    "Você: Eu amo muito você, seu corpo, seus braços, seu rosto, seu humor, personalidade, gostos, tudo que faz você ser esse alguém tão importante para mim. Você é a primeira coisa que penso quando acordo e a última ao dormir. A gente nem sempre é perfeito, mas o importante é no fim do dia, poder contar um com o outro e estar sempre presente, amando um ao outro acima de tudo, se apoiando e rindo igual dois idiotas. Meu garoto, meu homem, meu namorado, meu melhor amigo, minha pessoa favorita, eu te amo com todo o meu ser e continuarei amando enquanto estiver respirando. Feliz 21 meu amor❤️",
  );
});
