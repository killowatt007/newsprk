import React from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import {useRouter} from "next/router";
import { useRef } from 'react';

// images
const sports2 = '/img/sports/sports2.jpg';
const sports3 = '/img/sports/sports3.jpg';
const sports4 = '/img/sports/sports4.jpg';
const sports5 = '/img/sports/sports5.jpg';
const sports6 = '/img/sports/sports6.jpg';
const blog_small1 = '/img/blog/blog_small1.jpg';
const blog_small2 = '/img/blog/blog_small2.jpg';
const blog_small3 = '/img/blog/blog_small3.jpg';
const blog_small4 = '/img/blog/blog_small4.jpg';
const blog_small5 = '/img/blog/blog_small5.jpg';

import {mostViewSort} from "../../utils/commonFunctions";

const mostView = [
    {
        image: sports2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        image: sports3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        image: sports4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Cheap smartphone sensor could help you',
    },
    {
        image: sports5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Ratiffe to be Director of nation talent Trump',
    },
    {
        image: sports6,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        image: blog_small1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        image: blog_small2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka',
    },
    {
        image: blog_small3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'The billionaire Philan thropist read to learn',
    },
    {
        image: blog_small4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Cheap smartphone sensor could help you',
    },
    {
        image: blog_small5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Ratiffe to be Director of nation talent Trump',
    },
];

const SportsCarousel = ({dark}) => {
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
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className="widget tab_widgets">
            <div className="post_type2_carousel multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper ref={swip} {...params}>
                    {mostViewSort(mostView).map((item, i) => (
                        <div key={i} className="single_post2_carousel">
                            <div className="single_post widgets_small">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <a onClick={() => router.push('/')}><img src={item.image} alt="thumb"/></a>
                                    </div>
                                    <span className="tranding"><FontAwesome name="bolt"/></span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2"><a onClick={() => router.push('/')}>{item.category}</a>
                                        <a onClick={() => router.push('/')}>{item.date}</a>
                                    </div>
                                    <h4><a onClick={() => router.push('/post1')}>{item.title}</a></h4>
                                </div>
                            </div>
                            <div className="space-15"/>
                            {dark ? <div className="border_white"/> : <div className="border_black"/>}
                            <div className="space-15"/>
                        </div>
                    ))}
                </Swiper>
                <div className="navBtns">
                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                </div>
            </div>
        </div>
    );
};

export default SportsCarousel;