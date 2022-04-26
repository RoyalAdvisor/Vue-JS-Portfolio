<template>
  <section id="projects-page">
    <div class="project-heading">
      <h1>MY PROJECTS</h1>
    </div>
    <div v-if="loading">
      <div class="loading">
        <Loader />
      </div>
    </div>
    <div class="project-container" v-if="projects">
      <div class="card" v-for="project in projects" :key="project._id">
        <img :src="project.image" :alt="project.title" class="image" />
        <div class="content">
          <h3>{{ project.title }}</h3>
          <h4>{{ project.stack }}</h4>
          <div class="buttons">
            <a :href="project.source" class="button" target="_blank">Source</a>
            <a :href="project.live" class="button" target="_blank">Live</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Loader from "./Loader.vue";
const baseURL = "https://vue-port-api.herokuapp.com/";
export default {
  name: "Projects",
  components: {
    Splide,
    SplideSlide,
    Loader,
  },
  data() {
    return {
      projects: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    fetch(`${baseURL}projects`)
      .then((res) => res.json())
      .then((data) => {
        this.projects = data;
        this.loading = false;
      })
      .catch((err) => console.error(err.message));
  },
};
</script>

<style scoped>
/* PROJECTS-SECTION */
#projects-page {
  width: 100%;
  margin: 0;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 94, 247, 1) 17.8%,
    rgba(2, 245, 255, 1) 100.2%
  );
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.project-heading h1 {
  font-weight: 900;
  font-size: 28px;
  color: #fff;
  text-align: center;
  padding: 0;
  margin-top: 5rem;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 5rem;
  border-radius: 5px;
  gap: 1rem;
}
.loading {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  position: relative;
  border-radius: 5px;
  height: auto;
  width: 32.45%;
}
.image {
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s all;
  border-radius: 5px;
}
.content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  line-height: 1.8;
}
.content h3,
h4 {
  margin: 0;
}
.content h3 {
  font-size: 25px;
}
.content h4 {
  font-size: 18px;
}
.buttons {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
}
.button {
  text-decoration: none;
  color: #1f1f1f;
  font-weight: 600;
  min-width: 80px;
  background-color: rgba(2, 245, 255, 1);
  text-align: center;
  border-radius: 5px;
  font-size: 12px;
  transition: 0.5s all;
  padding: 5px;
}
.button:hover {
  background-color: rgba(255, 94, 247, 1);
  color: #fff;
  border-radius: 25px;
}
.card:hover .content {
  opacity: 1;
}
@media only screen and (max-width: 1100px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 5rem;
    background: none;
  }
  .card {
    width: 100%;
  }
  .project-heading h1 {
    font-weight: 900;
    margin-top: 5rem;
    margin-bottom: 0;
    text-align: center;
  }
  .project-heading {
    width: 100%;
    padding: 0;
  }
}
@media only screen and (max-width: 770px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    margin-top: 0;
    margin-bottom: 5rem;
    background: none;
  }
  .card {
    width: 100%;
  }
  .project-heading h1 {
    font-weight: 900;
    margin-bottom: 3rem;
    margin-top: 5rem;
    text-align: center;
  }
  .button {
    padding: 5px;
  }
  .project-heading {
    width: 100%;
    padding: 0;
  }
}
@media only screen and (max-width: 576px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    margin-top: 0;
    margin-bottom: 5rem;
    background: none;
  }
  .project-heading h1 {
    font-weight: 900;
    margin-top: 5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  .button {
    padding: 5px;
  }
}
</style>
