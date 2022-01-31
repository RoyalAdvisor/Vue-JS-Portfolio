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
            <h3>HTML / CSS / JavaScript</h3>
            <div class="tags">
              <a
                href="https://github.com/RoyalAdvisor/CRUD-Systerm"
                target="_blank"
                >Source</a
              >
              <a
                href="https://crud-system-nadeem-johnson.netlify.app/"
                target="_blank"
                >Live</a
              >
            </div>
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
            <h3>HTML / CSS / Bootstrap</h3>
            <div class="tags">
              <a
                href="https://github.com/RoyalAdvisor/Bootstrap-Practice"
                target="_blank"
                >Source</a
              >
              <a href="https://airwalkers.netlify.app/" target="_blank">Live</a>
            </div>
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
            <h3>HTML / CSS / Bootstrap</h3>
            <div class="tags">
              <a
                href="https://github.com/RoyalAdvisor/Updated-Portfolio"
                target="_blank"
                >Source</a
              >
              <a href="https://nadeem-resume.netlify.app/" target="_blank"
                >Live</a
              >
            </div>
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
            <h3>HTML / CSS / JavaScript</h3>
            <div class="tags">
              <a
                href="https://github.com/RoyalAdvisor/Basic-Calculator"
                target="_blank"
                >Source</a
              >
              <a href="https://calculator-nj.netlify.app/" target="_blank"
                >Live</a
              >
            </div>
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
            <h3>HTML / CSS / JavaScript</h3>
            <div class="tags">
              <a
                href="https://github.com/RoyalAdvisor/BMI-Calculator"
                target="_blank"
                >Source</a
              >
              <a
                href="https://xenodochial-lewin-a285b8.netlify.app/"
                target="_blank"
                >Live</a
              >
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
  margin: 0;
  background: linear-gradient(to right, #fe8c00, #f83600);
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
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 10px;
}

/* SLIDER */
.splide-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  line-height: 25px;
  padding-bottom: 25px;
  background-color: rgba(255, 255, 255, 15%);
  border-radius: 5px;
}
.slider-image {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.tags {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin-bottom: 2rem;
}
.tags a:focus {
  background-color: rgba(255, 255, 255, 50%);
}
.tags a {
  text-decoration: none;
  background: inherit;
  padding: 15px;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 100%);
  border-radius: 5px;
  color: #000;
  font-weight: 600;
  font-size: large;
  width: 120px;
  text-align: center;
  transition: 200ms ease-in-out;
}
@media only screen and (max-width: 1100px) {
  .project-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    border-radius: 10px;
  }
  .splide-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    line-height: 25px;
    padding-bottom: 25px;
    background-color: rgba(255, 255, 255, 40%);
    border-radius: 5px;
  }
  #splide01 {
    width: 100%;
  }
  .slider-image {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
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
    width: 95%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    border-radius: 10px;
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
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    background: none;
  }
  .project-heading h1 {
    font-weight: 900;
    font-size: 35px;
    color: #000;
    margin-top: 5rem;
    text-align: center;
  }
  .project-heading {
    width: 100%;
    padding: 25px;
  }
  .splide-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #000;
    width: 90%;
    margin: 0 auto;
    line-height: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 10%);
  }
  .splide__arrow--next {
    right: 0.2em;
    display: none;
  }
  .splide__arrow--prev {
    left: 0.2em;
    display: none;
  }
  .tags {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>
