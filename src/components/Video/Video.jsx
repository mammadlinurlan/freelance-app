import './Video.scss'
import { useContext } from 'react'
import { languageContext } from '../../hooks'
const data = require("../../languages/LanguageSelector.json")
export const Video = () => {
    const context = useContext(languageContext)
    return (
        <div id='videos' className='videoWrapper'>
            <div className="container">
            <div className='videoBorder col-lg-12 col-12'>
                        <h1>{data[`${context.lang}`].navbar.showreels}</h1>
                    </div>
                <div className='videos row'>
                   
                    <video className='col-lg-8 col-12' poster='./thumbnail1.webp' src='/modernp.mp4' controls>

                    </video>
                    <video className='col-lg-8 col-12' poster='./thumbnail2.webp' src='/vinci.mp4' controls>

                    </video>
                </div>

            </div>
        </div>
    )
}