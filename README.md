# Projeto de testes realizado no site ParaBank
Neste repositório, realizei vários testes automatizados no site [Parabank](https://parabank.parasoft.com/parabank/index.htm)

Infelizmente, no decorrer da criação dos testes, descobri um site bastante instável e que por vezes se encontra com erros de conexão com o banco de dados.

Vale frisar que o site conta com uma funcionalidade que limpa todo o banco de dados. Dessa forma resolvi deixar os testes mais independentes possíveis, assim realizo o cadastro e limpeza do banco após cada teste.

## Pre-Requisitos
Realizei também a automatização dos casos de testes utilizando o Cypress.

É preciso instalar o Node.js and npm no projeto.

Eu usei a versão `v16.17.0` do Node.js e a `8.15.0` do npm (versões mais recentes neste momento). 

## Instalação
1)	Abrir o CMD
2)	Navegar até a pasta do projeto
3)	Digitar os comandos: `npm init -y` e depois `npm install cypress`

## Para rodar os testes
1)	Abrir o CMD
2)	Navegar até a pasta do projeto
3)	Abir em modo headless: `npx cypress run` ou `npm run cy:run`
4)	Abri em modo interativo: `npx cypress open` ou `npm run cy:open`
     
## Instabilidade
Devido à recorrente instabilidade, ainda está faltando a automatização da criação de conta, movimentação e consulta de movimentações.

Para dúvidas ou sugestões só enviar uma mensagem pelo [linkedin](https://www.linkedin.com/in/alexandre-silva-2297066a/)
