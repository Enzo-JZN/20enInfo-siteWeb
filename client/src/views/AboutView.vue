<template>

  <AppHeader />

  <div class="home-login-page">
    <div class="container">

      <h1 class="title">About 20enInfo</h1>

      <p class="intro-text">
        DC is an application designed to help EFREI students train and improve their programming skills.
      </p>

      <div class="info-section">
        <h2>Our Mission</h2>
        <p>
          The application provides a modern learning platform allowing students to practice various programming languages
          such as <strong>C</strong>, <strong>Python</strong>, and <strong>Java</strong> through interactive exercises and modules.
        </p>

        <h2>Access for EFREI Students</h2>
        <p>
          EFREI students have full access to all modules, exercises, and continuous assessments available on the platform.
        </p>

        <h2>Access for External Users</h2>
        <p>
          Users who are not EFREI students can only access one module. Full access requires authentication as an EFREI student.
        </p>

        <h2>Login Required</h2>
        <p>
          To ensure personalized tracking and proper access management, logging in is required to access the training modules.
        </p>
      </div>

    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';

export default {
  name: 'AboutView',
  components: {
    AppHeader,
  }
}
</script>

<style scoped>
.home-login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1181cb 0%, #87aff4 100%);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Container */
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 160px 80px;
  text-align: center;
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

.intro-text {
  font-size: 1.1em;
  margin-bottom: 40px;
  max-width: 800px;
  color: #f0f0f0;
  line-height: 1.6em;
}

/* Section des infos */
.info-section {
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  padding: 30px;
  border-radius: 15px;
  max-width: 850px;
  text-align: left;
  font-size: 1em;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

.info-section h2 {
  margin-bottom: 15px;
  font-size: 1.6em;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
}

.info-section p {
  margin-bottom: 15px;
  color: #f0f0f0;
  line-height: 1.5em;
}
</style>
