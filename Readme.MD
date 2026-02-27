# 🤖 AI Text Summarizer & Sentiment Analyzer

A Node.js backend application that allows users to register, log in, and analyze text using Hugging Face models for **summarization** and **sentiment analysis**. Built with **Node.js, Express.js, Sequelize, PostgreSQL**, and integrates with the **Hugging Face Inference API**.

---

## ✨ Features

- User registration and login with **JWT authentication**
- Analyze text for:
  - **Summarization**
  - **Sentiment analysis** (positive / neutral / negative)
- Stores analyses in **PostgreSQL** per user
- Docker-ready for deployment (optional)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | PostgreSQL, Sequelize ORM |
| Authentication | JWT (JSON Web Tokens) |
| AI Integration | Hugging Face Inference API |
| Security | bcryptjs |
| Environment | dotenv |
| Dev Tools | nodemon, CORS |

---

## 📦 Packages Used

```
express
cors
sequelize
pg
pg-hstore
bcryptjs
jsonwebtoken
dotenv
@huggingface/inference
nodemon
```

---

## 📁 Project Structure

```
ai-text-backend/
│
├── config/
│   └── db.js                   # Sequelize DB instance
│
├── controllers/
│   ├── authController.js       # Register/Login logic
│   └── analysisController.js   # Hugging Face AI analysis logic
│
├── middleware/
│   └── auth.js                 # JWT authentication middleware
│
├── models/
│   ├── userModel.js            # User model
│   └── analysisModel.js        # Analysis model
│
├── routes/
│   ├── auth.js                 # Auth routes (register/login)
│   └── analysis.js             # Analysis routes (summarize/sentiment)
│
├── migrations/
│   ├── <timestamp>-create-users-table.js
│   └── <timestamp>-create-analyses-table.js
│
├── .env                        # Environment variables
├── index.js                    # App entry point
├── package.json
└── README.md
```

---

## 🚀 Installation

**1. Clone the repository**

```bash
git clone https://github.com/mohamedhamdhy/ai-js-text-summarize
cd ai-text-backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Setup `.env` file**

```env
PORT=5000
DB_NAME=db_name
DB_USER=db_username
DB_PASSWORD=db_password
DB_HOST=localhost
DB_DIALECT=db_dialect
JWT_SECRET=supersecretkey
HF_API_KEY=hf_your_huggingface_api_key
```

**4. Run migrations**

```bash
npx sequelize-cli db:migrate
```

**5. Start the server**

```bash
npx nodemon index.js
```

Server will be running at **http://localhost:5000**

---

## 📡 API Endpoints

### Auth

POST | `/api/auth/register

POST | `/api/auth/login

### Analysis

POST | `/api/analysis

---

## 📝 Notes

- Hugging Face free plan has **rate limits** — avoid spamming API requests.
- Passwords are hashed using **bcryptjs** for security.
- JWT tokens expire in **1 hour** by default.

---

## 🐳 Docker (Optional)

**Build the image:**

```bash
docker build -t ai-text-backend .
```

**Run the container:**

```bash
docker run -p 5000:5000 --env-file .env ai-text-backend
```

---
