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
              src="../assets/Images/project-images/project1-min.jpg"
              alt="Sample 1"
              class="slider-image"
            />
            <div class="splide-box">
              <div class="splide-content">
                <h4>CRUD System</h4>
                <h5>HTML / CSS / JavaScript</h5>
              </div>
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
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project2-min.jpg"
              alt="Sample 2"
              class="slider-image"
            />
            <div class="splide-box">
              <div class="splide-content">
                <h4>Airwalkers E-Commerce</h4>
                <h5>HTML / CSS / Bootstrap</h5>
              </div>
              <div class="tags">
                <a
                  href="https://github.com/RoyalAdvisor/Bootstrap-Practice"
                  target="_blank"
                  >Source</a
                >
                <a href="https://airwalkers.netlify.app/" target="_blank"
                  >Live</a
                >
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project3-min.jpg"
              alt="Sample 3"
              class="slider-image"
            />
            <div class="splide-box">
              <div class="splide-content">
                <h4>Mock Portfolio</h4>
                <h5>HTML / CSS / Bootstrap</h5>
              </div>
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
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project4-min.jpg"
              alt="Sample 4"
              class="slider-image"
            />
            <div class="splide-box">
              <div class="splide-content">
                <h4>Simple JS Calculator</h4>
                <h5>HTML / CSS / JavaScript</h5>
              </div>
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
          </div>
        </SplideSlide>
        <SplideSlide>
          <div class="splide-item">
            <img
              src="../assets/Images/project-images/project5-min.jpg"
              alt="Sample 5"
              class="slider-image"
            />
            <div class="splide-box">
              <div class="splide-content">
                <h4>BMI JS Calculator</h4>
                <h5>HTML / CSS / JavaScript</h5>
              </div>
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
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Oxygen", sans-serif;
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
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
.slider-image {
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
  font-size: medium;
}
.splide-content h4 {
  margin: 0;
  padding: 20px;
  font-size: larger;
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
  background: #fe8c00;
  border: 2px solid #f83600;
  color: #f83600;
}
.tags a {
  text-decoration: none;
  background: inherit;
  padding: 10px;
  background-color: #f83600;
  border-radius: 5px;
  border: 2px solid #fe8c00;
  color: #fe8c00;
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
    margin-top: 5rem;
    margin-bottom: 5rem;
    border-radius: 10px;
  }
  .splide-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    line-height: 25px;
    padding-bottom: 25px;
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
  .tags a:hover {
    background: #fe8c00;
    border: 2px solid #f83600;
    color: #f83600;
  }
  .tags a {
    text-decoration: none;
    background: inherit;
    padding: 10px;
    background-color: #f83600;
    border-radius: 5px;
    border: 2px solid #fe8c00;
    color: #fe8c00;
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
    padding: 0;
  }
  .splide-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
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
  .tags a:hover {
    background: #fe8c00;
    border: 2px solid #f83600;
    color: #f83600;
  }
  .tags a {
    text-decoration: none;
    background: inherit;
    padding: 10px;
    background-color: #f83600;
    border-radius: 5px;
    border: 2px solid #fe8c00;
    color: #fe8c00;
    font-weight: 600;
    font-size: medium;
    text-align: center;
    width: 120px;
    transition: 200ms ease-in-out;
    margin: 0;
  }
}
</style>
