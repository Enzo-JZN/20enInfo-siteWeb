import { createRouter, createWebHistory } from "vue-router";

// Pages principales
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import AnnalesView from "@/views/AnnalesView.vue";
import StdView from "@/views/StdView.vue";
import PythonView from "@/views/PythonView.vue";
import JavaView from "@/views/JavaView.vue";
import CView from "@/views/CView.vue";
import HomeLoginView from "@/views/HomeLoginView.vue";
import SignUpView from "@/views/SignUpView.vue";
import AboutView from "@/views/AboutView.vue";
import UpdateProfileView from "@/views/UpdateProfile.vue";

// CC Python
import PythonCC1View from "@/views/PythonCC1.vue";
import PythonCC2View from "@/views/PythonCC2.vue";
import PythonCC3View from "@/views/PythonCC3.vue";

// CC Java
import JavaCC1View from "@/views/JavaCC1.vue";
import JavaCC2View from "@/views/JavaCC2.vue";
import JavaCC3View from "@/views/JavaCC3.vue";

// CC C
import CCC1View from "@/views/CCC1.vue";
import CCC2View from "@/views/CCC2.vue";
import CCC3View from "@/views/CCC3.vue";

// CC Std
import StdCC1View from "@/views/StdCC1.vue";
import StdCC2View from "@/views/StdCC2.vue";

const routes = [
  // Accueil
  { 
    path: "/", 
    component: HomeView,
    meta: { title: "Accueil" } 
  },
    {
    path: "/homelogin", 
    component: HomeLoginView,
    meta: { title: "HomeLogin" } 
  },
    { 
    path: "/login", 
    component: LoginView,
    meta: { title: "Login" } 
  },    
    {
    path: "/register", 
    component: SignUpView,
    meta: { title: "SignUp" } 
  },

    {
    path: "/about", 
    component: AboutView,
    meta: { title: "About" } 
  },
  

    { 
    path: "/UpdateProfile", 
    component: UpdateProfileView,
    meta: { title: "Update Profile" } 
  },

  // Annales
  { 
    path: "/annales", 
    component: AnnalesView,
    meta: { title: "Annales" } 
  },

  // Std
  { 
    path: "/std", 
    component: StdView,
    meta: { title: "STD" } 
  },

  { path: "/stdcc1", component: StdCC1View, meta: { title: "STD CC1" } },
  { path: "/stdcc2", component: StdCC2View, meta: { title: "STD CC2" } },


  { 
    path: "/java", 
    component: JavaView,
    meta: { title: "Java" } 
  },

  { path: "/JavaCC1", component: JavaCC1View, meta: { title: "Java CC1" } },
  { path: "/JavaCC2", component: JavaCC2View, meta: { title: "Java CC2" } },
  { path: "/JavaCC3", component: JavaCC3View, meta: { title: "Java CC3" } }, 

  { 
    path: "/c", 
    component: CView,
    meta: { title: "C" } 
  },

  { path: "/CCC1", component: CCC1View, meta: { title: "C CC1" } },
  { path: "/CCC2", component: CCC2View, meta: { title: "C CC2" } },
  { path: "/CCC3", component: CCC3View, meta: { title: "C CC3" } }, 

  // Python
  { 
    path: "/python", 
    component: PythonView,
    meta: { title: "Python" } 
  },

  
  { path: "/pythoncc1", component: PythonCC1View, meta: { title: "Python CC1" } },
  { path: "/pythoncc2", component: PythonCC2View, meta: { title: "Python CC2" } },
  { path: "/pythoncc3", component: PythonCC3View, meta: { title: "Python CC3" } }, 


];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "20enInfo";
  next();
});

export default router;
