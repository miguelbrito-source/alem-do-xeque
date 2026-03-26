/* DB.JS - NEURAL DATABASE CORE */

const DB_NAME = 'AlemDoXequeDB';
const DB_VERSION = 1;
const STORE_NAME = 'jogadores';

// Iniciar o Banco de Dados
async function iniciarDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject('Erro ao abrir banco');
    });
}

// Adicionar Item (Salvar Jogador)
async function adicionarItem(item) {
    const db = await iniciarDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.add(item);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject('Erro ao salvar dado');
    });
}

// Buscar Todos os Itens
async function buscarItens() {
    const db = await iniciarDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject('Erro ao buscar dados');
    });
}