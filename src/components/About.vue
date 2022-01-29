<template>
  <section id="about-page">
    <div class="about-container">
      <div class="about-content">
        <h1>ABOUT MYSELF</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore alias
          sapiente consequuntur quis eveniet culpa magnam cum voluptatem
          laudantium iure ut beatae consectetur repudiandae voluptates, autem
          quisquam ratione vero impedit ducimus veritatis officiis. Vel in
          dolorem vero totam impedit. Omnis nobis quia beatae voluptates
          deserunt tenetur totam optio aliquid officia.
        </p>
        <div class="skill-icons">
          <div class="item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="html5"
              class="svg-inline--fa fa-html5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
              ></path>
            </svg>
            <h4>HTML 5</h4>
          </div>
          <div class="item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="css3-alt"
              class="svg-inline--fa fa-css3-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
              ></path>
            </svg>
            <h4>CSS 3</h4>
          </div>
          <div class="item">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="js"
              class="svg-inline--fa fa-js"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
              ></path>
            </svg>
            <h4>JavaScript</h4>
          </div>
        </div>
      </div>
      <div class="about-progress">
        <div class="progress-item">
          <h4>MySQL</h4>
          <div class="bars">
            <div class="bars-inner-mysql"></div>
          </div>
        </div>
        <div class="progress-item">
          <h4>Bootstrap</h4>
          <div class="bars">
            <div class="bars-inner-bootstrap"></div>
          </div>
        </div>
        <div class="progress-item">
          <h4>Vue.js</h4>
          <div class="bars">
            <div class="bars-inner-vue"></div>
          </div>
        </div>
        <div class="progress-item">
          <h4>Node.js</h4>
          <div class="bars">
            <div class="bars-inner-node"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
/* ABOUT-SECTION */
* {
  box-sizing: border-box;
}
.about-container {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin-bottom: 5rem;
}
.about-content {
  width: 30%;
  height: 450px;
  padding: 20px;
}
.about-content h1 {
  font-weight: 900;
  font-size: 35px;
}
.about-content p {
  line-height: 25px;
}
.skill-icons {
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 1rem;
}
.item {
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 150px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 20%);
  padding: 10px;
}
.item svg {
  width: 40%;
}

.about-progress {
  width: 30%;
  display: flex;
  padding: 20px;
  height: 450px;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.progress-item {
  width: 100%;
}
.bars {
  width: 100%;
  background-color: #fff;
  height: 15px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 20%);
}
.bars-inner-mysql {
  background: linear-gradient(to right, #fdfc47, #24fe41);
  width: 75%;
  height: 15px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
}
.bars-inner-bootstrap {
  background: linear-gradient(to right, #fdfc47, #24fe41);
  width: 75%;
  height: 15px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
}
.bars-inner-vue {
  background: linear-gradient(to right, #fdfc47, #24fe41);
  width: 65%;
  height: 15px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
}
.bars-inner-node {
  background: linear-gradient(to right, #fdfc47, #24fe41);
  width: 65%;
  height: 15px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
}
@media only screen and (max-width: 1100px) {
  #about-page {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .about-container {
    margin-top: 45rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    margin-bottom: 5rem;
  }
  .about-content {
    width: 80%;
    padding: 25px;
    margin: 0;
  }
  .about-progress {
    width: 80%;
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .skill-icons {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  .item {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    flex-direction: column;
    box-shadow: 0 0 2px rgba(0, 0, 0, 20%);
  }
  .item svg {
    width: 100px;
  }
}
@media only screen and (max-width: 770px) {
  #about-page {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
  }
  .about-container {
    margin-top: 30rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 20rem;
  }
  .about-content {
    width: 100%;
    padding: 25px;
    margin: 0;
  }
  .about-progress {
    width: 100%;
    display: flex;
    padding: 25px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .skill-icons {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    flex-direction: row-reverse;
    box-shadow: 0 0 2px rgba(0, 0, 0, 20%);
  }
  .item svg {
    width: 15%;
  }
}
@media only screen and (max-width: 576px) {
  .about-container {
    margin-top: 24rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 25rem;
  }
}
</style>
