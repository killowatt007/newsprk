import React, {useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import ModalVideo from 'react-modal-video'
import {useRouter} from "next/router";
import { useRef } from 'react';

const black_white1 = '/img/bg/black_white1.jpg';
const black_white2 = '/img/bg/black_white2.jpg';

const mixArray = [
    {
        icon: 'play',
        image: black_white1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Success is not a good food failure makes you humble',
    },
    {
        icon: 'bolt',
        image: black_white2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Success is not a good food failure makes you humble',
    },
    {
        icon: 'play',
        image: black_white1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Success is not a good food failure makes you humble',
    },
    {
        icon: 'bolt',
        image: black_white2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Success is not a good food failure makes you humble',
    },
];

const MixCarousel = ({className, dark}) => {
    const [vModal, setvModal] = useState(false);
    const [videoId] = useState('0r6C3z3TEKw');
    const router = useRouter()
    const swip = useRef(null);

    const goNext = () => {
        if (swip.current !== null && swip.current.swiper !== null) {
            swip.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swip.current !== null && swip.current.swiper !== null) {
            swip.current.swiper.slidePrev();
        }
    };
    const params = {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 0
            },
        }
    };
    return (
        <div className={`mix_area ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={`mix_carousel ${dark ? 'primay_bg' : ''}`}>
                            {/*CAROUSEL START*/}
                            <div className="single_mix_carousel nav_style3">
                                <Swiper ref={swip} {...params}>
                                    {mixArray.map((item, i) => (
                                        <div key={i} className="single_post post_type6 post_type9">
                                            <div className="post_img gradient1">
                                                <div className="img_wrap">
                                                    <a className="play_btn" onClick={() => router.push('/')}>
                                                        <img src={item.image} alt="news"/>
                                                    </a>
                                                </div>
                                                <span onClick={() => setvModal(true)}
                                                      className={`tranding ${i % 2 ? 'left' : ''}`}><FontAwesome
                                                    name={item.icon}/></span>
                                            </div>
                                            <div className="single_post_text">
                                                <div className="meta"><a onClick={() => router.push('/')}>{item.category}</a>
                                                    <a onClick={() => router.push('#')}>{item.date}</a>
                                                </div>
                                                <h4><a onClick={() => router.push('/video_post1')}>{item.title}</a></h4>
                                            </div>
                                        </div>
                                    ))}
                                </Swiper>
                                <div className="owl-nav">
                                    <div onClick={goPrev} className="owl-prev"><FontAwesome name="angle-left"/></div>
                                    <div onClick={goNext} className="owl-next"><FontAwesome name="angle-right"/></div>
                                </div>
                            </div>
                        </div>
                        {/*CAROUSEL END*/}
                    </div>
                </div>
            </div>
            <div className="space-30"/>
            <ModalVideo channel='youtube' isOpen={vModal} videoId={videoId}
                        onClose={() => setvModal(false)}/>
        </div>
    );
};

export default MixCarousel;