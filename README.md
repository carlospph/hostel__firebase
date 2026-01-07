# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🏨 Hostel API - Sistema de Gestão de Reservas

Este projeto é uma API RESTful desenvolvida para gerenciar os processos de um hostel, desde o cadastro de hóspedes até o controle dinâmico de agendamentos.

---

## 🚀 Elevando para API Profissional

O projeto foi estruturado utilizando **Node.js** e **Express**, focando em uma arquitetura limpa e escalável. A lógica foi dividida em rotas especializadas para garantir a organização do código:

### 👥 Domínio de Usuários (Hóspedes)
* **Gestão Completa:** Endpoints para criação, leitura, atualização e exclusão (CRUD).
* **Validação de Esquemas:** Uso de `Mongoose Schemas` com validação de tipos, campos obrigatórios e `enums` para padronização de dados (ex: gênero).
* **Segurança de Dados:** Preparado para integração com criptografia de senhas e proteção de campos sensíveis.

### 📅 Domínio de Agendamentos (Reservas)
* **Relacionamento Dinâmico:** Implementação de vínculos entre coleções usando `ObjectIds` e a função `ref` do Mongoose, permitindo associar cada reserva a um usuário sem duplicar dados no banco.
* **Persistência Temporal:** Ativação de `timestamps` para controle automático de auditoria (data de criação e última modificação).

---

## ☁️ Conexão Dinâmica com MongoDB Atlas

Para tornar o sistema robusto e pronto para produção, a API utiliza o **MongoDB Atlas** como solução de banco de dados em nuvem.



* **Escalabilidade Cloud:** A aplicação não depende de um ambiente local, permitindo que os dados sejam acessados de forma segura por diferentes instâncias do servidor.
* **Segurança via Variáveis de Ambiente:** O uso da biblioteca `dotenv` garante que a string de conexão (URI) e as credenciais de acesso fiquem protegidas em um arquivo `.env`, seguindo as melhores práticas de segurança (ignorado pelo Git).
* **Alta Disponibilidade:** Garantia de persistência dos dados com backups e monitoramento em tempo real fornecidos pela infraestrutura em nuvem.

---

## 🛠️ Tecnologias e Ferramentas

* **Runtime:** Node.js (v18+)
* **Framework:** Express.js
* **ODM:** Mongoose
* **Banco de Dados:** MongoDB Atlas (NoSQL)
* **Integração:** CORS e Dotenv
* **Ferramenta de Testes:** Insomnia / Postman

---

## 📋 Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o arquivo `.env` com sua `MONGODB_URI`.
4. Inicie o servidor: `npm start`.
