<template>
  <AppHeader />
  <div class="signup-page">
    <div class="signup-container">
      <h1>Sign Up</h1>
      <input type="text" v-model="firstname" placeholder="First Name" required/>
      <input type="text" v-model="lastname" placeholder="Last Name" required/>
      <input type="email" v-model="email" placeholder="Email" required/>
      <input type="password" v-model="password" placeholder="Password" required minlength="6"/>
      <input type="text" v-model="occupation" placeholder="Occupation" required />
      <button @click="register">Sign Up</button>
      <p class="login-text">
        Already have an account?
        <a @click.prevent="$router.push('/login')" href="#">Login</a>
      </p>
      <p class="message">{{ message }}</p>
    </div>
    <AppFooter />
  </div>
</template>


<script> /*
export default {
  name: "SignupPage",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async register() {
      if (!this.firstname || !this.lastname || !this.email || !this.password) {
        this.message = "Please fill in all fields.";
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            password: this.password,
          }),
        });

        const data = await res.json();

        if (data.error) {
          this.message = data.error;
        } else {
          this.message = data.message;
          // Reset form
          this.firstname = "";
          this.lastname = "";
          this.email = "";
          this.password = "";
          // Redirect to login
          this.$router.push("/login");
        }
      } catch (err) {
        console.error(err);
        this.message = "Error connecting to server.";
      }
    },
  },
}; */


import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import axios from 'axios';

export default {
  name: "SignupPage",
  components: { AppHeader, AppFooter },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      occupation: "",
      message: "",
    };
  },
  methods: {
    isValidEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    },
    async register() {
      // Validation simple
      if (!this.firstname || !this.lastname || !this.email || !this.password || !this.occupation) {
        this.message = "Please fill in all fields.";
        return;
      }

            // Validation email
      if (!this.isValidEmail(this.email)) {
        this.message = "Please enter a valid email address.";
        return;
      }

      // Validation password
      if (this.password.length < 6) {
        this.message = "Password must be at least 6 characters.";
        return;
      }

      try {
        // POST avec axios
        const response = await axios.post("http://localhost:3000/register", {
          firstName: this.firstname,
          lastName: this.lastname,
          email: this.email,
          password: this.password,
          occupation: this.occupation,
        });

        const data = response.data;

        if (data.error) {
          this.message = data.error;
        } else {
          this.message = data.message || "Registration successful!";

          // Reset du formulaire
          this.firstname = "";
          this.lastname = "";
          this.email = "";
          this.password = "";
          this.occupation = "";
          
          // Redirection vers login
          this.$router.push("/login");

        }
      } catch (err) {
        console.error(err);
        if (err.response && err.response.data && err.response.data.error) {
          this.message = err.response.data.error;
        } else {
          this.message = "Error connecting to server.";
        }
      }
    },
  },
};
</script>




<style scoped>

signup-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1181cb 0%, #87aff4 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
}


.signup-container {
  max-width: 400px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

input {
  width: 90%;
  margin: 10px auto;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  display: block;
  font-size: 1em;
}

button {
  padding: 10px 20px;
  background: #007BFF;
  color: white;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

.login-text {
  margin-top: 15px;
  font-size: 14px;
}

.login-text a {
  color: #007BFF;
  text-decoration: underline;
  cursor: pointer;
}

.message {
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
