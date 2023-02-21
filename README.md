# ClimaBR

Aplicação web para consulta da previsão do tempo de cidades brasileiras.

# Como utilizar?

Há duas maneiras de preparar o ambiente para utilização da aplicação *ClimaBR*, a saber:

* **Com container (Docker + VSCode)**: Instale o [Docker](https://docs.docker.com/engine/) em seu computador. Depois, instale a extensão [Remote Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) no VSCode; ou
* **Sem container**: Instale o [Node.js](https://nodejs.org/en/), preferencialmente a versão LTS, em seu computador.

> A opção **Com container (Docker + VSCode)** é recomendada, a fim de se evitar problemas de incompatibilidade entre versões de bibliotecas e *frameworks*.


Uma vez preparado o ambiente, clone este repositório e abra a pasta do projeto em sua IDE favorita. Caso tenha preparado seu ambiente utilizando a opção *Com container (Docker + VSCode)*, ao abrir a pasta do projeto no VSCode, ele irá pedir autorização para executar o container. Autorize-o! 

Execute o comando abaixo para instalar as dependências do projeto:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `key` para a sua chave de API):

```ts
export const openWeatherConfig = {
    key: '<sua-chave-de-api>',
    URL: 'https://api.openweathermap.org/data/2.5/onecall',
    iconURL: 'http://openweathermap.org/img/wn',
}
```

Para executar a aplicação, digite o comando abaixo no terminal:

`ionic serve`

Enjoy!