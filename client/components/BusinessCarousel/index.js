import React from 'react';
import Link from 'next/link';
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import { useRef } from 'react';

const smslide41 = '/img/trending/smslide41.jpg';
const smslide42 = '/img/trending/smslide42.jpg';
const smslide43 = '/img/trending/smslide43.jpg';

const businessPosts = [
    {
        photo: smslide41,
        category: 'Technology',
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: smslide42,
        category: 'Technology',
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: smslide43,
        category: 'Technology',
        title: 'Why clinician spiritual health matters in the covid-19 crisis: you can’t pour from an empty cup…',
        description: 'The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
];
const BusinessCarousel = () => {
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
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    };
    return (
        <div className="business_carousel nav_style4 mb30 ">
            <Swiper ref={swip} {...params}>
                {businessPosts.map((item, i) => (
                    <div key={i} className="business_carousel_items white_bg padding20 shadow7">
                        <div className="single_international">
                            <p className="meta before">{item.category}</p>
                            <h4><Link href="/">{item.title}</Link></h4>
                            <div className="row">
                                <div className="col-8 align-self-center">
                                    <p>{item.description}</p>
                                </div>
                                <div className="col-4 align-self-center">
                                    <div className="img_wrap">
                                        <Link href="/">
                                            <img src={item.photo} alt="thumb"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <ul className="mt20 like_cm">
                                <li><Link href="/"><FontAwesome name="eye"/> 6745</Link></li>
                                <li><Link href="/"><FontAwesome name="heart"/> 6745</Link></li>
                                <li><Link href="/"><FontAwesome name="share"/> 6745</Link></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </Swiper>
            <div className="owl-nav">
                <div onClick={goPrev} className="owl-prev"><FontAwesome name="angle-left"/></div>
                <div onClick={goNext} className="owl-next"><FontAwesome name="angle-right"/></div>
            </div>
        </div>
    );
};

export default BusinessCarousel;