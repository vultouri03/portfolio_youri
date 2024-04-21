import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import { Project } from "../components/Project";

const array = [
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
          {
                    "name": "Vedute Maker",
                    "video": "https://www.youtube.com/embed/Hpe1z2vm4Y4?si=QCgJ6QGJzyjz3l15",
                    "description": "This is the Vedute maker, an interactive art maker made for Stichting Vedute. I worked on this project with 4 other students, whose names are credited below. My role during this project was that of the Designer, meaning that I was responsible for the wireframes, sitemaps and styleguides and such. During the development I worked on both the layer switch functionality and the image imports. I also made sure that my designs were properly translated into the webapp.  ",
                    "link": "https://github.com/1010115/Vedute2"
          }
]

const Projects = () => {


          const projectList = array.map((items, i) => (
                    <Project key={i} name={items.name} video={items.video} description={items.description} link={items.link}></Project>
          ))

          return (
                    <>
                              <div className="flex flex-wrap mb-2 2xl:ml-[8em] md:ml-[5em]">
                                        {projectList}
                              </div>

                    </>


          )
}

export default Projects