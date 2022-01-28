<template>
  <Navbar />
  <Landing />
  <About />
  <Projects />
  <Testimonials />
  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Landing from "./components/Landing.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Landing,
    About,
    Projects,
    Navbar,
    Testimonials,
    Footer,
  },
};
</script>

<style></style>
