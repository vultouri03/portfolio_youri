import { Outlet, Link } from "react-router-dom";
import * as React from "react";

const Aboutme = () => {
    return (
        <>
            <div className="text-gray-800 text-base">
                <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    <img className="object-cover object-center rounded-full h-72 w-64 border-4 border-double"
                        src="https://media.discordapp.net/attachments/916820208214212661/1231938230392455248/IMG_1013.jpg?ex=66284c22&is=6626faa2&hm=01ff4d6b56729cd48681468334f6536076ea9e8a0a4c5429798c3682de51da78&=&format=webp&width=446&height=662"
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
                            <ul className="list-disc list-inside py-2 ">
                                <li>javascript, from basic Dom to using advanced librarys to make games or use AI language models.</li>
                                <li>REACTjs, to make beautifull frontends like this site.</li>
                                <li>NODEjs, like express webservices.</li>
                                <li>PHP, both base php and with laravel.</li>
                                <li>Databases, like SQL or MongoDB.</li>
                                <li>godot game engine.</li>
                                <li>Can work using Object Oriented Programing.</li>
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