import { Project } from "../components/Project";

const array = [
            {
            "name": "Allergy Clarity App",
            "video": "https://www.youtube.com/embed/Bywthdvu7OM?si=_asb6ktRj1OMPqfo",
            "description": "This is an app made in Godot for people with allergies to help them find safe places to eat out. This was a solo project. I build a custom map system using data from OpenStreetMap to draw roads and restaurants from real world coordinates. I also added a backend using Express and made naviagtion work through calling JS code in godot. I am very proud of this project",
            "link": "https://github.com/vultouri03/Allergy_Clarity"
          },
                    {
            "name": "Spiritbound Cannonball",
            "video": "https://www.youtube.com/embed/4CeVUjXrSYc?si=YyQbYIjW2sKRypEI",
            "description": "This was a 2d game project I worked on in a team of 5 people. I was responsible for the in game character animations, shaders, vfxs and getting those working in the unity engine. Slightly different from my usual code/design role but a great showcase of my versatility.",
          "link": "https://play.google.com/store/apps/details?id=com.explodingcatstudio.spiritboundcatnonball&pli=1",
          "label": "Google Play Store"
          },
                    {
            "name": "Food for Thought Serious Game",
            "video": "https://www.youtube.com/embed/RIhrfw11mII?si=Phec03Midj7rAm9d",
            "description": "This is a serious game made in Godot, with the purpose of helping people waste less food by teaching them about food storing and expiration dates. I worked on this project with 3 other students so the voice over in the video is not mine. I was responsible for the art, overal gameflow and working out testing plans and user interviews. This can still be downloaded via https://cesianahz.itch.io/foodforthought",
            "link": "https://github.com/vultouri03/TLE-2-Responsible-Consumption-Game/tree/Merger"
          },
                    {
                    "name": "Vedute Maker",
                    "video": "https://www.youtube.com/embed/Hpe1z2vm4Y4?si=QCgJ6QGJzyjz3l15",
                    "description": "This is the Vedute maker, an interactive art maker made for Stichting Vedute. I worked on this project with 4 other students, whose names are credited below. My role during this project was that of the Designer, meaning that I was responsible for the wireframes, sitemaps and styleguides and such. During the development I worked on both the layer switch functionality and the image imports. I also made sure that my designs were properly translated into the webapp.  ",
                    "link": "https://github.com/1010115/Vedute2"
          },
          {
                    "name": "DakparkGame",
                    "video": "https://www.youtube.com/embed/J0g4pfrnQ1Y?si=qmyN4H9aCf1rQ4Na",
                    "description": "This is a game I made for school in the javascript game engine known as excalibur. I was responsible for the player character and all of the art design for this game",
                    "link": "https://github.com/vultouri03/CLE4-DakParkGame"
          }, {
                    "name": "React Frontend for a webservice",
                    "video": "https://www.youtube.com/embed/dngz2o3TtdI?si=F4J146cxul04l0eD",
                    "description": "This is a frontend i designed for a school programing assignment. The goal here was to connect a react frontend to a node express webservice using mongo db. The frontend uses the react router dom library to allow for better routing and the use of modals to create new backend items.",
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