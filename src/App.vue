<template>
  <Navbar />
  <Landing />
  <About />
  <Projects />
  <Resume />
  <Testimonials />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Resume from "./components/Resume.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "./components/Footer.vue";
import BNav from "./components/BNav.vue";

export default {
  name: "App",
  components: {
    Landing,
    About,
    Projects,
    Resume,
    Navbar,
    Testimonials,
    Footer,
    BNav,
  },
};
</script>

<style>
* {
  scroll-behavior: smooth;
}
body {
  font-family: "Poppins", sans-serif;
}
</style>
