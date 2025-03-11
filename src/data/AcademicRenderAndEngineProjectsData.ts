import ProjectData from '@/data/ProjectData.ts'
export default [
  new ProjectData(
    "project-b-1",
    "Ouroboros Engine",
    "img/academic-projects/engine/ouroboros/icon.gif",
    `
    <div class="paragraph">
      <strong>Ouroboros Engine</strong> is a custom game engine developed using C++, Vulkan, GLSL, and Lua. Designed for high performance and flexibility, it features robust systems for engine management and advanced graphics rendering.
    </div>

    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/Z8Fgf065Ayk" frameborder="0" allowfullscreen></iframe>
      <iframe class="youtube" src="https://www.youtube.com/embed/08l2_q7yCqs" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
      <strong>Tech Stack</strong>: C++, Vulkan, GLSL, Lua<br>
    </div>

          <div class="notice">
          Source available: <a href="https://github.com/y-kim-digipen/OuroborosEngine" target="_blank">GitHub</a>
      </div>
  
    <div class="paragraph">
      <strong>Engine Features (what I solely worked on)</strong>
      <ul>
        <li>Custom GUI system</li>
        <li>Efficient object management using an Entity Component System (ECS)</li>
        <li>Easy integration of new systems with Template Meta Programming (TMP)</li>
        <li>Scene serialization support with YAML</li>
        <li>Lua scripting for scene entities</li>
        <li>Reloadable assets and shaders via a file browser</li>
      </ul>
    </div>
  
    <div class="paragraph">
      <strong>Graphics Features (not what I worked on)</strong>
      <ul>
        <li>Physically Based Rendering (PBR)</li>
        <li>Screen Space Reflection (SSR)</li>
      </ul>
    </div>
  
    <div class="paragraph center">
      <img class="pc-screenshot" src="img/academic-projects/engine/ouroboros/icon.gif" alt="Ouroboros Engine Screenshot 0" />
      <img class="pc-screenshot" src="img/academic-projects/engine/ouroboros/ouroboros.png" alt="Ouroboros Engine Screenshot 1" />
      <img class="pc-screenshot" src="img/academic-projects/engine/ouroboros/ouroboros1.png" alt="Ouroboros Engine Screenshot 2" />
    </div>

    `,
    "#FF6347",
    true,
    true),
    new ProjectData(
      "project-b-2",
      "Collision Detection(GJK, BVH)",
      "img/academic-projects/engine/collision.png",
      `
        <div class="paragraph">
          <strong>Collision Detection</strong> is a C++ and OpenGL project that demonstrates robust collision detection between various simple primitives. It accurately detects collisions for spheres, capsules, planes, rays, lines, cubes, and more using the GJK algorithm.
        </div>
    
        <div class="paragraph center">
          <iframe class="youtube" src="https://www.youtube.com/embed/GlJez77s1TU" frameborder="0" allowfullscreen></iframe>
        </div>
    
        <div class="paragraph">
          <strong>Tech Stack</strong>: C++, OpenGL, Linux<br>
        </div>
    
        <div class="paragraph">
          <strong>Key Features:</strong>
          <ul>
            <li>Detects collisions between various primitives: sphere, capsule, plane, ray, line, cube, etc.</li>
            <li>BVH(Bounding volume hierarchy for optimization!</li>
            <li>Utilizes the GJK algorithm for efficient collision computation</li>
            <li>Optimized for real-time performance in OpenGL</li>
            <li>Modular design for easy integration and extension</li>
          </ul>
        </div>
      
        <div class="paragraph center">
          <img class="pc-screenshot" src="img/academic-projects/engine/collision.png" alt="Collision Detection Screenshot 0" />
        </div>
      `,
      "#6A5ACD",
      false,
      false
    ),
    new ProjectData(
      "project-8",
      "Cloth Simulation",
      "img/academic-projects/engine/clothsim-icon.gif",
      `
      <div class="paragraph">
        <strong>Cloth Simulation</strong> is a GPU-accelerated cloth simulation project implemented in C++ and OpenGL.</br>
        Nothing much to say about..
      </div>
    
      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ejy0Hmm3jO0" frameborder="0" allowfullscreen></iframe>
      </div>
    
      <div class="paragraph">
        <strong>Tech Stack</strong>: C++, OpenGL
      </div>
    
      <div class="paragraph center">
        <img class="pc-screenshot" src="img/academic-projects/engine/clothsim-icon.gif" alt="Cloth Simulation Screenshot" />
      </div>
      `,
      "#8A2BE2"
    )
    ,
    new ProjectData(
      "project-9",
      "Legacy pipelines",
      "img/academic-projects/engine/legacy-pipelines.gif",
      `
      <div class="paragraph">
        <strong>Legacy pipelines</strong> demonstrates Blihn-phong shading, reflection, refraction, and an array of lights!! It revives classic rendering techniques using C++ and OpenGL.
      </div>
    
      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/k4zlEQDbXxY" frameborder="0" allowfullscreen></iframe>
      </div>
    
      <div class="paragraph">
        <strong>Tech Stack</strong>: C++, OpenGL, Linux<br>
      </div>
      
      <div class="paragraph center">
        <img class="pc-screenshot" src="img/academic-projects/engine/legacy-pipelines.gif" alt="Legacy pipelines Screenshot" />
      </div>
      `,
      "#00FA9A",
      false,
      false
    ),
    
    new ProjectData(
      "project-9",
      "PBR / Deferred Rendering",
      "img/academic-projects/engine/pbr.png",
      `
      <div class="paragraph">
        <strong>PBR / Deferred Rendering</strong> demonstrates physically based rendering techniques for realistic lighting combined with a deferred shading pipeline to efficiently render complex scenes.
      </div>
      
      <div class="paragraph center">
        <img class="pc-screenshot" src="img/academic-projects/engine/pbr.png" alt="PBR Screenshot" />
        <img class="pc-screenshot" src="img/academic-projects/engine/deferred.png" alt="Deferred Rendering Screenshot" />
      </div>
      `,
      "#FF00FF",
      false,
      false
    ),
    

    new ProjectData(
      "project-9",
      "FK / IK Animation",
      "img/academic-projects/engine/FK-IK-animaiton.gif",
      `
      <div class="paragraph">
        <strong>FK / IK Animation</strong> is a simple project that demonstrates basic forward and inverse kinematics. It animates a human and a cat using simple FK/IK techniques—implemented without constraints.
      </div>
    
      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ziBhDocSl0E" frameborder="0" allowfullscreen></iframe>
      </div>
      `,
      "#2F4F4F",
      true,
      false
    ),
    
    new ProjectData(
      "project-9",
      "Some more..",
      "img/academic-projects/engine/graphics-misc.gif",
      `
      <div class="paragraph">
        <strong>Some more..</strong><br/>
        2021 Fall, Team project<br/>
        Dynamic shader linking<br/>
        Automatically attached shader uniform variables into engine<br/>
        Fog<br/>
        Toon shading<br/>
        2D Noise<br/>
        3D Terrain noise<br/>
        Vertex noise using geometry shader<br/>
        PN triangle<br/>
        Shadow map
      </div>
    
      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/YsWaghJRn5M?list=PLX26gddAWtT8gnGmmQ-IlmTkrO8nQ5nkn" frameborder="0" allowfullscreen></iframe>
      </div>
    
      <div class="paragraph center">
        <img class="pc-screenshot" src="img/academic-projects/engine/graphics-misc.gif" alt="Some more.. Screenshot" />
      </div>
      `,
      "#00BFFF",
      false,
      true
    )
    
];