# 🎓 EFREI Computer Science Helper

## 📌 Project Name
This project is a **web application designed to help EFREI students improve and achieve better grades in computer science**.  
It is primarily aimed at **first-year (L1) students** and provides access to **past continuous assessments (CCs)** that usually take place every few weeks.

---

## 📑 Table of Contents
- Project Context  
- Database Setup  
- User Roles  
- Application Features  
- Launch Backend and Frontend  
- Important Information  

---

## 🧠 Project Context
The application displays the different **computer science subjects** on the home page, including:

- Python  
- Data Structures  
- Java  
- C  

Clicking on a subject loads a dedicated page where students can access **multiple continuous assessments (CCs)** for that subject.

- Each subject initially contains **three or more CCs**
- Additional CCs can be added later
- CCs are presented as **multiple-choice quizzes**
- Answers are revealed at the end using a **“Check Answer”** feature

This allows students to **practice regularly** and **prepare effectively for exams**.

---

## 🗄️ Database Setup
1. Open a **MySQL database**
2. Adjust the environment variables to match your database configuration:
   - host  
   - port  
   - user  
   - password  
3. Create the database and insert the values from `SQL_QUERY_DB`

### 🔐 Password Information
- Passwords are **already encrypted** in the database
- The real password for all users is:  
  **`bbbb2005`**

### 📊 Database Structure
The database contains **two tables**:

#### `users`
- `id` (Primary Key)
- `firstName`
- `lastName`
- `email`
- `password`
- `occupation` (defines access to modules)

#### `subjects`
- `id` (Primary Key)
- `name`
- `active` (0 = inactive, 1 = active)

---

## 👥 User Roles
There are **three types of users**:

### 👨‍🎓 efrei student
- Access to **all modules**
- Access to **all continuous assessments**

### 👤 student
- Access to **Python module only**

### 🛠️ admin
- Access to **all modules**
- Can **activate / deactivate modules** for all users

### 🔑 Test Accounts
| Role | Email | Password |
|-----|------|---------|
| admin | bot@ai.com | bbbb2005 |
| efrei student | enzo@mail.com | bbbb2005 |
| student | sajin@mail.com | bbbb2005 |

---

## ✨ Application Features
- User authentication (login & account creation)
- Role-based access control
- Interactive multiple-choice quizzes
- Answer validation with “Check Answer”
- Profile management:
  - First name
  - Last name
  - Occupation
  - Password
- About page explaining the project

---

## 🚀 Launch Backend and Frontend

### Start the application
1. In the **server** folder:
   ```bash
   npm run dev
