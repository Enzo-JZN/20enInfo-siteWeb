<template>
  <AppHeader />
  <div class="c-page">

    <div class="container">
        <div class="title">C</div>

        <div class="cc-list">
          <div class="cc-item" @click="goTo('CCC1')">CC1 C</div>
          <div class="cc-item" @click="goTo('CCC2')">CC2 C</div>
          <div class="cc-item" @click="goTo('CCC3')">CC3 C</div>
        </div>

        <button class="back-btn" @click="$router.push('/HomeLogin')">Back</button>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/HeaderLogin.vue';
import AppFooter from '@/components/Footer.vue';



export default {
  name: "CView",
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    goTo(subject) {
      this.$router.push(`/${subject}`);
    }
  }
};
</script>

<style scoped>
.c-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1181cb 0%, #87aff4 100%);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Header */
.site-header {
  border-bottom: 3px solid #2575fc;
  background-color: rgba(255,255,255,0.05);
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
  color: #fff;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-left: 25px;
  font-weight: 500;
  transition: color 0.3s;
}

nav a:hover {
  color: #ff4b5c;
}

/* Container */
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
}

.title {
  font-size: 2.5em;
  margin-bottom: 30px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

/* CC List */
.cc-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;
}

.cc-item {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px 25px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.cc-item:hover {
  transform: translateY(-5px) scale(1.02);
  background: rgba(255, 255, 255, 0.35);
}

/* Back button */
.back-btn {
  padding: 12px 30px;
  background-color: #ff4b5c;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;
}

.back-btn:hover {
  background-color: #e04352;
  transform: translateY(-3px);
}

/* Footer */
.site-footer {
  text-align: center;
  padding: 20px;
  background-color: rgba(0,0,0,0.2);
  border-top: 3px solid #2575fc;
  margin-top: 50px;
  color: #fff;
}
</style>
