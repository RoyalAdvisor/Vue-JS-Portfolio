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
      testimonials: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/testimonials")
      .then((res) => res.json())
      .then((data) => (this.testimonials = data))
      .catch((err) => console.log(err.message));
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
}
.card {
  width: 30%;
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
    padding: 20px;
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
</style>
