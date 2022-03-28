<template>
  <section id="resume-page">
    <div class="resume-heading">
      <h1>RESUME</h1>
    </div>
    <div class="resume-container">
      <div class="timeline">
        <ul>
          <li>
            <div class="right_content">
              <h4>My journey into web development starts...</h4>
              <p>
                An opportunity at LifeChoices presented itself at the most
                crucial moment. I decided to grab the opportunity with both
                hands and see where it would take me and now I'm enjoying every
                moment of it. I absolutely fell inlove with web development and
                I see my future within this field.
              </p>
            </div>
            <div class="left_content">
              <h3>Sept 2021</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h4>SellDirect Marketing</h4>
              <p>
                A high pace, target driven environment felt like the atmosphere
                for me at the time. My position was a retentions agent
                underwritten by Telkom mobile. I got to engage with clients,
                develop good relations with stakeholders and really understand a
                bit more about the business sector.
              </p>
            </div>
            <div class="left_content">
              <h3>Mar 2018</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h4>EOH Group</h4>
              <p>
                I started working at this company initially as a general worker,
                eventually working my way up to a more demanding and technical
                position. My duties included the installation of networking
                cable and optic fibre, network points and server cabinets.
              </p>
            </div>
            <div class="left_content">
              <h3>Aug 2016</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h4>RLabs Youth Cafe</h4>
              <p>
                Started attending this "for youth" initiative by RLabs called
                the Youth Cafe. While I was there I attended a multitude of
                youth centered workshops, aimed at upskilling those who have
                just finished their schooling. Some of these workshops included
                job-readiness and soft skills development.
              </p>
            </div>
            <div class="left_content">
              <h3>Feb 2015</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h4>Groote Schuur High School</h4>
              <p>
                Completed my National Senior Certificate at this institute with
                a Bachelor's pass in English, Afrikaans, Maths Literacy, Life
                Science, Geography and Business Studies.
              </p>
            </div>
            <div class="left_content">
              <h3>Jan 2015</h3>
            </div>
          </li>
          <div style="clear: both"></div>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Resume",
};
</script>

<style>
.resume-heading h1 {
  font-weight: 900;
  font-size: 35px;
  text-align: center;
  margin-top: 5rem;
}
* {
  z-index: 0;
  box-sizing: border-box;
  font-family: "Oxygen", sans-serif;
}
#resume-page {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.resume-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  border-radius: 15px;
  background: #fff;
  gap: 2rem;
}
/* .timeline:before {
  content: "";
  position: absolute;
  height: 83%;
  left: 50%;
  place-self: center;
  width: 2px;
  top: -10px;
  background-color: rgba(0, 0, 0, 100%);
  z-index: -1;
} */
.timeline {
  position: relative;
  margin: 0 auto;
  width: 80%;
  padding: 0;
  color: rgba(0, 0, 0, 85%);
}

.timeline ul {
  margin: 0;
  padding: 0;
}

.timeline ul li {
  list-style: none;
  box-sizing: border-box;
  line-height: 25px;
  position: relative;
  width: 50%;
  padding: 20px 0;
}

.timeline ul li .right_content h4 {
  color: rgba(255, 94, 247, 1);
  padding: 0px 2px 18px 0px;
  line-height: 25px;
}
.right_content p {
  color: rgba(0, 0, 0, 90%);
}
.timeline ul li:nth-child(odd) {
  float: left;
  text-align: left;
  clear: both;
  line-height: 25px;
}

.timeline ul li:nth-child(even) {
  float: right;
  text-align: right;
  clear: both;
  line-height: 25px;
}

.left_content {
  padding-bottom: 20px;
}

.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 94, 247, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 100%);
  right: -6px;
  top: 24px;
  z-index: 1;
}

.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(2, 245, 255, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 100%);
  left: -4px;
  top: 24px;
}

.timeline ul li:nth-child(odd) .left_content {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 4px 8px;

  color: black;
  border-radius: 5px;
}

.timeline ul li:nth-child(even) .left_content {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 4px 8px;

  color: black;
  border-radius: 5px;
}

@media (max-width: 1000px) {
  .timeline {
    width: 97%;
  }
  .timeline ul {
    width: 100%;
    padding: 0;
  }
  .resume-container {
    margin-bottom: 5rem;
    margin-top: 0;
  }
  .resume-heading h1 {
    margin-top: 5rem;
  }
  .timeline ul li {
    list-style: none;
    box-sizing: border-box;
    line-height: 25px;
    position: relative;
    width: 50%;
    padding: 20px 70px;
  }
}

@media (max-width: 767px) {
  .timeline {
    width: 100%;
  }
  .timeline:before {
    left: 20px;
  }
  .timeline ul li:nth-child(odd),
  .timeline ul li:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 50px;
  }

  .timeline ul li:nth-child(odd):before {
    top: -18px;
    left: 16px;
  }
  .timeline ul li:nth-child(even):before {
    top: -18px;
    left: 16px;
  }

  .timeline ul li:nth-child(odd) .left_content,
  .timeline ul li:nth-child(even) .left_content {
    top: -30px;
    left: 50px;
    right: inherit;
  }
  .timeline ul li .right_content p {
    font-size: medium;
    line-height: 25px;
  }
  .resume-container {
    margin-bottom: 3rem;
    margin-top: 2rem;
  }
  .resume-heading h1 {
    margin-top: 5rem;
  }
  .timeline ul li {
    list-style: none;
    box-sizing: border-box;
    line-height: 25px;
    position: relative;
    width: 50%;
    padding: 20px;
  }
}
@media only screen and (max-width: 576px) {
  .resume-heading h1 {
    font-weight: 900;
    font-size: 35px;
    text-align: center;
  }
  .resume-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 100%;
    border-radius: 15px;
    background: #fff;
  }
  .timeline ul li {
    list-style: none;
    box-sizing: border-box;
    line-height: 25px;
    position: relative;
    width: 50%;
    padding: 20px;
  }
}
</style>
