import { Project } from "../components/Project";

const array = [
  {
            "name": "Truckin' it",
            "video": "https://www.youtube.com/embed/JrAnVxq0wRE?si=T42TojqiH5tNrbz8",
            "description": "Together with 21 other students we formed a small gamestudio known as Glorporation Games to make a 3d online package delivery game in unity. I was a developer who mainly worked on Player statemanagement using statemachines. Intergrating that with the other systems in the game like being able to pick up packages or being able to enter and exit the truck. I also developed the moving hazards which are also synced over the network. Beyond that I spend a lot of time assisting the other developers with testing and bugfixing wherever needed. This was a great experience to work in a team of 22 people and learn how to work together to make a game.",
            "link": "https://store.steampowered.com/app/4150960/Truckin_It/",
            "label": "Steam page"
          },
  {
            "name": "Allergy Wiki (Graduation Project)",
            "video": "https://youtube.com/embed/ing8KtDfzDM",
            "description": "For my graduation, I continued developing Allergy Clarity to better solve the problem that the application didn't feel save for people with allergies. To do this I rebuild the entire app in Flutter for better performance and better cross platform support. The rest of the project was focused on mainly making the frontend feel more safe and reliable for people with allergies, by providing better sources and actual reviews from other users. This gives a user all information they need to make a sound decision on wether they can safely eat at a restaurant or not.",
            "link": "https://github.com/vultouri03/Allergy_Wiki"
          },
           
                    {
            "name": "Spiritbound Cannonball",
            "video": "https://www.youtube.com/embed/4CeVUjXrSYc?si=YyQbYIjW2sKRypEI",
            "description": "This was a 2d game project I worked on in a team of 5 people. I was responsible for the in game character animations, shaders, vfxs and getting those working in the unity engine. Slightly different from my usual code/design role but a great showcase of my versatility.",
          "link": "https://play.google.com/store/apps/details?id=com.explodingcatstudio.spiritboundcatnonball&pli=1",
          "label": "Google Play Store"
          },
           {
            "name": "Allergy Clarity App",
            "video": "https://www.youtube.com/embed/Bywthdvu7OM?si=_asb6ktRj1OMPqfo",
            "description": "This is an app made in Godot for people with allergies to help them find safe places to eat out. This was a solo project. I build a custom map system using data from OpenStreetMap to draw roads and restaurants from real world coordinates. I also added a backend using Express and made naviagtion work through calling JS code in godot. I am very proud of this project",
            "link": "https://github.com/vultouri03/Allergy_Clarity"
          },
                    {
            "name": "Food for Thought Serious Game",
            "video": "https://www.youtube.com/embed/RIhrfw11mII?si=Phec03Midj7rAm9d",
            "description": "This is a serious game made in Godot, with the purpose of helping people waste less food by teaching them about food storing and expiration dates. I worked on this project with 3 others so the voice over in the video is not mine. I was responsible for the art. Developing the backend LMM code and the flow of switching scenes, aswell as working out testing plans and user interviews. This can still be downloaded via https://cesianahz.itch.io/foodforthought",
            "link": "https://github.com/vultouri03/TLE-2-Responsible-Consumption-Game/tree/Merger"
          },
                    {
                    "name": "Vedute Maker",
                    "video": "https://www.youtube.com/embed/Hpe1z2vm4Y4?si=QCgJ6QGJzyjz3l15",
                    "description": "This is the Vedute maker, an interactive art maker made for Stichting Vedute. I worked on this project with 4 others. My role during this project was as a designing developer, meaning that I was responsible for both the wireframes, sitemaps and styleguides and such, aswell as assisting in the development process. During the development I worked on both the layer switch functionality and the image imports. I also made sure that my designs were properly translated into the webapp.  ",
                    "link": "https://github.com/1010115/Vedute2"
          },
          {
                    "name": "DakparkGame",
                    "video": "https://www.youtube.com/embed/J0g4pfrnQ1Y?si=qmyN4H9aCf1rQ4Na",
                    "description": "This is a simple game made in excabilur together with 3 others. I handled the player movement, aswell as some of the art in the game.",
                    "link": "https://github.com/vultouri03/CLE4-DakParkGame"
          },




]

const Projects = () => {


          const projectList = array.map((items, i) => (
                    <Project key={i} name={items.name} video={items.video} description={items.description} link={items.link} linkLabel={items.label}></Project>
          ))

          return (
                    <>
                              <div className="flex flex-wrap mb-2 object-center justify-center">
                                        {projectList}
                              </div>

                    </>


          )
}

export default Projects