Project Name
This project is a web application designed to help EFREI students improve and achieve better grades in computer science. It is aimed at first-year (L1) students and provides access to past continuous assessments (CCs) that usually take place every few weeks.

Table of Contents
Project Context
Database Setup
User Roles
Running the Application
Application Features
Launch backEnd and FrontEnd

Project Context
The application displays the different computer science subjects on the home page. Subjects include:
Python
Data Structures
Java
C

Clicking on a subject loads a new page where students can access multiple continuous assessments (CCs) for that subject. Initially, there will be three or more CCs per subject, with more added later. This allows students to practice and prepare effectively for their exams.

Database Setup
Open a MySQL database.
Adjust the environment variables to match your database settings (host, port, user, password).
Create the database and insert the values from SQL_QUERY_DB.

Note: passwords are already encrypted in the database. The real password for all users is: bbbb2005.
The database has two tables:
users
id (Primary Key)
firstName
lastName
email
password
occupation (defines access to modules)

subjects
id (Primary Key)
name
active (0 = inactive, 1 = active)

User Roles
There are three types of users:
efrei student: Access to all modules + continuous assessments
student: Access to only the Python module
admin: Access to all modules + can activate/deactivate modules for all users

users:

admin:           --> mail: bot@ai.com, password: bbbb2005
efrei student:   --> mail: enzo@mail.com, password: bbbb2005
student:         --> mail: sajin@mail.com, password: bbbb2005

Launch BackEnd et FrontEnd
Then, to launch the backend and frontend:
Go to the server and run :npm run dev, and in another terminal in the client, run: npm run serve.

After you do this, launch the http://localhost:8080/  (Local Web page) , you will arrive at the home page “Accueil” (Home). You will then need to log in or create an account to access the modules/continuous assessments of the application.

There is also an About page, which gives a bit of explanation about the app.

After logging in, you are on the homeLogin page, where the different modules are displayed. You can go inside to see the different continuous assessments, which are multiple-choice quizzes, with the answers shown at the end using a “Check Answer” feature.

Once logged in, it is also possible to change your profile, including your first name, last name, occupation and password.

Important information: We worked on macOS, so some files and directories in the node_modules folder were installed specifically for Mac. Therefore, you need to delete them and then run `npm install` again in the project root directory and in the server folder.

In the project root directory:

`rm -rf node_modules package-lock.json`
`npm install`

In the server folder:

`rm -rf node_modules package-lock.json`
`npm install`