import React from "react";
import { Slider } from "../Slider/Slider";
import { About } from "../AboutMe/About";
import { Video } from "../Video/Video";
import { Gallery } from "../Gallery/Gallery";
import { Contact } from "../Contact/Contact";
import { Services } from "../Services/Services";
export const Index = () => {
    return(
        <>
        <Slider/>
        <About/>
        <Services/>
        <Video/>
        <Contact/>
        <Gallery/>
        </>
    )
}