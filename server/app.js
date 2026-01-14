require('dotenv').config()
const express = require('express')
const bcrypt = require("bcrypt");
const cors = require('cors') // // Security middleware
const db = require('./models/index.js') 

const app = express()
const port = process.env.PORT || 3000

// Middlewares
app.use(cors())     // Allow frontend to communicate with backend
app.use(express.json())     // Parse JSON request bodies

// Test route
app.get('/', (req, res) => {
    res.json({ message: 'Backend Express + SQL opérationnel ✔️' })
})

app.post('/test', (req, res) => {
    let body = req.body
    console.log(`Login recu: ${body.login}`)
    res.json({ message: 'un post' })
})

// get users
app.get('/users', async (req, res) => {
    let body = req.body
    const rows = await db.users.findAll({ raw: true })
    res.json({ users: rows })
})

console.log("Model list Sequelize :", db);

// Login Route
app.post('/login', async (req, res) => {
    let body = req.body
    let login = body.login
    let password = body.password

    try {
        // Cherche l'utilisateur par email
        const found = await db.users.findOne({ where: { email: login } });

        if (!found) {
            return res.json({ message: 'Username/password not found', success: false });
        }

        // Compare le mot de passe en clair avec le hash stocké
        const match = await bcrypt.compare(password, found.password);

        if (match) {
            const userData = {
                id: found.id,
                firstName: found.firstName,
                lastName: found.lastName,
                email: found.email,
                occupation: found.occupation
            };
            res.json({ message: 'User found', success: true, user: userData });
        } else {
            res.json({ message: 'Username/password not found', success: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error server', success: false });
    }
});

// REGISTER Route
app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, occupation} = req.body;

    const existing = await db.users.findOne({ where: { email } });
    if (existing) return res.status(400).json({ error: "Email déjà utilisé" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.users.create({ firstName, lastName, email, password: hashedPassword, occupation });

    res.json({ message: "Registration successful !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error server" });
  }
});

const axios = require('axios')

// UPDATE PROFILE Route
app.put('/updateprofile', async (req, res) => {
  try {
    const {
          email,          // email actuel
          currentPassword, // mot de passe actuel
          newFirstName,      // nouveau prénom
          newLastName,        // nouveau nom
          newPassword,        // nouveau mot de passe, peut être vide
          newOccupation,        // nouveau mot de passe, peut être vide
        } = req.body;

    // Find user by email
    const user = await db.users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ success: false, message: "Incorrect email address" });
    }

    // Check current password
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ success: false, message: "Incorrect password" });
    }

    // If password was changed
    if (newPassword!==currentPassword) {
      const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      updatedFields.password = hashedNewPassword;
    }

    // Prepare updated fields
    const updatedFields = {};

    if (newFirstName && newFirstName.trim() !== '') {
      updatedFields.firstName = newFirstName.trim();
    }
    if (newLastName && newLastName.trim() !== '') {
      updatedFields.lastName = newLastName.trim();
    }
    if (newOccupation && newOccupation.trim() !== '') {
      updatedFields.occupation = newOccupation.trim();
    }

    // Update DB
    await user.update(updatedFields);

    res.json({ success: true, message: "Profile successfully updated !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error server" });
  }
});

// DELETE ACCOUNT Route
app.delete('/deleteaccount', async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await db.users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Delete user
    await user.destroy();

    res.json({ success: true, message: "Account successfully deleted !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error server" });
  }
});

// GET /modules Routes
app.get("/modules", async (req, res) => {
  try {
    const modules = await db.subjects.findAll(); // récupère tous les modules
    res.json(modules); // [{id, name, active}, ...]
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error server" });
  }
});

// PUT /module/:id Routes
app.put("/module/:id", async (req, res) => {
  const { id } = req.params;
  const { active, name } = req.body;

  if (active !== 0 && active !== 1) {
    return res.status(400).json({ success: false, message: "Invalid active value" });
  }

  try {
    const module = await db.subjects.findOne({ where: { name } });
    if (!module) return res.status(404).json({ success: false, message: "Module not found" });
    res.json(module);

    await module.update({ active });
    res.json({ success: true, message: `Module ${module.name} updated (${active ? 'active' : 'disabled'})` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error server" });
  }
});


// Database Initialization + Server Start
async function initialize() {
    // let resultat = await axios.post('http://localhost:3000/test', { login: 'enzo' })
    try {
        await db.myConnection.authenticate()

        /*db.sequelize.authenticate().then(() => {
            console.log('Connecté à MySQL avec Sequelize ✔️')
        })*/

        console.log(`Database connection established.`)
    } catch (err) {
        console.error('Unable to connect to MySQL :', err)
        return false
    }

     // Sync DB models
    await db.myConnection.sync()

    // Start server
    app.listen(port, async () => {
        console.log(`Server launched on http://localhost:${port}`)
    })
}

initialize()
