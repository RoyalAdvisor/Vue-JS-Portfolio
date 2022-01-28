<template>
  <div class="nav-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="currentColor"
      class="bi bi-code-slash"
      viewBox="0 0 16 16"
    >
      <path
        d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
      />
    </svg>
    <nav class="nav">
      <a href="#landing-page">HOME</a>
      <a href="#about-page">ABOUT</a>
      <a href="#projects-page">PROJECTS</a>
      <a href="#testimonials-page">TESTIMONIALS</a>
      <a href="#contact-page">CONTACT</a>
    </nav>
  </div>
  <div class="menu-container">
    <button class="menu is-active" type="button">
      <div class="bar"></div>
    </button>
  </div>
  <div class="mobile-nav">
    <nav class="m-nav">
      <a href="#landing-page" class="mobile">HOME</a>
      <a href="#about-page" class="mobile">ABOUT</a>
      <a href="#projects-page" class="mobile">PROJECTS</a>
      <a href="#testimonials-page" class="mobile">TESTIMONIALS</a>
      <a href="#contact-page" class="mobile">CONTACT</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
/* navigation */
* {
  box-sizing: border-box;
}

.nav-container {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  width: 100%;
  background: linear-gradient(to right, #fdfc47, #24fe41);
  position: fixed;
  z-index: 5;
  transition: 0.3s ease-in-out;
}

.nav.scroll {
  background-color: blueviolet;
}
.nav-container svg {
  color: #fff;
  margin-left: 1rem;
}

.menu {
  display: block;

  width: 40px;

  cursor: pointer;

  outline: none;

  appearance: none;

  background: none;

  border: none;

  z-index: 99;
}

.menu .bar,
.menu:before,
.menu:after {
  content: "";

  display: block;

  width: 100%;

  height: 5px;

  margin: 0 auto 5px;

  background-color: #000;

  transition: 0.5s ease-in-out;
}

.menu.is-active:before {
  transform: rotate(45deg) translate(8px, 6px);
}

.menu.is-active:after {
  transform: rotate(-45deg) translate(8px, -6px);
}

.menu.is-active .bar {
  transform: translate(-25px, 0px);
  opacity: 0;
}

.nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.scroll {
  background-color: #a1572f;
  color: #eef;
}

.nav a {
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  font-weight: 900;
  color: #fff;
  transition: 200ms ease-in-out;
  padding: 20px;
}

nav a:hover {
  color: aqua;
}

.mobile-nav {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 85%);
  width: 40%;
  height: 100%;
  z-index: 99;
  transition: 0.4s ease-in-out;
  box-shadow: 0px 0px 150px rgba(0, 0, 0, 0.7);
}

.m-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
}

.m-nav a {
  text-decoration: none;
  width: 200px;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  transition: 200ms ease-in-out;
  background-color: rgba(0, 0, 0, 30%);
  padding: 10px;
}

.mobile-nav.is-active {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  right: -100%;
  height: 100%;
  transition: 0.4s ease-in-out;
}
@media only screen and (max-width: 770px) {
  .nav {
    display: none;
  }
  .nav-container {
    display: none;
    box-shadow: none;
    appearance: none;
    margin: 0;
    padding: 0;
  }

  .nav-container svg {
    color: #fff;
    width: 100px;
    margin-left: 1rem;
  }

  .menu-container {
    background-color: transparent;
    width: 100%;
    height: 80px;
    padding: 20px;
    position: fixed;
    top: 1%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 6;
  }
}
@media only screen and (max-width: 2000px) and (min-width: 771px) {
  .menu {
    display: none;
  }
  .mobile-nav {
    display: none;
  }
}
</style>
