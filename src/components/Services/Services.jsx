import React from "react";
import './Services.scss'
import { languageContext } from "../../hooks";
const DATA = require('../../languages/LanguageSelector.json')

export const Services = () => {
    const LANG = React.useContext(languageContext)
    return (
        <div id="serviceid" className="servicesWrapper">
            <div className="container">
                <div className="serviceBorderDiv">
                    <h1>{
                        DATA[`${LANG.lang}`].services.title
                    }</h1>
                </div>
                <div className="services">
                    <ul>
                        {
                            DATA[`${LANG.lang}`].services.serviceArray.map((s)=>{
                                return(
                                   <li>{s}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}