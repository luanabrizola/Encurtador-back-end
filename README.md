# 🔗 Encurtador de Links (Back-end)

O back-end do Encurtador de Links é responsável por criar, armazenar e gerenciar links encurtados, registrar estatísticas de visualizações e fornecer APIs para edição, exclusão e compartilhamento de links.

## 🚀 Tecnologias Utilizadas

* [Fastify](https://www.fastify.io/) – Framework web rápido.
* [Node.js](https://nodejs.org/en) – Ambiente de execução JavaScript do servidor.
* [PostgreSQL (Neon)](https://console.neon.tech/)  - Banco de dados relacional online.
* [dotenv](https://www.npmjs.com/package/dotenv) – Gerenciamento de variáveis de ambiente.
* [Drizzle ORM](https://orm.drizzle.team/) – ORM para interagir com o banco de dados de forma tipada e segura.

## 🌐 Link da Aplicação

> **Back-end:** Hospedado no [Render](https://render.com/): [https://encurtador-back-endd.onrender.com](https://encurtador-back-endd.onrender.com)

O back-end da aplicação está hospedado no Render e disponibiliza a API pública para criação, edição, exclusão e redirecionamento de links encurtados. Esse link permite que o front-end ou qualquer cliente faça requisições HTTP diretamente à API, sem necessidade de rodar o servidor localmente.


## 📁 Estrutura do Projeto

```
Encurtador-back-end/
│
├── drizzle/
├── src/
|    ├──infra/
|    |    ├──db/
|    |    |    schema.js
|    |    database.js
|    ├──modules/
|    |    ├──links/
|    |    |    link.controller.js
|    |    |    link.repository.js
|    |    |    link.routes.js
|    |    |    link.service.js
|    server.js
├── node_modules/
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

### 🔧 Instalação

1. Clone o repositório:

```
git clone https://github.com/luanabrizola/Encurtador-back-end.git
cd Encurtador-back-end
```

2. Instale as dependências:

```
npm install
```

3. Configure o .env:
- Crie um arquivo .env na raiz com as variáveis necessárias para conexão com o banco de dados e porta do servidor. Você pode usar o arquivo .env.example como modelo.

- Crie um banco de dados em [Neon](https://neon.com/). Depois de criado, copie a URL de conexão com seu banco de dados na variável de ambiente URL. Por exemplo:
```
DATABASE_URL="postgresql://usuario:senha@endereco-do-banco/nome-do-banco?sslmode=require&channel_binding=require"
PORT=3333
```

## ⚙️ Executando o servidor

Execute o servidor:
```
npm start
```

## ✒️ Autores

- Ana Julia Defendi - @defendii: Responsável pelo desenvolvimento do banco de dados com Drizzle e repositório de links, além de validação de URLs.
- Ana Julia Menegasso - @AnaMenegasso: Responsável pela implementação da lógica de serviços CRUD, rotas, gerar alfanuméricos e contagem de cliques.
- Luana Rodrigues Brizola - @luanabrizola: Responsável pelo desenvolvimento do controller e integração com front-end.
