<template>
  <div>
    <h1>Academic Projects</h1>

    <!-- Game Projects Section -->
    <section class="project-category">
      <h2>Game Projects</h2>
      <ProjectsList :projects="projects1" />
    </section>

    <!-- Other Projects Section -->
    <section class="project-category">
      <h2>Rendering / Engine Projects</h2>
      <ProjectsList :projects="projects2" />
    </section>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import academicGameProjectsData from "@/data/AcademicGameProjectsData.ts";
import academicRenderAndEngineProjectsData from "@/data/AcademicRenderAndEngineProjectsData.ts";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects1: academicGameProjectsData,
      projects2: academicRenderAndEngineProjectsData
    };
  },
});
</script>
