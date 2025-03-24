# Sorteador de Amigo Secreto

## Introdução

Este repositório contém o código JavaScript para um sorteador de amigo secreto. O projeto permite que os usuários insiram nomes de participantes e realiza o sorteio dos pares de forma aleatória, garantindo que cada pessoa seja atribuída a outra de forma única. O foco principal deste trabalho foi criar a lógica JavaScript necessária para permitir a entrada de nomes, o sorteio aleatório e a exibição dos resultados.

## Funcionalidades Principais

* **Entrada de Nomes:** O código captura os nomes inseridos pelo usuário no campo "Nome do amigo" e os adiciona a uma lista de participantes.
* **Validação de Nomes:** Antes de adicionar um nome, o código verifica se o campo está vazio e se o nome já foi inserido, garantindo que não haja nomes duplicados ou entradas vazias.
* **Sorteio Aleatório:** A função `sortear()` utiliza o algoritmo Fisher-Yates para embaralhar a lista de participantes e garantir um sorteio justo e aleatório.
* **Geração de Pares:** O código gera os pares de amigo secreto, atribuindo cada pessoa à próxima na lista (e a última à primeira).
* **Interface do Usuário:** O código interage com o HTML para exibir os nomes dos participantes e os pares de amigo secreto.
* **Reinicialização:** O código permite que o usuário reinicie o sorteio, limpando a lista de participantes e os resultados exibidos.

## Conceitos de JavaScript Utilizados

* **Arrays:** O array `amigos` armazena os nomes dos participantes, permitindo adicionar, remover e embaralhar os nomes.
* **Funções:** As funções `adicionar()`, `sortear()`, `embaralha()` e `reiniciar()` encapsulam a lógica do sorteio, tornando o código modular e reutilizável.
* **Estruturas de Repetição for:** Utilizadas para iterar sobre o array de participantes e gerar os pares de amigo secreto.
* **if/else:** Utilizado para validar as entradas do usuário e controlar o fluxo do programa.
* **textContent e innerHTML:** Utilizados para atualizar o conteúdo da página HTML com os nomes dos participantes e os resultados do sorteio.
* **includes():** Verifica se um array contém um determinado elemento, evitando a duplicação de nomes.
* **Math.random() e Math.floor():** Utilizados para gerar números aleatórios e embaralhar a lista de participantes.

## Como Funciona

1.  **Entrada de Nomes:** O usuário insere os nomes dos participantes no campo "Nome do amigo" e clica em "Adicionar".
2.  **Validação:** O código verifica se os nomes são válidos e únicos.
3.  **Sorteio:** O usuário clica em "Sortear" para iniciar o sorteio.
4.  **Geração de Pares:** O código embaralha a lista de participantes e gera os pares de amigo secreto.
5.  **Exibição dos Resultados:** Os pares de amigo secreto são exibidos na página HTML.
6.  **Reinicialização:** O usuário pode clicar em "Reiniciar" para limpar a lista e os resultados.
