/* ALÉM DO XEQUE - Manipulação do DOM
   Objetivo: Capturar o nome do jogador e atualizar a interface
*/

// 1. Seleção de Elementos usando querySelector (Mais moderno que getElementById)
const botaoTreino = document.querySelector('.btn-principal'); 
const inputNome = document.querySelector('#nome');
const nomeNoHeader = document.querySelector('#patente'); // Aonde diz "Mestre"
const form = document.querySelector('#form-onboarding');

// 2. Função (Arrow Function) para atualizar o nome
const atualizarNome = (event) => {
    // Evita que a página recarregue ao clicar no botão do formulário
    event.preventDefault();

    // Pegamos o valor digitado no input
    const nomeDigitado = inputNome.value;

    if (nomeDigitado !== "") {
        // Manipulação do DOM: Alterando o texto interno da tag <strong>
        nomeNoHeader.textContent = nomeDigitado;
        
        // Mudando o estilo via JS para dar um feedback visual
        nomeNoHeader.style.color = "#81b64c"; 
        
        alert(`Bem-vindo ao tabuleiro, ${nomeDigitado}!`);
    } else {
        alert("Por favor, digite seu nome de enxadrista.");
    }
};

// 3. Evento: "Escutando" o envio do formulário
form.addEventListener('submit', atualizarNome);

// --- INTERAÇÃO 2: Dica Aleatória (Refatorada) ---
const botaoDica = document.querySelector('#ajuda-mestre');

botaoDica.addEventListener('click', () => {
    const dicas = ["Domine o centro", "Proteja o Rei", "Desenvolva as peças"];
    const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    
    // Criando um elemento novo dinamicamente (Manipulação de DOM avançada)
    console.log("Dica gerada: " + aleatoria);
});
//fim do codigo