<template>
  <section id="projects-page">
    <div class="project-heading">
      <h1>MY PROJECTS</h1>
    </div>
    <div class="project-container">
      <Splide
        v-if="projects"
        :options="{ rewind: true }"
        class="splide-container"
      >
        <SplideSlide v-for="project of projects" :key="project.id">
          <div class="splide-item">
            <div class="splide-">
              <img
                :src="project.image"
                :alt="project.title"
                class="slider-image"
              />
            </div>
            <div class="splide-box">
              <div class="splide-content">
                <h4>{{ project.title }}</h4>
                <h5>{{ project.stack }}</h5>
              </div>
              <div class="tags">
                <a :href="project.source" target="_blank">Source</a>
                <a :href="project.live" target="_blank">Live</a>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
const baseURL = "https://nadeem-api.herokuapp.com/";
export default {
  name: "Projects",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch(`${baseURL}projects`)
      .then((res) => res.json())
      .then((data) => {
        this.projects = data;
      })
      .catch((err) => console.error(err.message));
  },
};
</script>

<style>
/* PROJECTS-SECTION */
#projects-page {
  width: 100%;
  margin: 0;
  background: linear-gradient(225deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%);
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.project-heading h1 {
  font-weight: 900;
  font-size: 35px;
  color: #fff;
  margin-top: 5rem;
  margin-bottom: 0;
  text-align: center;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

/* SLIDER */
.splide-item {
  box-shadow: 0 0 10px rgba(0, 0, 0, 15%);
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #000;
  line-height: 25px;
  margin: 20px 0;
  border-radius: 5px;
}
.slider-image {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.splide-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.splide-box {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 20px 0;
}
.splide-content h4,
h5 {
  margin: 0;
  padding: 20px;
  font-size: 1.5rem;
  color: #fff;
}
.splide-content h4 {
  margin: 0;
  padding: 20px;
  font-size: 2rem;
}
.tags {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;
  margin: 0;
}
.tags a:hover {
  background: rgba(0, 0, 0, 10%);
  border: 2px solid #ff3cac;
  box-shadow: rgba(0, 0, 0, 30%);
  color: #ff3cac;
}
.tags a {
  text-decoration: none;
  background: inherit;
  padding: 10px;
  background-color: rgba(0, 0, 0, 15%);
  border-radius: 5px;
  border: 2px solid #784ba0;
  color: #fff;
  font-weight: 600;
  font-size: medium;
  text-align: center;
  width: 120px;
  transition: 200ms ease-in-out;
  margin: 0;
}
@media only screen and (max-width: 1100px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-bottom: 5rem;
    background: none;
  }
  .project-heading h1 {
    font-weight: 900;
    font-size: 35px;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .project-heading {
    width: 100%;
    padding: 0;
  }
  .splide-item {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    width: 100%;
    line-height: 10px;
    border-radius: 5px;
  }
  .splide-content h4,
  h5 {
    margin: 0;
    padding: 20px;
    font-size: 1.3rem;
    text-align: center;
  }
  .splide-content h4 {
    font-size: 1.8rem;
  }
  .splide-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px 0;
  }
  #splide01 {
    width: 100%;
  }
  .splide__arrow--next {
    right: 0.2em;
    display: none;
  }
  .splide__arrow--prev {
    left: 0.2em;
    display: none;
  }
  .tags a:hover {
    background: rgba(0, 0, 0, 30%);
    border: 2px solid #ff3cac;
    color: #ff3cac;
  }
  .tags a {
    text-decoration: none;
    background: inherit;
    padding: 10px;
    background-color: rgba(0, 0, 0, 15%);
    border-radius: 5px;
    border: 2px solid #784ba0;
    color: #fff;
    font-weight: 600;
    font-size: medium;
    text-align: center;
    width: 120px;
    transition: 200ms ease-in-out;
    margin: 0;
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
  .project-heading h1 {
    font-weight: 900;
    font-size: 35px;
    margin-bottom: 2rem;
    margin-top: 5rem;
    text-align: center;
  }
  .project-heading {
    width: 100%;
    padding: 0;
  }
  .splide-item {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    width: 100%;
    line-height: 10px;
    border-radius: 5px;
  }
  .splide__arrow--next {
    right: 0.2em;
    display: none;
  }
  .splide__arrow--prev {
    left: 0.2em;
    display: none;
  }
}
@media only screen and (max-width: 576px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-top: 0;
    margin-bottom: 5rem;
    background: none;
  }
  .project-heading h1 {
    font-weight: 900;
    font-size: 35px;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .splide-item {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    width: 100%;
    line-height: 10px;
    border-radius: 5px;
  }
  .splide__arrow--next {
    right: 0.2em;
    display: none;
  }
  .splide__arrow--prev {
    left: 0.2em;
    display: none;
  }
  .splide-content h4,
  h5 {
    margin: 0;
    padding: 20px;
    font-size: 1rem;
    text-align: center;
  }
  .splide-content h4 {
    font-size: 1.2rem;
  }

  .tags a:hover {
    background: rgba(0, 0, 0, 30%);
    border: 2px solid #ff3cac;
    color: #ff3cac;
  }
  .tags a {
    text-decoration: none;
    background: inherit;
    padding: 10px;
    background-color: rgba(0, 0, 0, 15%);
    border-radius: 5px;
    border: 2px solid #784ba0;
    color: #fff;
    font-weight: 600;
    font-size: medium;
    text-align: center;
    width: 120px;
    transition: 200ms ease-in-out;
    margin: 0;
  }
}
</style>
