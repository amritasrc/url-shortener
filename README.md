# 🔗 URL Shortener

A simple full-stack URL Shortener built with **React, Node.js, Express, and MongoDB**.

Enter a long URL, generate a unique short URL, and copy it with one click.

> 🚧 This project is currently not hosted and runs locally.

## ✨ Features

* 🔗 Shorten long URLs
* 📋 Copy shortened URL
* ⚡ Generate unique short IDs using `nanoid`
* 🗄️ Store URLs in MongoDB

## 🛠️ Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose

## 🚀 Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:8001
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Make sure **MongoDB is running locally**.

## 📌 How It Works

```text
Enter URL
    ↓
React → Express API
    ↓
Generate Short ID
    ↓
Store in MongoDB
    ↓
Display Short URL
    ↓
Copy & Share
```

## 👩‍💻 Author

**Amrita**

Built while learning and practicing **MERN stack development**.
