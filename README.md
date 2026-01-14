# 🚀 DevManager API

API REST desenvolvida em **Node.js + Express**, com autenticação **JWT**, integração com **Supabase**, upload de imagens e rotas protegidas para gerenciamento de produtos.

Projeto criado com foco em **boas práticas**, **segurança** e **portfólio para vaga júnior**.

---

## 🧠 Funcionalidades

- ✅ Autenticação de administrador (login)
- 🔐 Autorização com JWT
- 🧱 Middleware de rotas protegidas
- 📦 CRUD de produtos
- 🖼️ Upload de imagens com Supabase Storage
- 🌐 API REST pronta para consumo no frontend
- 📄 Organização em controllers, routes e middlewares

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- Supabase (Database + Storage)
- JWT (jsonwebtoken)
- bcryptjs
- Multer
- dotenv
- cors

---

## 📁 Estrutura do Projeto

```

backend/
├─ src/
│  ├─ controllers/
│  │   ├─ authController.js
│  │   ├─ productController.js
│  │   └─ uploadController.js
│  ├─ routes/
│  │   ├─ authRoutes.js
│  │   ├─ productRoutes.js
│  │   └─ uploadRoutes.js
│  ├─ middleware/
│  │   └─ auth.js
│  ├─ config/
│  │   ├─ supabase.js
│  │   └─ upload.js
│  └─ server.js
├─ .env
├─ package.json

```

---

## 🔐 Autenticação

A API utiliza **JWT** para autenticação.

### 🔹 Login
```

POST /auth/login

```

Retorna um token JWT que deve ser usado nas rotas protegidas.

### 🔹 Header necessário
```

Authorization: Bearer SEU_TOKEN

```

---

## 📦 Rotas Principais

### 🔓 Públicas
- `GET /products` → Lista produtos
- `POST /auth/login` → Login do admin

### 🔒 Protegidas (JWT)
- `POST /products` → Criar produto
- `PUT /products/:id` → Atualizar produto
- `DELETE /products/:id` → Remover produto
- `POST /upload` → Upload de imagem

---

## 🖼️ Upload de Imagens

As imagens são enviadas para o **Supabase Storage** e a URL pública é retornada para ser salva no produto.

```

POST /upload

````

Body:
- `form-data`
- key: `image`
- type: File

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do backend:

```env
PORT=3333
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
JWT_SECRET=your_secret_key
````

⚠️ **Nunca subir o `.env` para o GitHub**.

---

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```

A API estará disponível em:

```
http://localhost:3333
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Praticar arquitetura backend
* Aplicar autenticação segura
* Criar um sistema real de gerenciamento
* Servir como **projeto de portfólio para vagas júnior**

---

## 👩‍💻 Desenvolvedora

**Rayca Rafaelle**
🔗 GitHub: [https://github.com/raycapmbmgc](https://github.com/raycapmbmgc)
🔗 Portfólio: [https://potfolio-raycarafaelle.netlify.app/](https://potfolio-raycarafaelle.netlify.app/)

---

⭐ Se você gostou do projeto, deixe uma estrela!

```


