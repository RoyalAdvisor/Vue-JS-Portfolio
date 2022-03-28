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
        <SplideSlide
          v-for="project of projects"
          :key="project.id"
          class="SplideSlide"
        >
          <div class="splide-image">
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
  margin: 5rem 0;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 5px;
}

/* SLIDER */
.splide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.SplideSlide {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 30px;
}
#splide01 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
}
.splide-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
}
.splide-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
}
.splide-box {
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 20px 0;
  gap: 1rem;
}
.slider-image {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.splide-content h5 {
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
}
.splide-content h4 {
  color: #fff;
  margin: 0;
  padding: 0;
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
  background: rgba(255, 94, 247, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border-radius: 5px;
  color: #fff;
}
.tags a {
  text-decoration: none;
  background: inherit;
  padding: 10px;
  background: rgba(2, 245, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18.5px);
  -webkit-backdrop-filter: blur(18.5px);
  border-radius: 5px;
  color: #1f1f1f;
  font-weight: 600;
  font-size: medium;
  text-align: center;
  width: 120px;
  transition: 500ms all;
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
  #splide01 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .splide-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .splide-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }
  .splide-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px 0;
    gap: 1rem;
  }
  .slider-image {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .splide-content h4,
  h5 {
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
    text-align: center;
  }
  .splide-content h4 {
    font-size: 1.8rem;
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
    background: rgba(255, 94, 247, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    border-radius: 5px;
    color: #fff;
  }
  .tags a {
    text-decoration: none;
    background: inherit;
    padding: 10px;
    background: rgba(2, 245, 255, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    border-radius: 5px;
    color: #1f1f1f;
    font-weight: 600;
    font-size: medium;
    text-align: center;
    width: 120px;
    transition: 500ms all;
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
  #splide01 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .splide-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .splide-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }
  .splide-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px 0;
    gap: 1rem;
  }
  .slider-image {
    width: 100%;
    object-fit: cover;
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
  .SplideSlide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 20px;
  }
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
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  #splide01 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .splide-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .splide-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }
  .splide-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 20px 0;
    gap: 1rem;
  }
  .slider-image {
    width: 100%;
    object-fit: cover;
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
  .splide-content h5 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    text-align: center;
  }
  .splide-content h4 {
    font-size: 1.2rem;
  }
  .tags a:hover {
    background: rgba(255, 94, 247, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    border-radius: 5px;
    color: #fff;
  }
  .tags a {
    text-decoration: none;
    background: inherit;
    padding: 5px;
    background: rgba(2, 245, 255, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    border-radius: 5px;
    color: #1f1f1f;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    width: 100px;
    transition: 500ms all;
    margin: 0;
  }
}
</style>
