/* controller.js — Lógica de negócio | AlémDoXeque */

const Controller = {
    // Cria e persiste um novo usuário
    criarUsuario(nome, nivel) {
        const jogador = {
            nome: nome.trim(),
            nivel,
            elo: 800,
            progresso: 0,
            criadoEm: new Date().toISOString()
        };
        DB.salvarUsuario(jogador);
        return jogador;
    },

    // Verifica resposta de puzzle e atualiza ELO
    verificarResposta(respostaDigitada, respostaCorreta) {
        const acertou = respostaDigitada.trim().toLowerCase() === respostaCorreta.toLowerCase();
        const delta = acertou ? +10 : -5;

        DB.atualizarUsuario({
            progresso: (DB.carregarUsuario().progresso || 0) + (acertou ? 1 : 0),
            elo: Math.max(0, (DB.carregarUsuario().elo || 800) + delta)
        });

        return acertou;
    },

    // Simula análise de posição (placeholder para futura engine)
    analisarPosicao() {
        const avaliacoes = ["+0.5", "+1.2", "-0.3", "+2.0", "0.0"];
        return avaliacoes[Math.floor(Math.random() * avaliacoes.length)];
    }
};
