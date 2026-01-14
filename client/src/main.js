// Import Vue's function to create a new application
import { createApp } from 'vue'

// Import the root component of the application
import App from './App.vue'

// Import the Vue Router configuration (all your app routes)
import router from './router'

// Create the Vue application using the root component "App"
// Add the router to enable page navigation
// Mount the application inside the HTML element <div id="app">
createApp(App).use(router).mount('#app')
