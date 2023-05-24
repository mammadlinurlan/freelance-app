import React from "react";
import { Slider } from "../Slider/Slider";
import { About } from "../AboutMe/About";
import { Video } from "../Video/Video";
export const Index = () => {
    return(
        <>
        <Slider/>
        <About/>
        <Video/>
        </>
    )
}