import React from "react";
import { Slider } from "../Slider/Slider";
import { About } from "../AboutMe/About";
import { Video } from "../Video/Video";
import { Gallery } from "../Gallery/Gallery";
import { Contact } from "../Contact/Contact";
export const Index = () => {
    return(
        <>
        <Slider/>
        <About/>
        <Video/>
        <Contact/>

        <Gallery/>
        </>
    )
}