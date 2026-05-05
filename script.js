/* script.js — Interface e eventos | AlémDoXeque */

// Renderiza o tabuleiro 8x8 com peças na posição inicial
function renderizarTabuleiro() {
    const board = document.querySelector('#board');
    board.innerHTML = '';

    DB.posicaoInicial.forEach((linha, linhaIdx) => {
        linha.forEach((peca, colunaIdx) => {
            const casa = document.createElement('div');
            const clara = (linhaIdx + colunaIdx) % 2 === 0;
            casa.className = `casa ${clara ? 'casa-clara' : 'casa-escura'}`;

            if (peca) {
                const span = document.createElement('span');
                span.className = `peca ${peca === peca.toUpperCase() ? 'peca-branca' : 'peca-preta'}`;
                span.textContent = DB.pecas[peca];
                casa.appendChild(span);
            }

            board.appendChild(casa);
        });
    });
}

const UI = {
    onboarding:   document.querySelector('#onboarding'),
    mainGrid:     document.querySelector('.main-grid'),
    form:         document.querySelector('#form-onboarding'),
    inputNome:    document.querySelector('#nome'),
    inputNivel:   document.querySelector('#nivel'),
    btnOraculo:   document.querySelector('#ajuda-mestre'),
    btnPuzzle:    document.querySelector('#dica-progressiva'),
    btnSincronizar: document.querySelector('#btn-espiada'),

    // Exibe o sistema principal e esconde o onboarding
    ativarSistema(jogador) {
        this.onboarding.classList.add('hidden');
        document.body.classList.add('sistema-ativo');
        this.atualizarStatusHeader(jogador);
        renderizarTabuleiro();
        console.info(`[SISTEMA] Acesso concedido: ${jogador.nome} | ELO: ${jogador.elo}`);
    },

    // Atualiza nome/elo no header se os elementos existirem
    atualizarStatusHeader(jogador) {
        const elNome = document.querySelector('#patente');
        const elElo  = document.querySelector('#elo');
        if (elNome) elNome.textContent = jogador.nome.toUpperCase();
        if (elElo)  elElo.textContent  = jogador.elo;
    },

    // Mostra feedback inline no lugar de alert
    mostrarFeedback(mensagem, tipo = 'info') {
        let feedback = document.querySelector('#feedback-msg');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.id = 'feedback-msg';
            document.querySelector('main').prepend(feedback);
        }
        feedback.textContent = mensagem;
        feedback.className = `feedback feedback--${tipo}`;
        clearTimeout(this._feedbackTimer);
        this._feedbackTimer = setTimeout(() => feedback.remove(), 3500);
    }
};

// --- Eventos ---

// Login / onboarding
UI.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = UI.inputNome.value.trim();
    if (!nome) {
        UI.inputNome.focus();
        return;
    }

    const jogador = Controller.criarUsuario(nome, UI.inputNivel.value);
    UI.ativarSistema(jogador);
});

// Oráculo IA — dicas aleatórias
UI.btnOraculo?.addEventListener('click', () => {
    const dicas = [
        "O centro é a chave da vantagem posicional.",
        "Peças penduradas são alvos táticos primários.",
        "O roque não é apenas defesa — é conexão de torres.",
        "Desenvolva os cavalos antes dos bispos na abertura.",
        "Uma torre na 7ª fileira vale ouro no final de jogo."
    ];
    const dica = dicas[Math.floor(Math.random() * dicas.length)];
    UI.mostrarFeedback(`♟ ORÁCULO: ${dica}`, 'info');
    console.log(`%c[ORÁCULO]: ${dica}`, 'color: #81b64c; font-weight: bold;');
});

// Puzzle — solicitar bypass
UI.btnPuzzle?.addEventListener('click', () => {
    const puzzle = DB.getPuzzleAleatorio();
    const resposta = prompt(`[PUZZLE] ${puzzle.pergunta}`);
    if (resposta === null) return; // cancelou

    const acertou = Controller.verificarResposta(resposta, puzzle.resposta);
    const jogador = DB.carregarUsuario();

    if (acertou) {
        UI.mostrarFeedback(`✔ Correto! ELO: ${jogador.elo} | Progresso: ${jogador.progresso}`, 'sucesso');
    } else {
        UI.mostrarFeedback(`✘ Errado. A resposta era: ${puzzle.resposta} | ELO: ${jogador.elo}`, 'erro');
    }
});

// Sincronizar — análise de posição
UI.btnSincronizar?.addEventListener('click', () => {
    const avaliacao = Controller.analisarPosicao();
    UI.mostrarFeedback(`⚡ ANÁLISE: Avaliação da posição: ${avaliacao}`, 'info');
});

// --- Inicialização: recarrega sessão salva ---
window.addEventListener('load', () => {
    const jogador = DB.carregarUsuario();
    if (jogador) {
        UI.ativarSistema(jogador);
    }
});
