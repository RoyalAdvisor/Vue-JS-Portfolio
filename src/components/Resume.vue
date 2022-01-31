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
              <h2>Groote Schuur High School</h2>
              <p>
                Completed my National Senior Certificate at this institute with
                a Bachelor's pass in English, Afrikaans, Maths Literacy, Life
                Science, Geography and Business Studies. My average mark was
                67,8%
              </p>
            </div>
            <div class="left_content">
              <h3>Jan 2015</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h2>Rlabs Youth Cafe</h2>
              <p>
                Started attending this "for youth" initiative by Rlabs called
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
              <h2>EOS Group</h2>
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
              <h2>SellDirect Marketing</h2>
              <p>
                I decided to explore a different work environment and found
                myself in a call centre. A high pace, target driven environment
                felt like the atmosphere for me at the time. My position was a
                retentions agent underwritten by Telkom mobile. I got to engage
                with clients, develop good relations with stakeholders and
                really understand a bit more about the business sector.
              </p>
            </div>
            <div class="left_content">
              <h3>Mar 2018</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h2>Lost myself...</h2>
              <p>
                Due to the high intensity of my previous job, I experienced a
                tremendous amount of stress which eventually become hazardous to
                my health. I was unable to continue working as my health and
                mental state was under alot of strain. That's when I decided to
                take a break and recalibrate myself.
              </p>
            </div>
            <div class="left_content">
              <h3>Aug 2018</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h2>Motion Control Cards</h2>
              <p>
                After I recovered, I began focusing on an old passion of mine.
                Designing playing cards. I started developing my own custom
                playing cards to be used for the art of cardistry. My business
                plan was solid but due to the entire world shutting down because
                of the pandemic, I had to give up on that dream.
              </p>
            </div>
            <div class="left_content">
              <h3>Jun 2019</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <h2>My journey into web development starts...</h2>
              <p>
                I've always been interested in tech. Growing up, I was the
                always the person people would come to if they had an issue with
                their devices. Some suggested that I pursue it further but I
                never took it seriously. That is until an opportunity at
                LifeChoices presented itself at the most crucial moment. I
                decided to grab the opportunity with both hands and see where it
                would take me and now I'm enjoying every moment of it. I
                absolutely fell inlove with web development and I see my future
                within this field.
              </p>
            </div>
            <div class="left_content">
              <h3>Sept 2021</h3>
            </div>
          </li>
          <li>
            <div class="right_content">
              <!-- <h2>Sample Text</h2>
              <p>
                A paragraph is defined as “a group of sentences or a single
                sentence that forms a unit” (Lunsford and Connors 116). Length
                and appearance do not determine whether a section in a paper is
                a paragraph. For instance, in some styles of writing,
                particularly journalistic styles, a paragraph can be just one
                sentence long.
              </p> -->
            </div>
            <div class="left_content">
              <!-- <h3>August 2019</h3> -->
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
  /* background: linear-gradient(to right, #fe8c00, #f83600); */
  box-shadow: 0 0 60px rgba(0, 0, 0, 20%);
}
.resume-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 100%;
  border-radius: 15px;
  background: #fff;
}
.timeline:before {
  content: "";
  position: absolute;
  height: 100%;
  left: 50%;
  place-self: center;
  width: 2px;
  top: -10px;
  background-color: rgba(0, 0, 0, 100%);
  z-index: -1;
}
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
  line-height: normal;
  position: relative;
  width: 50%;
  padding: 40px 70px;
}

.timeline ul li .right_content h2 {
  color: #f83600;
  padding: 0px 2px 18px 0px;
  line-height: 25px;
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
  background: #f83600;
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
  background: #fe8c00;
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
}
</style>
