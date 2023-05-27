import React, { useContext, useEffect } from "react";
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { CiMenuBurger } from 'react-icons/ci'
import { languageContext } from "../../hooks";
import './Navbar.scss'

const DATA = require('../../languages/LanguageSelector.json')
export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const LANG = useContext(languageContext)

    const handleClickScroll = (word) => {
        const element = document.getElementById(`${word}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav className="container">
                <div className="nav-left col-lg-2 col-sm-6 col-6">
                    <ul className="leftUl">
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100071974267605" target="_blank">
                                <ImFacebook color="#40739e" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/hikmatismayilav" target="_blank">
                                <ImTwitter color="#48dbfb" />

                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/doc.ismayilov/?hl=en" target="_blank">
                                <BsInstagram color="#ee5253" />

                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/4915735710442" target="_blank">
                                <ImWhatsapp color="#10ac84" />

                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/hikmat-ismayilov-aa8460a0/" target="_blank">
                                <AiFillLinkedin color="#273c75" />

                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-center col-lg-4">
                    <img src="/lastlogo.png"/>
                    
                </div>
                <div className="nav-right col-lg-5">
                    <ul>
                        <li onClick={() => { handleClickScroll('home') }} style={{ color: 'black' }}>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.home}
                            </a>
                        </li>
                        <li onClick={() => { handleClickScroll('contactus') }} style={{ color: 'black' }}>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.media}

                            </a>
                        </li>
                        <li style={{ color: 'black' }}>
                            <a onClick={() => { handleClickScroll('aboutsection') }}>
                                {DATA[`${String(LANG.lang)}`].navbar.about}

                            </a>
                        </li>
                        <li onClick={() => { handleClickScroll('videos') }} style={{ color: 'black' }}>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.showreels}

                            </a>
                        </li>
                        <li onClick={() => { handleClickScroll('galleryid') }} style={{ color: 'black' }}>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.gallery}

                            </a>
                        </li>
                        <li onClick={() => { handleClickScroll('serviceid') }} style={{ color: 'black' }}>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.resume}

                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-1 webLanguages">
                    <span
                        style={{ color: LANG.lang == 'az' ? '#0097e6' : 'black' }}
                        onClick={() => {
                            LANG.setLang('az')
                        }}>AZ | 
                        <img src="/azflag.png"/>
                        </span>
                    <span style={{ color: LANG.lang == 'en' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('en')
                        
                    }}> EN | 
                    <img src="/enflag.png"/></span>
                    <span style={{ color: LANG.lang == 'ru' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('ru')
                    }}> RU | 
                    <img src="/rusflag.png"/></span>
                    <span style={{ color: LANG.lang == 'de' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('de')
                    }}> DE
                    <img src="/deflag.png"/></span>
                </div>
                <div className="mobileNavbar col-lg-0 col-sm-6 col-6">


                    <CiMenuBurger className='burgerAnimation' style={{ opacity: isOpen ? '0%' : '100%', }} onClick={() => {
                        setIsOpen(!isOpen)
                    }} />
                    <GrClose className='closeAnimation' style={{ opacity: isOpen ? '100%' : '0%' }} onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                    />
                </div>
             
                <div style={{ width: isOpen ? '60%' : '0%', visibility: isOpen ? 'visible' : 'hidden', opacity: isOpen ? '100%' : '0%' }} className="navOpen">
                    <div className="container">
                        <ul >
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                    handleClickScroll('home') 
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.home}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                    handleClickScroll('contactus')
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.media}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                    handleClickScroll('aboutsection') 
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.about}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                    handleClickScroll('videos')
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.showreels}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                    handleClickScroll('galleryid')
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.gallery}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                    handleClickScroll('serviceid')
                                }} >
                                    {DATA[`${String(LANG.lang)}`].navbar.resume}

                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div className="mobileLogoImage">
                    <span
                        style={{ color: LANG.lang == 'az' ? '#0097e6' : 'black' }}
                        onClick={() => {
                            LANG.setLang('az')
                        }}>AZ | 
                        <img src="/azflag.png"/>
                        </span>
                    <span style={{ color: LANG.lang == 'en' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('en')
                    }}> EN | 
                        <img src="/enflag.png"/>
                    </span>
                    <span style={{ color: LANG.lang == 'ru' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('ru')
                    }}> RU | 
                        <img src="/rusflag.png"/>
                    </span>
                    <span style={{ color: LANG.lang == 'de' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('de')
                    }}> DE
                        <img src="/deflag.png"/>
                    </span>
                    <img src="/lastlogo.png" />
                </div>
        </header>
    )
}