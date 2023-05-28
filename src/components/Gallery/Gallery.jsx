import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import Carousel from 'react-bootstrap/Carousel';
import { languageContext } from "../../hooks";
import ModalImage from "react-modal-image";


const DATA = require('../../languages/LanguageSelector.json')


const images = [
    {
        url: '/photo1.jpeg'
    },
    {
        url: '/photo2.jpeg'
    },
    {
        url: '/photo3.jpeg'
    },
    {
        url: '/photo4.jpeg'
    },
    {
        url: '/photo5.jpeg'
    },
    {
        url: '/photo6.jpeg'
    }
];

export const Gallery = () => {
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    const [open, setOpen] = React.useState(false);
    const LANG = React.useContext(languageContext)
    return (
        <div id='galleryid' className='gallery'>
            <div className='container'>
                {/* {
               <ImageGallery items={images}/>
                } */}
                {/* <Carousel  variant='dark' activeIndex={index} onSelect={handleSelect} draggable={true} >
                    {images.map((s) => {
                        return (
                            <Carousel.Item  style={{ height: '95vh' }}>
                                <img
                                    style={{ objectFit: 'cover', height: '95vh' }}
                                    className="d-block w-100"
                                    src={s.original}
                                   
                                />

                            </Carousel.Item>
                        )
                    })}

                </Carousel> */}

                <div className='galleryBorder'>
                    <h1>{DATA[`${LANG.lang}`].navbar.gallery}</h1>
                </div>

                <div className='photos'>

                    {images.map((p) => {
                        return (

                            <div className='col-lg-4'>

                            <ModalImage
                                className='singlePhoto col-lg-4 col-12'
                                small={p.url}
                                large={p.url}
                                
                                style={{objectFit:"cover"}}
                            />
                            </div>
                        )
                    })}
                </div>
                <a href='https://github.com/mammadlinurlan' target='_blank'>&copy; 2023 Developed by Mammadli Nurlan</a>
            </div>
        </div>
    )
}