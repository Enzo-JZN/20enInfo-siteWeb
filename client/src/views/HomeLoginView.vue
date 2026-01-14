<template>
  <AppHeader />
  <div class="home-login-page">


    <div class="container">
      <div class="title">EFREI Computer Science Help L1</div>
      <p class="intro-text">
        Welcome! Click on a chapter below to access the exercises and resources.
      </p>

      
      <div class="grid">
        <div
          v-for="chapter in chapters"
          :key="chapter.name"
          class="card"
          :class="{ locked: chapter.locked }"
          @click="goToChapter(chapter)"
        >
          <div class="card-icon">
            <img :src="chapter.icon" :alt="chapter.name" />
          </div>
          <div class="card-name">{{ chapter.name }}</div>
          <div v-if="user && user.occupation.toLowerCase() === 'admin'" class="admin-controls">
            <button @click.stop="setModuleStatus(chapter, 1)" class="btn-activate">Activate</button>
            <button @click.stop="setModuleStatus(chapter, 0)" class="btn-disable">Disable</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/HeaderLogin.vue';
import AppFooter from '@/components/Footer.vue';
import lockIcon from '@/assets/lock.png';
import cIcon from '@/assets/c.png';
import javaIcon from '@/assets/java.png';
import pythonIcon from '@/assets/python.png';
import stdIcon from '@/assets/algorithms.png';
import axios from 'axios';

export default {
  name: "HomeLoginView",
  components: { AppHeader, AppFooter },
  data() {
    return {
      user: null,
      chapters: []
    };
  },
  async mounted() {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      try {
        this.user = JSON.parse(storedUser);
      } catch (e) {
        console.error("Erreur parsing user:", e);
        this.user = null;
      }
    } else {
      this.user = null;
    }

    // Charger les modules depuis la base
    const response = await axios.get('http://localhost:3000/modules');
    this.chapters = response.data.map(mod => ({
      name: mod.name,
      icon: this.getIcon(mod.name),
      active: mod.active,
      locked: false
    }));

    // Vérifier verrouillage pour étudiants
    this.chapters.forEach(chap => {
      if (!this.user) chap.locked = true;
      else if (this.user.occupation.toLowerCase() !== 'admin') {
        if (chap.active === 0) chap.locked = true;               // module désactivé
        else if (chap.name !== "Python" && this.user.occupation.toLowerCase() !== "efrei student") {
          chap.locked = true;                                     // étudiant non EFREI
          chap.icon = lockIcon;
        }
      }
    });
  },
  methods: {
    getIcon(name) {
      switch(name) {
        case 'C': return cIcon;
        case 'Java': return javaIcon;
        case 'Python': return pythonIcon;
        case 'STD': return stdIcon;
        default: return lockIcon;
      }
    },
    goToChapter(chapter) {
      if (chapter.locked) {
        alert("You must be a student of EFREI to access this chapter!");
        return;
      }
      this.$router.push(`/${chapter.name.toLowerCase()}`);
    },
      async setModuleStatus(chapter, status) {
      try {
        await axios.put(`http://localhost:3000/module/${chapter.id}`, { active: status, name: chapter.name });
        chapter.active = status;
        chapter.locked = status === 0;  // tous les étudiants sont bloqués si désactivé
        alert(`Module ${chapter.name} is now ${status === 1 ? 'active' : 'disabled'}`);
      } catch (err) {
        console.error(err);
        alert("Error updating module status");
      }
    }
  }
};
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
  max-width: 700px;
  color: #f0f0f0;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  padding: 15px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.card.locked {
  cursor: not-allowed;
  opacity: 0.6;
}

.card-icon img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
}

.card-name {
  font-weight: bold;
  text-align: center;
  font-size: 0.9em;
}

.admin-controls {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.admin-controls button {
  padding: 8px 16px;
  font-size: 0.9em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s, box-shadow 0.3s;
  font-weight: bold;
  backdrop-filter: blur(5px);
}

.btn-activate {
  background: rgba(40, 167, 69, 0.85); /* vert */
  color: #fff;
  box-shadow: 0 4px 10px rgba(40, 167, 69, 0.4);
}

.btn-activate:hover {
  background: rgba(40, 167, 69, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(40, 167, 69, 0.5);
}

.btn-disable {
  background: rgba(220, 53, 69, 0.85); /* rouge */
  color: #fff;
  box-shadow: 0 4px 10px rgba(220, 53, 69, 0.4);
}

.btn-disable:hover {
  background: rgba(220, 53, 69, 1);
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(220, 53, 69, 0.5);
}

</style>
