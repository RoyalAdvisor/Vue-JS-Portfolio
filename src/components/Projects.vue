<template>
  <section id="projects-page">
    <div class="project-heading">
      <h1>MY PROJECTS</h1>
    </div>
    <div class="project-container">
      <Splide :options="{ rewind: true }" class="splide-container">
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project1-min.png"
              alt="Sample 1"
              class="slider-image"
            />
            <h2>CRUD System</h2>
            <h3>Made with HTML / CSS / JS</h3>
            <a
              href="https://github.com/RoyalAdvisor/CRUD-Systerm"
              target="_blank"
              >Source Code</a
            >
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project2-min.png"
              alt="Sample 2"
              class="slider-image"
            />
            <h2>Airwalkers E-Commerce</h2>
            <h3>Made with HTML / CSS / Bootstrap</h3>
            <a
              href="https://github.com/RoyalAdvisor/Bootstrap-Practice"
              target="_blank"
              >Source Code</a
            >
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project3-min.png"
              alt="Sample 3"
              class="slider-image"
            />
            <h2>Mock Portfolio</h2>
            <h3>Made with HTML / CSS / Bootstrap</h3>
            <a
              href="https://github.com/RoyalAdvisor/Updated-Portfolio"
              target="_blank"
              >Source Code</a
            >
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project4-min.png"
              alt="Sample 4"
              class="slider-image"
            />
            <h2>Simple JS Calculator</h2>
            <h3>Made with HTML / CSS / JS</h3>
            <a
              href="https://github.com/RoyalAdvisor/Basic-Calculator"
              target="_blank"
              >Source Code</a
            >
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project5-min.png"
              alt="Sample 5"
              class="slider-image"
            />
            <h2>BMI JS Calculator</h2>
            <h3>Made with HTML / CSS / JS</h3>

            <a
              href="https://github.com/RoyalAdvisor/BMI-Calculator"
              target="_blank"
              >Source Code</a
            >
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    };
  },
  components: {
    Splide,
    SplideSlide,
  },
};
</script>

<style>
/* PROJECTS-SECTION */
* {
  box-sizing: border-box;
}
#projects-page {
  width: 100%;
  background: linear-gradient(to right, #fdfc47, #24fe41);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.project-heading h1 {
  font-weight: 900;
  font-size: 35px;
  color: #000;
  margin-top: 5rem;
  text-align: center;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 5rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

/* SLIDER */
.splide-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  margin: 2rem;
  line-height: 25px;
}
.slider-image {
  width: 70%;
  border-radius: 10px;
}
.splide-item a {
  text-decoration: none;
  background: inherit;
  padding: 15px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: #000;
  font-weight: 600;
  font-size: large;
}
@media only screen and (max-width: 1100px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    border-radius: 10px;
    background: rgba(250, 250, 250, 0.4);
    box-shadow: 0 0 60px rgba(0, 0, 0, 20%);
  }
  #splide01 {
    width: 100%;
  }
  .slider-image {
    width: 100%;
    border-radius: 5px;
  }
  .splide__arrow--next {
    right: 0.2em;
  }
  .splide__arrow--prev {
    left: 0.2em;
  }
}
@media only screen and (max-width: 770px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92%;
    margin: 5rem;
    border-radius: 10px;
  }
}
@media only screen and (max-width: 576px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85%;
    margin: 5rem;
    border-radius: 10px;
  }
}
</style>
