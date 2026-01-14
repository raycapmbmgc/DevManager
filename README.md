# DevManager - Backend

API para gerenciamento de produtos com autenticação de admin.

## 🚀 Funcionalidades

- Registro e login de admin (JWT)
- CRUD de produtos:
  - Criar produto
  - Editar produto
  - Excluir produto
  - Arquivar / desarquivar produto
- Rotas protegidas para admin

## 🛠 Tecnologias

- Node.js
- Express
- Supabase (banco de dados)
- JWT para autenticação

## ⚙️ Variáveis de ambiente


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
🔗 Portfólio: [https://potfolio-raycarafaelle.vercel.app/](https://potfolio-raycarafaelle.vercel.app/)/)

---

⭐ Se você gostou do projeto, deixe uma estrela!

```


