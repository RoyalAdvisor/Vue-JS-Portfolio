<template>
  <div class="container">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Projects</a>
    <a href="">Resume</a>
    <a href="">Testimonials</a>
    <a href="">Contact</a>
  </div>
</template>

<script>
export default {
  name: "BNav",
};
</script>

<style scoped>
@media only screen and (max-width: 576px) {
  .container {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    background: #1f1f1f;
    position: fixed;
    bottom: 0.5rem;
    z-index: 2;
    padding: 10px;
    margin: 0 auto;
  }
  .container a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
  }
}
</style>
