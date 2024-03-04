Projeto de React usando a API Rick and Morty para entrega de trabalho da pós graduação em Web desenvolvimento full stack da Unipê

* Aluna: Alessandra Gonçalves
* Gmail: alessandra.vgs0@gmail.com
* Pages do projeto: https://alessandravgs.github.io/rick-and-morty-project

## Descrição

Desafio PROJETO RICK AND MORTY API, desenvolvido para obtenção de nota na pós graduação em Desenvolvimento de Aplicações Web na disciplina de Arquitetura Front-end.

### API
https://rickandmortyapi.com/

### Requisitos
<p>Criar cabeçalho com um menu para a <b>lista de Personagens, Episódios e Localização</b></p>

### > lista de personagens
Cada card de personagem deve exibir:
* Nome do personagem;
* Foto do personagem;
* Status do personagem;
* Espécie do personagem;
* Localização do personagem;
* schema: https://rickandmortyapi.com/documentation/#character-schema.

**Comportamento esperado:**
<p>Ao clicar em um card na listagem de personagens o usuário deve ser redirecionado para a página de detalhamento do personagem clicado.</p>

#### Página de detalhamento do personagem
**Deve ser exibida as seguintes informações na página detalhamento:**
* Nome do personagem;
* Foto do personagem;
* Status do personagem;
* Espécie do personagem;
* Origem do personagem;
* Localização do personagem;
* lista com o nome dos episódios no qual o personagem aparece.
* schema: https://rickandmortyapi.com/documentation/#character-schema

**Comportamento esperado:**
<p>Ao clicar em qualquer item da lista episódios usuário deve ser redirecionado para a página de detalhamento do episódio clicado.</p>

### > Página de lista de episódios
**Cada card de episódios deve exibir:**
* Nome do Episódio
* Data de estreia
* schema:https://rickandmortyapi.com/documentation/#episode-schema

**Comportamento esperado:**
<p>Ao clicar em um card na listagem de episódios o usuário deve ser redirecionado para a página de detalhamento do episódio clicado.</p>

#### Página de Detalhamento do episódio
**Deve ser exibida as seguintes informações no detalhamento de cada episódio:**
* Nome do Episódio;
* Data de estreia;
* Lista de personagens que estão no episódio;
* Para cada item da Lista de personagem deve ter nome, foto e link para o detalhamento do personagem.
* schema: https://rickandmortyapi.com/documentation/#episode-schema

**Comportamento esperado:**
<p>Ao clicar em qualquer item da lista personagens usuário deve ser redirecionado para a página de detalhamento do personagem clicado.</p>

#### Página de lista de localização
**Cada card de localização deve exibir:**
* Nome da localização 
* Tipo da localização 
* Dimensão da Localização
* schema: https://rickandmortyapi.com/documentation/#location-schema

**Comportamento esperado:**
<p>Ao clicar em um card na listagem de localização o usuário deve ser redirecionado para a página de detalhamento da localização clicada.</p>

#### Página de Detalhamento da localização
**Deve ser exibida as seguintes informações no detalhamento de cada localização:**
* Nome da localização 
* Tipo da localização 
* Dimensão da Localização
* Lista de personagens que residem nessa localização
* Para cada item da lista de personagem deve ter nome, foto e link para o detalhamento do personagem.
* schema: https://rickandmortyapi.com/documentation/#location-schema
**Comportamento esperado:**
<p>Ao clicar em qualquer item da lista personagens usuário deve ser redirecionado para a página de detalhamento do personagem clicado.</p>

### Importante
#### Adicionais não obrigatórios
<p>Paginação para a listagem de Personagens, Episódios e Localizações.</p>
