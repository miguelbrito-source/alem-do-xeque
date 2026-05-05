/* db.js — Camada de dados | AlémDoXeque */

const DB = {
    // Posição inicial padrão — linha 8 (pretas) até linha 1 (brancas)
    // Maiúsculas = brancas, minúsculas = pretas, null = vazio
    posicaoInicial: [
        ['r','n','b','q','k','b','n','r'],
        ['p','p','p','p','p','p','p','p'],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        ['P','P','P','P','P','P','P','P'],
        ['R','N','B','Q','K','B','N','R']
    ],

    // Código → símbolo Unicode
    pecas: {
        'K':'♔','Q':'♕','R':'♖','B':'♗','N':'♘','P':'♙',
        'k':'♚','q':'♛','r':'♜','b':'♝','n':'♞','p':'♟'
    },

    puzzles: [
        { pergunta: "Mate em 1: Torre em h8, Rei preto em g8. Qual o lance?", resposta: "Th8#" },
        { pergunta: "Ganhe material: Dama pode capturar peça solta em g7. Qual o lance?", resposta: "Dxg7" },
        { pergunta: "Mate em 1: Cavalo em f7, Rei preto em h8. Qual o lance?", resposta: "Cf7#" }
    ],

    // Salva o jogador no localStorage
    salvarUsuario(jogador) {
        localStorage.setItem('alem_usuario', JSON.stringify(jogador));
    },

    // Retorna o jogador salvo ou null
    carregarUsuario() {
        const dados = localStorage.getItem('alem_usuario');
        return dados ? JSON.parse(dados) : null;
    },

    // Atualiza campos específicos do jogador salvo
    atualizarUsuario(campos) {
        const atual = this.carregarUsuario();
        if (!atual) return;
        this.salvarUsuario({ ...atual, ...campos });
    },

    // Retorna um puzzle aleatório
    getPuzzleAleatorio() {
        return this.puzzles[Math.floor(Math.random() * this.puzzles.length)];
    }
};
