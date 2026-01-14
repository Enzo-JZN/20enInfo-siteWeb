<template>
  <header class="site-header">
    <div class="header-content">
      <div class="site-title">20enInfo</div>
      <nav>
        <a @click.prevent="$router.push('/homelogin')">Home</a>
        <a @click.prevent="$router.push('/about')">About</a>
        <button class="login-btn" @click="onOut">Sign out</button>
        <a @click.prevent="$router.push('/UpdateProfile')">Update Profil</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    onOut() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.site-header {
  border-bottom: 3px solid #005dfe;
  background-color: rgba(69, 162, 249, 0.3); /* fond semi-transparent */
  backdrop-filter: blur(5px);
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
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
  gap: 40px; /* espacement plus grand entre les liens et le bouton */
}

nav a {
  color: #0077ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;
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
</style>
