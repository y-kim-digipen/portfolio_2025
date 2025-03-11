<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Yoonki Kim</strong>, a seasoned Gameplay Engineer with expertise in game engine development, real-time simulation, and computer graphics. I specialize in crafting immersive, high-performance gaming experiences that push the limits of interactive technology.
      </div>

      <div style="margin-top: 20px;">
        I've led and contributed to innovative <router-link to="/game-projects">game projects</router-link> and collaborated on a variety of creative ventures. My detailed <router-link to="/resume">resume</router-link> reflects my commitment to excellence and continuous innovation in the field.
      </div>

      <div style="margin-top: 40px;">
        I'm <strong>actively seeking new challenges</strong> where I can leverage my skills and passion for game development. Feel free to reach out at <a href="mailto:kuk7803@gmail.com">kuk7803@gmail.com</a> or <router-link to="/contact">get in touch</router-link> to discuss potential opportunities.
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Yoonki" /> 
    </div>

    <div style="clear:both"></div>
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: right;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>