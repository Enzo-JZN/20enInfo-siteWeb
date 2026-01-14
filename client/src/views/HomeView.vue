<template>
  <AppHeader />
  <div class="home-page">
    

    <!-- Main Content -->
    <div class="container" id="home">
      <div class="title">EFREI Computer Science Help L1</div>
      <p class="intro-text">
        Welcome to <strong>20enInfo</strong>! This site is designed to help you improve your computer science skills and succeed in your continuous assessments. 
        Explore the platform and start enhancing your knowledge step by step.
      </p>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1181cb 0%, #87aff4 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

.intro-text {
  text-align: center;
  margin: 0 auto;
  max-width: 700px;
  font-size: 1.1em;
  line-height: 1.6em;
  color: #f0f0f0;
}
</style>
