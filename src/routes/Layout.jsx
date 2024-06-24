import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import Hero from "./Hero";
import {useState} from "react";

const Layout = () => {

    const [visability, setVisability] = useState("block sm:invisible");


    return (
        <>
            <nav
                className="flex justify-between flex-wrap p-3 bg-red-600 sticky top-0 w-full z-10 mt-0 shadow-md ">
                <div className="flex items-center flex-shrink-0 text-white mr-6 w-full p-3 bg-blue-800 mb-5 rounded justify-center">
                    <span className="font-semibold text-xl tracking-tight">Youri's portfolio</span>
                </div>

                <div className="block">
                    <Link to="/">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        about-me
                    </button>
                    </Link>
                </div>
                <div className="block">
                    <Link to="projects">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        Video demo's
                    </button>
                    </Link>
                </div>
                <div className="block ">
                    <Link to="contact">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        contact
                    </button>
                    </Link>
                </div>
            </nav>

            <Hero><Outlet /></Hero>
            
        </>
    )
};

export default Layout;