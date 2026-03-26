/* CONTROLLER.JS - INTERFACE CONTROL UNIT */

const form = document.querySelector('#form-onboarding');
const inputNome = document.querySelector('#nome');
const inputNivel = document.querySelector('#nivel');
const displayNome = document.querySelector('#patente');

// Escutar o envio do formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const dadosJogador = {
        nome: inputNome.value,
        nivel: inputNivel.value,
        elo: 1200, // Valor inicial padrão
        timestamp: new Date().toISOString()
    };

    try {
        // Envia para o mini-framework no db.js
        await adicionarItem(dadosJogador);
        console.log("💾 Sincronização Neural Concluída!");
        
        // Atualiza a interface (DOM)
        displayNome.innerHTML = `<i class="fas fa-chess-king"></i> ${dadosJogador.nome.toUpperCase()}`;
        
        alert("CONEXÃO ESTABELECIDA: Dados salvos no núcleo local.");
        listarNoConsole();
    } catch (erro) {
        console.error("❌ Falha na gravação de dados:", erro);
    }
});

// Função para listar os dados salvos no console para conferência
async function listarNoConsole() {
    const jogadores = await buscarItens();
    console.table(jogadores);
}

// Carregar o último nome salvo ao abrir a página
window.addEventListener('load', async () => {
    const lista = await buscarItens();
    if (lista.length > 0) {
        const ultimo = lista[lista.length - 1];
        displayNome.innerHTML = `<i class="fas fa-chess-king"></i> ${ultimo.nome.toUpperCase()}`;
        document.querySelector('#elo').textContent = ultimo.elo;
    }
});