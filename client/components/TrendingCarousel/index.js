import React, {Fragment, useState} from 'react';
import Link from 'next/link';
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import { useRef } from 'react';

// images
const trends1 = '/img/trending/transm23.jpg';
const trends2 = '/img/trending/transm24.jpg';
const trends3 = '/img/trending/transm25.jpg';
const trends4 = '/img/trending/transm26.jpg';
const trends5 = '/img/trending/transm27.jpg';

import {mostViewSort} from "../../utils/commonFunctions";

const trends = [
    {
        image: trends1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        image: trends5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
    },
];

const TrendingCarousel = () => {
    const [swiper, setSwiper] = useState(null);
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
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className="popular_carousel multipleRowCarousel nav_style1">
            <Swiper ref={swip} {...params}>
                {mostViewSort(trends).map((item, i) => (
                    <div key={i}
                         className={`single_post type10 type16 widgets_small ${i + 2 < trends.length ? 'mb15' : ''}`}>
                        <div className="post_img">
                            <div className="img_wrap">
                                <Link href="/">
                                    <img src={item.image} alt="thumb"/>
                                </Link>
                            </div>
                        </div>
                        <div className="single_post_text">
                            <h4><Link href="/post1">{item.title}</Link></h4>
                            <div className="meta4"><Link href="/">{item.category}</Link></div>
                            {i + 2 < trends.length ? <Fragment>
                                <div className="space-10"/>
                                <div className="border_black"/>
                                <div className="space-10"/>
                            </Fragment> : ''}
                        </div>
                    </div>
                ))}
            </Swiper>
            <div className="navBtns">
                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
            </div>
        </div>
    );
};

export default TrendingCarousel;