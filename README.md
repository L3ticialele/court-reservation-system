# 🏖 Sistema de Agendamento - Dunas Beach (Backend)

API REST desenvolvida para gerenciamento de agendamentos de quadras esportivas, com autenticação JWT, controle de permissões por perfil de usuário e integração com PostgreSQL.

Este projeto foi construído com foco em organização arquitetural, segurança e boas práticas de versionamento.

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* PostgreSQL
* JSON Web Token (JWT)
* Dotenv
* Arquitetura em camadas (Controllers, Services, Routes, Middlewares)

---

## 🧠 Arquitetura

O projeto segue o padrão de separação de responsabilidades:

* **Controllers** → Recebem requisições e retornam respostas
* **Services** → Contêm a regra de negócio
* **Routes** → Definição dos endpoints
* **Middlewares** → Autenticação e controle de permissões

Essa estrutura facilita manutenção, escalabilidade e testes.

---

## 🔐 Funcionalidades Implementadas

* Cadastro de usuários
* Autenticação com geração de token JWT
* Middleware de proteção de rotas
* Controle de acesso baseado em perfil (ex: admin, operador)
* CRUD de agendamentos
* Relatórios com filtro por período
* Uso de variáveis de ambiente para proteção do segredo JWT

---

## 🗄 Banco de Dados

Banco utilizado: **PostgreSQL**

A aplicação realiza conexão com banco relacional para:

* Armazenamento de usuários
* Registro de agendamentos
* Consulta de relatórios

---

## ⚙️ Como Executar o Projeto Localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/SEU_USUARIO/sistema-quadra-backend.git
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
PORT=3000
JWT_SECRET=sua_chave_secreta
DATABASE_URL=sua_string_de_conexao_postgresql
```

### 4️⃣ Iniciar o servidor

```bash
npm run dev
```

Servidor rodando em:

```
http://localhost:3000
```

---

## 📌 Endpoints Principais

| Método | Rota          | Descrição                |
| ------ | ------------- | ------------------------ |
| POST   | /auth/login   | Autenticação de usuário  |
| POST   | /usuarios     | Cadastro de usuário      |
| GET    | /agendamentos | Listagem de agendamentos |
| POST   | /agendamentos | Criação de agendamento   |

*(Os endpoints protegidos exigem token JWT no header Authorization)*

---

## 📈 Diferenciais Técnicos

* Organização profissional de commits (Conventional Commits)
* Uso de branch `develop` para desenvolvimento
* Controle de permissões baseado em roles
* Separação clara entre camada de negócio e controle
* Aplicação de boas práticas de segurança

---

## 👩‍💻 Desenvolvido por

Letícia Ferreira Pinto
Estudante de Engenharia de Software - Una
Técnica em Informática - Cefet-MG

Projeto desenvolvido com foco em aprendizado prático de backend, autenticação e organização arquitetural.
