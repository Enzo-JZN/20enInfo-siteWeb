<template>
  <AppHeader />
  <div class="login-page">


    <!-- Login Form -->
    <div class="container">
      <div class="login-card">
        <h1 class="title">Sign in</h1>
        <p class="intro-text">
          Please enter your credentials to access your account.
        </p>
        <form class="login-form" @submit.prevent="onlogin">
            <input v-model="email" type="email" placeholder="Email" required/>
            <input v-model="password" type="password" placeholder="Password" required minlength="6"/>
            <button>Login</button>
            <p v-if="error" class="error">{{ error }}</p>

            <p >
                Don't have an account?
                <a class="signup-text" @click.prevent="goToSignUp">Sign Up</a>
            </p>
        </form>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import axios from 'axios'
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';


export default {
    name: 'LoginView',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
        email : '',
        password : '',
        error : '',
    }
  },
  methods: {
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    async onlogin() {


        if (!this.isValidEmail(this.email)) {
        this.error = "Please enter a valid email address.";
        return;
        }

        if (!this.password || this.password.length < 6) {
          this.error = "Password must be at least 6 characters long.";
          return;
        }

        try {
          console.log(this.email)
          let response = await axios.post('http://localhost:3000/login', {
              login: this.email,
              password: this.password,
          })
          console.log(response)

          if (response.data.success === true) {
              alert("Login successful!");
              localStorage.setItem("user", JSON.stringify(response.data.user));
              this.$router.push('/homelogin')
          } else {
              this.error = response.data.message || "Invalid credentials."
          }
        } catch (err) {
        console.error(err);
        this.error = "Server error. Please try again later.";
        }
      },
    
    goToSignUp() {
      // Redirection vers la page d'inscription
      // Si tu utilises Vue Router :
      this.$router.push('/register');
    },
    goTo(subject) {
      this.$router.push(`/${subject}`);
    }
  }
}

</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1181cb 0%, #87aff4 100%);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Container centré */
.container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

/* Glass card pour le formulaire */
.login-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 20px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

/* Titres */
.title {
  font-size: 2em;
  margin-bottom: 15px;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.3);
}

.intro-text {
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #f0f0f0;
}

/* Formulaire */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.login-form input {
  padding: 12px 15px;
  border-radius: 10px;
  border: none;
  background: rgba(255,255,255,0.2);
  color: #fff;
  font-size: 1em;
  backdrop-filter: blur(5px);
}

.login-form input::placeholder {
  color: #eee;
}

/* Bouton Sign in */
.signup-text {
  color: blue;
  font-weight: bold;
}


.login-btn:hover {
  background-color: #e04352;
  transform: translateY(-2px);
}

.error {
    color: red;
}
</style>
