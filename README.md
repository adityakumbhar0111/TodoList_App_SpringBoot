# 📝 Todo Task Management Application

A full-stack **Todo Task Management Application** built using **Spring Boot (REST API)** and **React.js**.
This application allows users to **create, update, delete, and mark tasks as completed** with a clean UI and real-time updates.

---

# 🚀 Features

* ➕ Add new tasks
* ✏️ Update existing tasks
* ❌ Delete tasks
* ✅ Mark tasks as **Completed**
* 📅 Task date management
* 🔄 Real-time UI updates
* 🎯 Strike-through effect for completed tasks
* 📢 Popup notifications for actions

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Axios
* HTML5
* CSS3

## Backend

* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate

## Database

* MySQL

---

# 📂 Project Structure

```
Todo-Application
│
├── backend (Spring Boot)
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── application.properties
│
└── frontend (React)
    ├── components
    ├── App.js
    ├── UserTask.js
    ├── App.css
    └── package.json
```

---

# ⚙️ Backend Setup (Spring Boot)

### 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/todo-app.git
```

### 2️⃣ Open Project

Open the backend project in **Spring Tool Suite/Eclipse / IntelliJ / VS Code**

### 3️⃣ Configure Database

Update `application.properties`

```
spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 4️⃣ Run Application

Run the Spring Boot application.

Server will start on:

```
http://localhost:8080
```

---

# 📡 REST API Endpoints

| Method | Endpoint                       | Description        |
| ------ | ------------------------------ | ------------------ |
| GET    | `/get-task`                    | Get all tasks      |
| POST   | `/add-task`                    | Add new task       |
| PUT    | `/update-task/{id}`            | Update task        |
| DELETE | `/delete-task/{id}`            | Delete task        |
| PATCH  | `/update-status/{id}/{status}` | Update task status |

---

# 🎨 Frontend Setup (React)

### 1️⃣ Navigate to Frontend

```
cd frontend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run React App

```
npm start
```

Application runs on:

```
http://localhost:3000
```

---

# 📷 Application Workflow

```
User Adds Task
      ↓
Task Stored in Database
      ↓
React Fetches Tasks
      ↓
User Can Update/Delete
      ↓
User Marks Task Completed
      ↓
Strike-through Applied in UI
```

---

# 💡 Future Improvements

* 🔐 User Authentication (JWT)
* 🌙 Dark Mode UI
* 📊 Task Progress Dashboard
* 🧠 Smart Task Reminders
* 📱 Mobile Responsive Design

---

# 👨‍💻 Author

Developed by **Aditya Kumbhar**

---

# ⭐ Support

If you like this project, please **give it a star ⭐ on GitHub**.
