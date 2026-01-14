<template>
  <header class="site-header">
    <div class="header-content">
      <div class="site-title">20<span class="highlight">en</span>Info</div>
        <nav>
          <a href="#" @click.prevent="$router.push('/')">Home</a>
          <a href="#" @click.prevent="$router.push('/about')">About</a>
          <button class="login-btn" @click="onLogin">Sign in</button>
        </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader', // nom multi-word pour ESLint
  methods: {
    onLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.site-header {
  border-bottom: 3px solid #005dfe;
  background-color: rgb(185, 218, 249);
  padding: 15px 30px;

}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-title {
  font-size: 1.8em;
  font-weight: bold;
  color: #021a44;
}

nav {
  display: flex;
  align-items: center;
  gap: 10px;
}

nav a {
  color: #0077ff;
  text-decoration: none;
  margin-left: 25px;
  font-weight: 500;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s;
}

nav a:hover {
  color: #ff4b5c;
}

.login-btn {
  background-color: #f00018;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  transition: background 0.3s, transform 0.2s;
}

.login-btn:hover {
  background-color: #e1a9a9;
  transform: translateY(-2px);
}

.site-title {
  font-size: 2em;
  font-weight: 900;
  color: #021a44;
  font-family: 'Poppins', 'Helvetica Neue', sans-serif; /* moderne et lisible */
  letter-spacing: 1px;
}

.site-title .highlight {
  color: #0077ff; /* mettre “en” en couleur différente pour le style */
  font-style: italic;
}
</style>
