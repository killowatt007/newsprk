import React from 'react';
import Heading from "../uiStyle/Heading";
import Swiper from 'react-id-swiper';
import {useRouter} from "next/router";
import FontAwesome from "../uiStyle/FontAwesome";
import { useRef } from 'react';

const news = [
    {
        image: '/img/feature/feature2.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: '/img/feature/feature3.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: '/img/feature/feature4.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: '/img/feature/feature3.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: '/img/feature/feature4.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: '/img/feature/feature3.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
];

const FeatureNews = ({className}) => {
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
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    };
    return (
        <div className={`feature_carousel_area mb40 ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Heading title="Feature News"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/*CAROUSEL START*/}
                        <div className="feature_carousel nav_style1">
                            <Swiper ref={swip} {...params}>
                                {news.map((item, i) => (
                                    <div key={i} className="single_post post_type6 post_type7">
                                        <div className="post_img gradient1">
                                            <a onClick={() => router.push('/')}>
                                                <img src={item.image} alt="thumb"/>
                                            </a>
                                        </div>
                                        <div className="single_post_text">
                                            <div className="meta5">
                                                <a onClick={() => router.push('/')}>
                                                    {item.category}
                                                </a>
                                                <a onClick={() => router.push('/')}>
                                                    {item.date}
                                                </a>
                                            </div>
                                            <h4>
                                                <a onClick={() => router.push('/')}>
                                                    {item.title}
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </Swiper>
                            <div className="navBtns">
                                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                            </div>
                        </div>
                        {/*CAROUSEL END*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureNews;