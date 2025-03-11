<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Yoonki Kim</strong>, a huge game fan since childhood, dedicated Gameplay Engineer with a strong background in designing and implementing immersive gameplay systems.<br />
      <br />
      My expertise includes game engine development, real-time simulation, and computer graphics.<br />
      I thrive in environments where innovation meets performance and enjoy collaborating with multidisciplinary teams to create engaging player experiences.

      <br /><br />
      I’m actively seeking opportunities where I can leverage my technical skillset to drive gameplay innovation.</br>
      <br />If you’re looking for a Gameplay Engineer who’s passionate about pushing the boundaries of interactive entertainment, feel free to 
      <router-link to="/contact">contact me</router-link>!

      <!-- Download Links (Optional) -->
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/yoonki_gameplay_engineer_resume.pdf" target="_blank">
          <i class="fa fa-download fa-lg fa-fw"></i> Download as PDF
        </a>
        <div style="clear:both"></div>
      </div>
      
      San Francisco / CA


    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Super Jump Games</h3>
      <h4>Gameplay Engineer</h4>
      <h5>June. 2013  -  Dec. 2024</h5>

<div>
  </br>At Super Jump Games, I experienced tremendous personal growth in a fast-paced development environment.eting aggressive deadlines. 
  </br>I collaborated closely with designers, artists, and played a key role in core gameplay and helping interns quickly adapt to our workflow.
  </br>As the main developer, I was tasked with implementing core gameplay features and AI behavior systems, Animator.. pushing UEFN to its limit.
</div>
      <div class="tech-stack">UEFN (Unreal Editor for Fortnite), Verse</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Tech</h3>
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="GLSL" :rate="4" />
        <SkillRate name="Verse" :rate="5" />
        <SkillRate name="Lua" :rate="3" />
        <SkillRate name="Python" :rate="2" />
      </div>

      <div class="skill-set">
        <h3>Tools/Programs</h3>
        <SkillRate name="Unreal Engine" :rate="4" />
        <SkillRate name="UEFN" :rate="5" />
        <SkillRate name="Godot" :rate="2" />
        <SkillRate name="Unity" :rate="2" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>DigiPen Institute of Technology - 2023</h3>
      <h4>Bachelor's degree</h4>
      <div>BS in Computer Science in Real-Time Interactive Simulation (GPA 3.43)</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Intermediate</div>

      <h3>Korean</h3>
      <div>Native</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Game</h3>
        <div>I think Death Stranding and Bloodborne are masterpiece</div>

        <h3>I 🧡 EDM</h3>
        <div>Especially Daft Punk! I listen EDM all day no matter what</div>

        <h3>I 💛 Climbing</h3>
        <div>I used to be bouldering enthusiast. Looking forward my ACL fully recover and go back to gym!</div>

        <h3>I 💚 Photography</h3>
        <div>I love bring my camera with me outside, took some street photography.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>