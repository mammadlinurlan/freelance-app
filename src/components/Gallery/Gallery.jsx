import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import Carousel from 'react-bootstrap/Carousel';



const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export const Gallery = () => {
    const [index, setIndex] = React.useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }
    const [open, setOpen] = React.useState(false);

    return (
        <div className='gallery'>
            <div className='container'>
                {/* {
               <ImageGallery items={images}/>
                } */}
                <Carousel  variant='dark' activeIndex={index} onSelect={handleSelect} draggable={true} >
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

                </Carousel>

            </div>
        </div>
    )
}