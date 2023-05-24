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

    return (
        <header>
            <nav className="container">
                <div className="nav-left col-lg-2 col-sm-6 col-6">
                    <ul className="leftUl">
                        <li>
                            <a href="" target="_blank">
                                <ImFacebook color="#40739e" />
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <ImTwitter color="#48dbfb" />

                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <BsInstagram color="#ee5253" />

                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <ImWhatsapp color="#10ac84" />

                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <AiFillLinkedin color="#273c75" />

                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-center col-lg-4">

                </div>
                <div className="nav-right col-lg-5">
                    <ul>
                        <li>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.home}
                            </a>
                        </li>
                        <li>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.media}

                            </a>
                        </li>
                        <li>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.about}

                            </a>
                        </li>
                        <li>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.showreels}

                            </a>
                        </li>
                        <li>
                            <a>
                                {DATA[`${String(LANG.lang)}`].navbar.gallery}

                            </a>
                        </li>
                        <li>
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
                        }}>AZ | </span>
                    <span style={{ color: LANG.lang == 'en' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('en')
                    }}> EN | </span>
                    <span style={{ color: LANG.lang == 'ru' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('ru')
                    }}> RU | </span>
                    <span style={{ color: LANG.lang == 'de' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('de')
                    }}> DE</span>
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
                <div className="mobileLogoImage">
                    <span
                        style={{ color: LANG.lang == 'az' ? '#0097e6' : 'black' }}
                        onClick={() => {
                            LANG.setLang('az')
                        }}>AZ | </span>
                    <span style={{ color: LANG.lang == 'en' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('en')
                    }}> EN | </span>
                    <span style={{ color: LANG.lang == 'ru' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('ru')
                    }}> RU | </span>
                    <span style={{ color: LANG.lang == 'de' ? '#0097e6' : 'black' }} onClick={() => {
                        LANG.setLang('de')
                    }}> DE</span>
                    <img src="https://static.wixstatic.com/media/406cca_d8dbd28a6a994dc583210adfd2fdcae8~mv2_d_2133_2133_s_2.png/v1/crop/x_0,y_890,w_2133,h_342/fill/w_560,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20design-01.png" />
                </div>
                <div style={{ width: isOpen ? '60%' : '0%', visibility: isOpen ? 'visible' : 'hidden', opacity: isOpen ? '100%' : '0%' }} className="navOpen">
                    <div className="container">
                        <ul >
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.home}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.media}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.about}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.showreels}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                }}>
                                    {DATA[`${String(LANG.lang)}`].navbar.gallery}

                                </a>
                            </li>
                            <li>
                                <a onClick={() => {
                                    setIsOpen(!isOpen)
                                }} href="">
                                    {DATA[`${String(LANG.lang)}`].navbar.resume}

                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}