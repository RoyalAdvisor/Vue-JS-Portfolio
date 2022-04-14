<template>
  <section id="testimonials-page">
    <div class="testimonials-heading">
      <h1>TESTIMONIALS</h1>
    </div>
    <div class="testimonials-container">
      <div class="card" v-for="item of testimonials" :key="item._id">
        <div class="card-image">
          <img :src="item.profile" :alt="item.fullname" />
        </div>
        <div class="card-content">
          <h3>{{ item.fullname }}</h3>
          <p>{{ item.content }}</p>
          <div class="rating">
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                width="20"
                height="20"
                class="svg-inline--fa fa-star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                width="20"
                height="20"
                class="svg-inline--fa fa-star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                width="20"
                height="20"
                class="svg-inline--fa fa-star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                width="20"
                height="20"
                class="svg-inline--fa fa-star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star-half"
                width="20"
                height="20"
                class="svg-inline--fa fa-star-half"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M288 439.6l-130.9 68.7C152.2 510.8 147.1 512 142.2 512c-18.59 0-35.17-16.66-31.61-37.45l25.04-145.5L29.72 226.1C10.68 207.6 21.2 175.3 47.47 171.5l146.4-21.29l65.43-132.4c5.883-11.91 17.33-17.8 28.73-17.8c.0234 0-.0234 0 0 0L288 439.6z"
                ></path>
              </svg>
            </span>
          </div>
          <cite>{{ item.occupation }}</cite>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const baseURL = "https://vue-port-api.herokuapp.com/";
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [],
    };
  },
  mounted() {
    fetch(`${baseURL}test`)
      .then((res) => res.json())
      .then((data) => (this.testimonials = data))
      .catch((err) => console.error(err.message));
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Oxygen", sans-serif;
}
#testimonials-page {
  width: 100%;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 94, 247, 1) 17.8%,
    rgba(2, 245, 255, 1) 100.2%
  );
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.testimonials-heading h1 {
  font-weight: 900;
  font-size: 28px;
  color: #fff;
  margin-top: 5rem;
  margin-bottom: 0;
  text-align: center;
}
.testimonials-container {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  row-gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 5rem;
}
.card {
  margin: 0;
  width: 49.3%;
  display: flex;
  flex-direction: row;
  color: #000;
  padding: 0;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 10%); */
}
.card-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.card-image img {
  max-width: 200px;
  border-radius: 50%;
}
.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.card-content h3 {
  font-size: 15px;
}
.card-content p {
  font-size: 14px;
  line-height: 25px;
  color: rgba(0, 0, 0, 90%);
}
.rating {
  margin-bottom: 5px;
}
cite {
  color: rgba(0, 0, 0, 85%);
  font-size: 12px;
  margin: 10px 0;
  width: 100%;
}
@media only screen and (max-width: 1500px) {
  .testimonials-container {
    row-gap: 1rem;
  }
  .card {
    width: 49%;
    display: flex;
    flex-direction: row;
    color: #000;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  }
  .card-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .card-image img {
    max-width: 100%;
    border-radius: 50%;
  }
}

@media only screen and (max-width: 1100px) {
  .testimonials-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0;
    margin-bottom: 5rem;
  }
  .testimonials-heading h1 {
    font-weight: 900;
    color: #fff;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    margin: 0;
  }
  .card-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }
  .card-image img {
    width: 100%;
    border-radius: 50%;
  }
  .card-content {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
}
@media only screen and (max-width: 770px) {
  .testimonials-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0;
    margin-bottom: 5rem;
  }
  .testimonials-heading h1 {
    font-weight: 900;
    color: #fff;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .card {
    width: 95%;
    display: flex;
    flex-direction: row;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    margin: 0;
  }
  .card-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }
  .card-image img {
    width: 90%;
    border-radius: 50%;
  }
  .card-content {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
}
@media only screen and (max-width: 576px) {
  .testimonials-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0;
    margin-bottom: 5rem;
  }
  .testimonials-heading h1 {
    font-weight: 900;
    color: #fff;
    margin-top: 5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .card {
    width: 95%;
    display: flex;
    flex-direction: column;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    margin: 0;
  }
  .card-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }
  .card-image img {
    width: 90%;
    border-radius: 50%;
  }
  .card-content {
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .testimonials-heading {
    width: 100%;
  }
  .card-content h3 {
    width: 100%;
  }
}
</style>
