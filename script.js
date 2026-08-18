// Seleciona todos os 4 botões e todas as 4 caixas de conteúdo
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".conteudo-objetivo");

// Percorre cada um dos 4 botões
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        // Remove a classe "ativo" de todos os botões e conteúdos
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        // Ativa apenas o botão e o conteúdo correspondentes ao clique
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}