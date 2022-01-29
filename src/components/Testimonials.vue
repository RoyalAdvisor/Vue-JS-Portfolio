<template>
  <section id="testimonials-page">
    <div class="testimonials-heading">
      <h1>TESTIMONIALS</h1>
    </div>
    <div class="testimonials-container">
      <div class="card" v-for="item of testimonials" :key="item">
        <div class="card-image">
          <img :src="item.image" :alt="item.name" />
        </div>
        <div class="card-content">
          <h2>{{ item.name }}</h2>
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
          <cite>{{ item.title }}</cite>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",
  data() {
    return {
      testimonials: [
        {
      "name": "Alex Sexwale",
      "title": "LifeChoices Lecturer",
      "id": 1,
      "image": "https://i.postimg.cc/RVrbbCJf/image-5.jpg",
      "content": "Nadeem is creative and naturally gifted in the tech space. He always goes the extra mile when it comes to producing quality work."
    },
    {
      "name": "Muhammad Breda",
      "title": "Aspiring Full-Stack Dev",
      "id": 2,
      "image": "https://i.postimg.cc/XvhgGxwF/image-1.jpg",
      "content": "Nadeem is very ambitious, creative and just has that eye for good design. Overall he is a great guy! Glad to work with him."
    },
    {
      "name": "Craig Braaf",
      "title": "Aspiring Front-End Dev",
      "id": 3,
      "image": "https://i.postimg.cc/26sTJTym/image-3.jpg",
      "content": "Nadeem is extremely observant and possesses a keen attention to detail. He's innovative and filled with ideas."
    },
    {
      "name": "Yaaseen Davids",
      "title": "Aspiring Full-Stack Dev",
      "id": 4,
      "image": "https://i.postimg.cc/2jKckXsC/image-4.jpg",
      "content": "Nadeem is an AMAZING developer and very hardworking. He is always willing and ready to assist his peers."
    }
    ],
    };
  },
};
</script>

<style>
#testimonials-page {
  width: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.testimonials-heading h1 {
  font-weight: 900;
  font-size: 35px;
  color: #000;
  margin-top: 5rem;
  text-align: center;
}
.testimonials-container {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.card {
  width: 20%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 10%);
  color: #000;
  border-radius: 5px;
}
.card-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.card-image img {
  width: 70%;
  border-radius: 50%;
}
.card-content {
  padding: 50px;
  display: flex;
  flex-direction: column;
}
.card-content p {
  line-height: 25px;
}
.rating {
  margin-bottom: 5px;
}

@media only screen and (max-width: 1100px) {
  .testimonials-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 5px rgba(0, 0, 0, 10%);
    color: #000;
    border-radius: 5px;
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
    gap: 2rem;
  }
  .card {
    width: 92%;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0 5px rgba(0, 0, 0, 10%);
    color: #000;
    border-radius: 5px;
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
  .card {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px rgba(0, 0, 0, 10%);
    color: #000;
    border-radius: 5px;
  }
  .card-image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }
  .card-image img {
    width: 80%;
    border-radius: 10px;
  }
  .card-content {
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }
  .testimonials-heading h1 {
  font-weight: 900;
  font-size: 35px;
  color: #000;
  margin-top: 5rem;
  text-align: start;
}
}
</style>
