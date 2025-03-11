import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData(
      "project-c-1",
      "Roguelike Magic",
      "img/projects/roguelike-magic/icon.png",
      `
      <div class="paragraph">
        <strong>Roguelike Magic</strong> is a roguelike gameplay experience built using UEFN (Unreal Editor for Fortnite) featuring three unique boss encounters.<br />
        Our team collaborated with Team 17, where I implemented significant improvements to a custom state machine system and animator that I developed, and leveraged Verse scripting to integrate built-in device functionality.<br />
        Additionally, I mentored two interns, fostering a highly collaborative development environment.
      </div>
    
      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/uddrvvjGYyg" frameborder="0" allowfullscreen></iframe>
      </div>
    
      <div class="paragraph">
        Key Highlights:
        <ul>
          <li>Developed a custom state machine, animator, and boss AI from scratch using UEFN</li>
          <li>Implemented both passive and active upgrade effects</li>
          <li>Quests and accolades system</li>
          <li>In game economy</li>
          <li>Created a persistent unlock system with equippable cosmetic items</li>
        </ul>
      </div>

        <div class="paragraph">
          <div class="notice">
            Fortnite island code: 9996-0287-9937
          </div>
        </div>

      <div class="paragraph center">
        <!-- Replace with real screenshots if available -->
        <img class="pc-screenshot" src="img/projects/roguelike-magic/screenshot.png" alt="Roguelike Magic Screenshot" />
      </div>
      `,
      "#23bd69",
      false,
      true
    ),
    new ProjectData(
      "project-c-2",
      "Dino Boss",
      "img/projects/dinoboss/icon.png",
      `
      <div class="paragraph">
        <strong>Dino Boss</strong> is a thrilling boss fight experience that showcases advanced gameplay mechanics and dynamic AI behavior.<br />
        Drawing on my expertise as a Gameplay Engineer, this project pushes the boundaries of UEFN and Verse.
      </div>
    
      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/buuUdEiP0ho" frameborder="0" allowfullscreen></iframe>
      </div>
    
      <div class="paragraph">
        Key Features:
        <ul>
          <li>Custom UEFN state machine, animator, and boss AI built from scratch</li>
          <li>Implementation of both passive and active custom items</li>
          <li>Quests and accolades system</li>
          <li>Dynamic boss difficulty</li>
          <li>In game economy</li>
          <li>Integrated Player HUD</li>
          <li>Progressive area unlock system</li>
        </ul>
      </div>

        <div class="paragraph">
          <div class="notice">
            Fortnite island code: 9996-0287-9937
          </div>
        </div>
    
      <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/dinoboss/screenshot1.png" alt="Dino Boss Screenshot" />
        <img class="pc-screenshot" src="img/projects/dinoboss/screenshot2.png" alt="Dino Boss Screenshot" />
      </div>
      `,
      "#1ca1e2"
    ),


    new ProjectData(
        "project-c-3",
        "Only Up Stealth",
        "img/projects/stealth/icon.png",
        `
        <div class="paragraph">
          <strong>Only Up Stealth</strong> is an engaging stealth-platformer where the goal is simple: reach the top without dying.<br /> I implemented advanced enemy AI, designed intricate trap systems, and developed the core gameplay logic to deliver a challenging and immersive experience.
        </div>
      
        <div class="paragraph center">
          <iframe class="youtube" src="https://www.youtube.com/embed/NmY4I6pRZMM" frameborder="0" allowfullscreen></iframe>
        </div>
      
        <div class="paragraph">
          Key Features:
          <ul>
            <li>Enemy AI that reacts to player actions</li>
            <li>Trap mechanisms integrated throughout the levels</li>
            <li>More core gameplay mechanics ensuring a smooth and responsive experience</li>
          </ul>
        </div>
      
        <div class="paragraph">
          <div class="notice">
            Fortnite island code: 3158-7425-4105
          </div>
        </div>
        `,
        "#c10606",
        false,
        true
      ),

    new ProjectData("project-c-4", "More...", "img/projects/others/icon.png", `
    <div class="paragraph">
        Here's more of projects I contributed on (mostly core gameplay mechanic) clips/thumbnails/island codes!
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/uLjwsumXzvQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        SnoopDogg Box Fight island code: 6362-57110-3754<br/>
        G2 Champions Box Fights island code: 3514-5555-1360<br/>
        Donut Box PVP island code: 0353-3011-0108<br/>
        EON Box Hunt island code: 8012-6349-3767<br/>
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/others/donut-box.png" alt="Dino Boss Screenshot" /> </br>
        <img class="pc-screenshot" src="img/projects/others/g2box.png" alt="Dino Boss Screenshot" />
        <img class="pc-screenshot" src="img/projects/doggybox/1732754261334.jfif" alt="Dino Boss Screenshot" />
    </div>
    `, 
    "#f5a623",
    false,
    false)
];