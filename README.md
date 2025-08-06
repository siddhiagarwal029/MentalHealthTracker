# 🧠 MindMate : A Mental Health Tracker Web App

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/siddhiagarwal029/MentalHealthTracker)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)](#)
[![Tech Stack](https://img.shields.io/badge/Tech-React%20%7C%20Node.js%20%7C%20MongoDB-blue)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📝 Overview

MentalHealthTracker is a modern AI-powered journaling app that helps users track their moods, visualize trends, and receive AI-generated insights for their mental well-being. Inspired by apps like **MindDoc** & **eMoods**, but with your own ✨personal touch✨.

---

## 🚀 Features

* 🗒️ **Daily Journal Entries**
* 🧠 **Mood Prediction AI (BERT-powered)**
* 📈 **Visual Mood Analytics Dashboard**
* 🔐 **Secure User Authentication**
* 🌸 **Pastel Glassmorphism UI Design**

---

## 🛠 Tech Stack

| Frontend                   | Backend           | Database | AI/ML                |
| -------------------------- | ----------------- | -------- | -------------------- |
| React + Vite + TailwindCSS | Node.js + Express | MongoDB  | BERT Mood Classifier |

---

## 📂 Folder Structure

```
MentalHealthTracker/
├── client/       # React Frontend
└── server/       # Express Backend + API
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/siddhiagarwal029/MentalHealthTracker.git
cd MentalHealthTracker
```

### 2. Setup Backend

```bash
cd server
npm install
# Create a .env file with MONGO_URI & PORT variables
npm start
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| GET    | /api/test       | Test Route             |
| POST   | /api/moods      | Add a Mood Entry       |
| GET    | /api/moods      | Fetch All Mood Entries |
| DELETE | /api/moods/\:id | Delete a Mood Entry    |

---

## ✨ Future Enhancements

* AI-based Coping Mechanism Suggestions.
* OAuth Google Login.
* Admin Dashboard for Mood Insights.
* Real-time Chat with AI Counselor.

---

## 🤝 Contributions

Open to PRs & collaborations. Fork it, build something cool, and raise a PR!

---

## 📜 License

This project is licensed under MIT License.

---

## 👩‍💻 Creator

Made with 💙 by [**Siddhi Agarwal**](https://github.com/siddhiagarwal029)

---
