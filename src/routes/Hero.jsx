import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import '../css/tailwind.css'
import {useState} from "react";

const Hero = () => {


    return (
          <div className="min-h-[100em] w-full bg-cover bg-repeat bg-center rounded-lge bg-hero-pattern">
                    <Outlet/>
            </div>
        
    )
};

export default Hero;