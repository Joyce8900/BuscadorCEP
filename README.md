# Buscador de CEP

Este é um buscador de CEP simples desenvolvido em React, que utiliza a API [ViaCEP](https://viacep.com.br/) para obter informações sobre um determinado CEP.

## Funcionalidades

- Permite ao usuário inserir um CEP no campo de entrada.
- Ao clicar no botão de busca, as informações relacionadas ao CEP são recuperadas da API ViaCEP e exibidas na tela.
- Caso o CEP seja inválido ou não exista, uma mensagem de erro será exibida.

## Pré-requisitos

Para executar este aplicativo, você precisará ter o Node.js instalado em seu ambiente de desenvolvimento.

## Como executar

1. Clone este repositório em sua máquina local.
2. No diretório raiz do projeto, execute o seguinte comando para instalar as dependências:
   
    ` npm install `
  


4. Após a instalação das dependências, execute o aplicativo com o comando:

    `npm run dev`

4. Abra seu navegador e acesse `http://localhost:3000` para visualizar o aplicativo em execução.

## Estrutura do Projeto

- `src/App.js`: Contém o código-fonte do aplicativo.
- `src/App.css`: Arquivo de estilo para o aplicativo.
- `src/services/api.js`: Configuração da instância do axios para fazer chamadas à API ViaCEP.

## Como usar

1. Insira um CEP válido no campo de entrada.
2. Clique no botão de busca.
3. As informações relacionadas ao CEP serão exibidas abaixo do campo de entrada, incluindo a rua, bairro, cidade, estado e DDD.

## Tecnologias Utilizadas

- React
- React Icons
- Axios

