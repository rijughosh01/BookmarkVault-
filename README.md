# 📚 BookmarkVault

**BookmarkVault** is a modern, secure, and beautifully simple web app for saving, organizing, and accessing all your favorite websites in one place. Whether you’re a student, professional, or lifelong learner, BookmarkVault helps you never lose track of important links again.

---

## ✨ Features

- **Quick Save:** Instantly save any website with a single click.
- **Smart Search:** Find bookmarks fast with powerful search and filtering.
- **Organized Collections:** Categorize and describe your bookmarks for easy management.
- **Cross-Device Sync:** Access your bookmarks from any device, anytime.
- **Secure & Private:** Your data is encrypted and accessible only to you.
- **Modern UI:** Enjoy a clean, responsive, and intuitive interface.
- **Edit & Delete:** Update or remove bookmarks anytime, from any device.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/rijughosh01/BookmarkVault-
cd BookmarkVault
```

### 2. Setup the Server

```bash
cd server
npm install
# Create a .env file with your MongoDB URI and JWT secret
cp .env.example .env
# Edit .env and set:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
npm start
```

### 3. Setup the Client

```bash
cd ../client
npm install
# Create a .env file and set your backend API URL
cp .env.example .env
# Edit .env and set:
# REACT_APP_API_URL=http://localhost:5000/api
npm start
```

The client will run at [http://localhost:3000](http://localhost:3000) and the server at [http://localhost:5000](http://localhost:5000).

---

## 🖥️ Project Structure

```
BookmarkVault/
├── client/   # React frontend (Tailwind CSS)
│   ├── src/
│   ├── public/
│   └── ...
├── server/   # Express backend (MongoDB, JWT)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
```

---

## 🛡️ Security

- Passwords are hashed with bcrypt.
- JWT authentication for all API routes.
- Bookmarks are private to each user.

---

## 📱 Responsive Design

BookmarkVault is fully responsive and works beautifully on desktop, tablet, and mobile devices.

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Inspiration

BookmarkVault was built to help you organize your digital world, making it easy to save, search, and revisit the web’s best content—anytime, anywhere.

---
