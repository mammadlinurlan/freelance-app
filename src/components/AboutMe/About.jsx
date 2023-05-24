import './About.scss'
import { languageContext } from '../../hooks'
import { useContext, useEffect } from 'react'

let LANGUAGE_DATA = require('../../languages/LanguageSelector.json')

export const About = () => {
   const LANG = useContext(languageContext)
    return(
        <div className='aboutWrapper'>
            <div className='container'>
                <div className='forAboutImage col-lg-5 col-12 col-sm-12'>
                    <img src='/docpp.jpeg' />
                    {/* <img src='https://static.wixstatic.com/media/406cca_9e896797ae694a2096051ad79f9fe982~mv2.jpg/v1/crop/x_107,y_49,w_973,h_908/fill/w_973,h_908,al_c,q_85,enc_auto/406cca_9e896797ae694a2096051ad79f9fe982~mv2.jpg'/> */}
                    <div className='borderOnly col-lg-8 col-8 col-sm-8'>

                    </div>
                </div>
                <div className='forAboutInfo col-lg-4 col-12 col-sm-12'>
                    <h1 >
                        {LANGUAGE_DATA[`${LANG.lang}`].about.title}
                    </h1>
                    <p>
                    {LANGUAGE_DATA[`${LANG.lang}`].about.desc}

                    </p>
                    <a style={{textDecoration:'none',fontWeight:"500"}} href="https://www.linkedin.com/in/hikmat-ismayilov-aa8460a0/" target='_blank'>
                    {LANGUAGE_DATA[`${LANG.lang}`].about.button}
                    </a>
                </div>
            </div>
        </div>
    )
}