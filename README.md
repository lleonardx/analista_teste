<h1> Desafio – Analista de Teste de Software </h1>

> ![Badge em Conclusão](http://img.shields.io/static/v1?label=STATUS&message=%20CONCLUIDO&color=GREEN&style=for-the-badge)
>
<br>
<p>Parte I: Fundamentos de Teste</p>

> Criar um documento descrevendo casos de teste a serem realizados no site:
https://www.saucedemo.com/
> 
> Levantar o máximo de cenários de testes para essa aplicação.
>
> O arquivo se encontra na pasta 1-Planning, com o nome Saucedemo
> 

<br>
<p>Parte II: Execução dos Testes</p>

> Evidencias armazenadas na pasta 2-Execution.
>
> Arquivo de reporte de falhas com o nome: Falhas Encontradas
>
<br>


<p>Parte III: Automação Web</p>

> Cenário I: Realizar Login na página.
>
> Cenário II: Maior e Menor valor dos produtos.
>
> Cenário III: Realizar a compra de dois produtos.
> 
> Arquivos de código se encontram na pasta 3-Automation
<br>

<p>Configuração do Ambiente</p>

Dentro do diretorio do projeto, utilizar o seguinte comando:

```
npm init 
```
ou

```
yarn init 
```

Para criar um projeto node dentro da pasta do projeto, com as informações referente ao projeto, ao preencher 
as informações é criado o arquivo "package.json". Caso queira criar um novo projeto.

Instale o Cypress via npm (Node Package Manager):

```
npm install cypress --save-dev
```

Instale o Cypress via yarn:

```
yarn add cypress --dev
```

Abrir o Cypress para criar a estrutura básica do projeto:

usando npx:

```
npx cypress open 
```
usando yarn:
```
yarn cypress open 
```
Ao abrir a interface do Cypress, clicar em E2E, Escolher o browser de preferencia, após isso, escolher a Spec, para realizar os testes.
Realizar a execução dos testes em backgroud, ao finalziar a execução, será criada a pasta "Videos" contendo a execução dos testes. Um screenshot da tela só será mostrado caso haja uma falha durante a execução.

usando npx:

```
npx cypress run 
```
usando yarn:
```
yarn cypress run 
```

Para caso seja necessario utilizar o plugin.

O passo a passo a seguir é referente a um plugin de relatório, que mostrará um dashboard referente aos test case realizados. O passo se encontra no seguinte perfil do GitHub: https://github.com/Shelex/cypress-allure-plugin

Instalação do plugin:

usando npm:

```
npm i -D @shelex/cypress-allure-plugin 
```
usando yarn:
```
yarn add -D @shelex/cypress-allure-plugin
```

Para se utilizar o plugin, deve se acrescentar em (cypress.config.js) as seguintes informacoes:

```
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
```

E na linha após "setupNodeEvents(on, config) {"

```
  allureWriter(on, config);
  return config;
```

Acrescentar em (support/e2e.js) as seguintes informacoes:

```
require('@shelex/cypress-allure-plugin');
```

