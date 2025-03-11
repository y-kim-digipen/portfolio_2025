<template>
  <div>
    <h1>Projects</h1>

    <div style="margin-bottom: 30px;">
      The following are some stuff I've made or heavily contributed to.
    </div>

    <!-- Game Projects Section -->
    <section class="project-category">
      <h2>Professional Works (UEFN)</h2>
      <ProjectsList :projects="superJumpProjects" />
    </section>

    <!-- Side Projects Section -->
    <section class="project-category">
      <h2>Side Projects</h2>
      <ProjectsList :projects="sideProjects" />
    </section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";
import sideProjectsData from "@/data/SideProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      superJumpProjects: gameProjectsData,
      sideProjects: sideProjectsData
    };
  },
});
</script>
