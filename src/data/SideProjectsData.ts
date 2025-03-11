import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData(
        "project-d-1",
        "UE Control Rig Demo",
        "img/side-projects/UE-control-rig-demo/UE_hand_monster_icon.png",
        `
        <div class="paragraph">
          <strong>UE Control Rig Demo</strong> showcases the implementation of a hand monster in Unreal Engine using Control Rig. In this project, I leveraged UE's Control Rig system to create dynamic, procedural animations for a monstrous hand, resulting in smooth, realistic movements and responsive rig adjustments.
        </div>
      
        <div class="paragraph center">
          <iframe class="youtube" src="https://www.youtube.com/embed/96FsjOa8BQM" frameborder="0" allowfullscreen></iframe>
        </div>
      
        <div class="paragraph">
          Key Highlights:
          <ul>
            <li>Developed a hand monster with advanced procedural animation using Control Rig.</li>
            <li>Achieved smooth and dynamic motion through real-time rig adjustments.</li>
            <li>Finger? IK - detects ground</li>
          </ul>
        </div>
      
        <div class="paragraph">
          <div class="notice">
            Playable build available on <a href="https://drive.google.com/file/d/1paX_EVmBJFl64kltTntuiKmRMp0FK9et/view?usp=drive_link" target="_blank">Google Drive</a>.
          </div>
        </div>
      
        <div class="paragraph center">
          <!-- Replace with real screenshots if available -->
          <img class="pc-screenshot" src="img/side-projects/UE-control-rig-demo/screenshot0.png" alt="UE Control Rig Demo Screenshot" />
            <img class="pc-screenshot" src="img/side-projects/UE-control-rig-demo/screenshot1.png" alt="UE Control Rig Demo Screenshot" />
       
        </div>
        `,
        "#FF4500",
        true,
        true
      ),
    new ProjectData(
        "project-d-2",
        "Tiled+ Rendering",
        "img/side-projects/tiled-plus/icon.png",
        `
        <div class="paragraph">
          <strong>Tiled+ Rendering</strong> is a state-of-the-art graphics rendering system I developed as a Graphics Programmer.</br>
        Utilizing C++ along with FSL (The Forge Shading Language) and The Forge API, I implemented a tiled+ rendering pipeline to achieve efficient tile-based computations and high performance.
        </div>
      
        <div class="paragraph center">
          <iframe class="youtube" src="https://www.youtube.com/embed/ZmwkfA8osKM" frameborder="0" allowfullscreen></iframe>
        </div>
      
        <div class="paragraph">
          Key Highlights:
          <ul>
            <li>Implemented a tiled+ rendering pipeline using The Forge API for efficient tile management.</li>
            <li>Developed custom shaders in FSL to enhance lighting and shading effects.</li>
            <li>Optimized rendering performance through advanced tile culling and workload distribution.</li>
            <li>Reference: <a href="https://github.com/bcrusco/Forward-Plus-Renderer" target="_blank">Forward Plus Renderer</a></li>
          </ul>
        </div>
      
        <div class="paragraph center">
          <img class="pc-screenshot" src="img/side-projects/tiled-plus/screenshot0.png" alt="Tiled+ Rendering Screenshot" />
          <img class="pc-screenshot" src="img/side-projects/tiled-plus/screenshot1.png" alt="Tiled+ Rendering Heatmap" />
        </div>
        `,
        "#32CD32",
        true,
        false
      )
];