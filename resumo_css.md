# Resumo de CSS - Projeto AlémDoXeque ♟️

## O que é CSS e por que usar arquivo externo?
O CSS serve para dar estilo ao HTML (cores, fontes, tamanhos). Usamos o arquivo externo (`style.css`) porque ele mantém o código organizado: o HTML cuida do conteúdo e o CSS cuida da aparência, facilitando a manutenção de várias páginas ao mesmo tempo.

## Glossário de Propriedades
* **color:** Altera a cor do texto.
* **background-color:** Define a cor de fundo de um elemento.
* **margin:** Cria espaço *fora* do elemento (afasta um do outro).
* **padding:** Cria espaço *dentro* do elemento (entre o conteúdo e a borda).
* **display: flex:** Alinha os elementos de forma flexível (lado a lado ou centralizado).

## O Poder das Classes
As **classes** (ex: `<div class="status-usuario">`) servem como "etiquetas". Elas permitem que eu escolha exatamente qual elemento quero estilizar no CSS sem afetar o restante do site. No CSS, usamos um ponto antes do nome: `.status-usuario { ... }`.