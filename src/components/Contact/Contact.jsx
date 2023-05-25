import React from "react";
import axios from "axios";
import './Contact.scss'
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { languageContext } from "../../hooks";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const DATA = require('../../languages/LanguageSelector.json')

export const Contact = () => {
    const navigate = useNavigate()
    const LANG = React.useContext(languageContext)
    const sendEmail = (e) => {
        emailjs.sendForm("service_jyoofep","template_o02nv9r",e.target,"j93s7Crk2FCGgu-Eb")
        .then((res)=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your mail has been sent',
                showConfirmButton: false,
                timer: 1500
              })
              setTimeout(()=>{
                navigate(0);
              },1500)
        })
        .catch((err)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        })
    }
    return (
        <div id="contactus" className="contactus">
            <div className="container">
                <div className="col-lg-8 col-12 contactWrapper">
                    <div className="contact-top">
                        <h1>{DATA[`${LANG.lang}`].contact.title}</h1>
                    </div>
                    <div className="contact-bottom col-lg-12 col-12">
                        <div className="contact-left col-lg-5 col-12">
                            <div className="telmail">
                                <h1>{DATA[`${LANG.lang}`].contact.secTitle}</h1>
                                <p>testmail@gmail.com</p>
                                <p>Tel : +994(55)-555-55-55</p>
                            </div>
                            <div className="contact-icons">
                                <a href="https://www.facebook.com/profile.php?id=100071974267605" target="_blank"><ImFacebook /></a>
                                <a href="https://twitter.com/hikmatismayilov" target="_blank"><ImTwitter /></a>
                                <a href="https://www.instagram.com/doc.ismayilov/?hl=en" target="_blank"><BsInstagram /></a>
                                <a href="https://www.linkedin.com/in/hikmat-ismayilov-aa8460a0/" target="_blank"><AiFillLinkedin /></a>
                            </div>
                            <a id="wphref" href="https://wa.me/4915735710442" target="_blank">
                                {<ImWhatsapp/>} Whatsapp
                            </a>
                        </div>
                        <div className="contact-right col-lg-7 col-12">
                            <form
                            onSubmit={(e)=>{
                                e.preventDefault()
                                sendEmail(e)
                            }}
                             method="post">
                                <input required name="name"  placeholder={DATA[`${LANG.lang}`].contact.name} className="input-group"/>
                                <input required name="email" placeholder={DATA[`${LANG.lang}`].contact.email} type="email" className="input-group"/>
                                <input required name="subject" placeholder={DATA[`${LANG.lang}`].contact.subject} className="input-group"/>
                                <textarea name="message" style={{height:'150px',marginTop:'10px'}} required placeholder={DATA[`${LANG.lang}`].contact.message} className="input-group">

                                </textarea>
                                {/* <input required placeholder={DATA[`${LANG.lang}`].contact.message} type="text" className="input-group"/> */}

                                <button>{DATA[`${LANG.lang}`].contact.send}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}