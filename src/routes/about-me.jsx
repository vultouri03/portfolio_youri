import { Outlet, Link } from "react-router-dom";
import * as React from "react";

const Aboutme = () => {
    return (
        <>
            <div className="text-gray-800 text-base">
                <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    <img className="object-cover object-top rounded-full h-72 w-64 border-4 border-double"
                        src="../src/assets/IMG_1013.jpg"
                        alt="" />
                </div>

                <div className="w-full px-3 border-white">
                    <div className="rounded border-white border hover:border-purple overflow-hidden shadow-lg bg-orange-200 place-items-center">
                        <div className="h-1/2">

                        </div>
                        <div className="px-6 py-4 pb-1/3">
                            <div className="font-bold text-xl mb-2 text-black">Introduction</div>
                            <p className=" text-base">
                                My name is Youri de Gier, I'm a Dutch student at Hogeschool Rotterdam, majoring in Creative Media and Game Technologies.
                            </p>
                            <p className=" text-base">
                                I'm 20 years old and have completed the VWO, the highest level of Highschool in the Netherlands, in the following subjects: Mathematics A, Dutch, English, Science, Physics, Biology, Art and German.
                            </p>

                            <p className="text-base pb-16">
                                I've chosen my current Study because of my interest in both programing and design. Which is something this study perfectly combines.
                            </p>
                            <div className="font-bold text-xl mb-2 text-black">My hobbies</div>
                            <p>
                                I have quite a few different hobbies I participate in during my freetime.
                            </p>
                            <p>
                                The first of those is playing Video Games. This hobby is the one that sparked my interest in learing how to code and get better at problem solving.
                            </p>
                            <p>This has recently evolved in me learning how to make Games in the game engine known as Godot.</p>
                            <p>I also spend a lot of my freetime drawing and practicing art. This is a hobby that I have had since I was young and most definitly sparked my interest in design.</p>
                            <p className="pb-16">I also like taking strolls around my hometown from time to time, and also read from time to time.</p>
                            <div className="font-bold text-xl mb-2 text-black">My Skills</div>
                            <p>I have learned many different skills during my study. From basic programing to design to thinking about the ethical questions regarding technology</p>
                            <p>My programing skills consist of the following languages:</p>
                            <ul className="list-disc list-inside py-2 text-blue-700">
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03/hyrulian-tour-guide-AI-chatbot">javascript, from basic Dom to using advanced librarys to make games or use AI language models.</a></li>
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03/Auto_Anatomizer-prg8-2">Machine learning techniques in javascript</a></li>
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03/portfolio_youri">REACTjs, to make beautifull frontends like this site.</a></li>
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03/prg-06-fullstack-eindopdracht">NODEjs, like express webservices.</a></li>
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03/Xenoblade-build-app">PHP, both base php and with laravel.</a></li>
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03/pinata-reservation-system">Databases, like SQL or MongoDB.</a></li>
                                <li><a className="hover:text-purple-600 text-black" href="">godot game engine. No Repository's yet.</a></li>
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03/prg04-eindopdracht">Can work using Object Oriented Programing.</a></li>
                                <li><a className="hover:text-purple-600" target="_blank" href="https://github.com/1010115/Vedute2">Develop in a team using Scrum and github branches</a></li>
                            </ul>
                            <p>I have also learned the basics of webdesign, down below are some links to a few design documents I have made. Note these are in Dutch because they were made for Dutch organisations</p>
                            <ul className="list-disc list-inside py-2 text-blue-700 ">
                                <li>
                                        <a className="hover:text-purple-600" target="_blank" href="https://drive.google.com/file/d/1vJijulEnjow9Q7RGp-NkCnupF4QX98Tb/view?usp=sharing">Design Vedute Maker</a>
                                </li>
                                <li>
                                    <a className="hover:text-purple-600" target="_blank" href="https://drive.google.com/file/d/1kzAkvL9oVwGlAHdOhS6hMPJxvLIgIPdu/view?usp=sharing">Design Pinata reserving site</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div></>
    )
}

export default Aboutme