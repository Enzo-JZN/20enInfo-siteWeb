<template>
  <AppHeader />
  <div class="profile-page">
    <h2>Update Your Profile</h2>

    <form @submit.prevent="updateProfile" class="profile-form">
      <label for="currentPassword">Current Password</label>
      <input type="password" id="currentPassword" v-model="currentPassword" required>

      <label for="firstName">First Name</label>
      <input type="text" id="firstName" v-model="firstName" required>

      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" v-model="lastName" required>

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>

      <label for="newPassword">New Password</label>
      <input type="password" id="newPassword" v-model="newPassword" required minlength="6">

      <label for="occupation">Occupation</label>
      <input type="text" id="occupation" v-model="occupation" placeholder="student efrei / student">

      <span v-if="error" class="error">{{ error }}</span>

      <button type="submit" class="confirm-btn">Confirm</button>
    </form>

    <button @click="deleteAccount" class="delete-btn">Delete Account</button>
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/HeaderLogin.vue';
import AppFooter from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: 'UpdateProfile',
  components: { AppHeader, AppFooter },
  data() {
    return {
      currentPassword: '',
      firstName: '',
      lastName: '',
      email: '',
      newPassword: '',
      occupation: '',
      error: '',
    }
  },
  mounted() {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        this.currentUser = JSON.parse(storedUser);
      } catch (e) {
        console.error("Erreur parsing user:", e);
        this.currentUser = null;
      }
    }
  },
  methods: {
    async updateProfile() {
      try {
        console.log("Updating profile...");

        let response = await axios.put("http://localhost:3000/updateprofile", {
          email: this.email,          // email actuel
          currentPassword: this.currentPassword, // mot de passe actuel
          newFirstName: this.firstName,      // nouveau prénom
          newLastName: this.lastName,        // nouveau nom
          newPassword: this.newPassword,        // nouveau mot de passe, peut être vide
          newOccupation: this.occupation       // nouveau mot de passe, peut être vide
        });

        console.log(response);

        if (response.data.success === true) {
          alert("Profile updated successfully!");
          this.$router.push('/login'); // ou autre route
        } else {
          this.error = response.data.message || "Update failed.";
        }
      } catch (err) {
        console.error(err);
        this.error = "Server error. Please try again later.";
      }
    },

    async deleteAccount() {
      const confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone!");
      if (!confirmDelete) return;

      try {
        console.log(`delete account ${this.currentUser.email}`);
        // currentUserEmail = this.currentUser.email
        const response = await axios.delete("http://localhost:3000/deleteaccount", { 
          data : 
          { 
            email: this.currentUser.email, 
          }
        });
        alert(response.data.message);

        if (response.status === 200) {
          this.$router.push('/login');
        }
      } catch (err) {
        console.error(err);
        alert("Server error while deleting account.");
      }
    }
  }
}
</script>

<style scoped>
.profile-page {
  font-family: Arial, sans-serif;
  margin: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.profile-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.profile-form {
  display: flex;
  flex-direction: column;
}

.profile-form label {
  margin-top: 15px;
}

.profile-form input {
  padding: 8px;
  margin-top: 5px;
  font-size: 16px;
}

.confirm-btn {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background 0.3s;
}

.confirm-btn:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.delete-btn {
  background-color: red;
  color: white;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s;
}

.delete-btn:hover {
  background-color: darkred;
}
</style>
