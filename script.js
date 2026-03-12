/* ALÉM DO XEQUE - Lógica de Interatividade
   Atividade: JavaScript do Zero
*/

// 1. Mensagem de teste para o Console (Requisito da Atividade)
console.log("O JavaScript está funcionando! ♟️");

// 2. Seleção de Elementos
// Buscamos o botão pelo ID que definimos no HTML
const botaoMestre = document.getElementById('ajuda-mestre');
const campoNome = document.getElementById('nome'); // Input do formulário
const formOnboarding = document.getElementById('form-onboarding');

// 3. Banco de Dados Simples (Dicas do Mestre)
const dicas = [
    "Controle o centro do tabuleiro (casas e4, d4, e5, d5).",
    "Desenvolva peças menores (Cavalos e Bispos) antes das grandes.",
    "Não tire a Dama cedo demais; ela pode se tornar um alvo.",
    "O Roque é a melhor forma de proteger seu Rei e conectar torres.",
    "Observe sempre a última jogada do adversário: qual a ameaça?",
    "Peões são a alma do xadrez; não os mova sem um plano."
];

// 4. Função para dar a Dica Aleatória
botaoMestre.addEventListener('click', () => {
    // Math.random gera um número entre 0 e 1
    // Math.floor arredonda para baixo para termos um índice válido da lista
    const indice = Math.floor(Math.random() * dicas.length);
    const dicaSelecionada = dicas[indice];

    // Exibe o alerta na tela
    alert("💡 DICA DO MESTRE:\n" + dicaSelecionada);
});

// 5. Extra: Interatividade no Formulário
// Quando o usuário enviar o formulário, damos as boas-vindas
formOnboarding.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede a página de recarregar
    const nomeJogador = campoNome.value;
    alert(`Boa sorte na sua jornada, ${nomeJogador}! Seu treinamento começou.`);
});