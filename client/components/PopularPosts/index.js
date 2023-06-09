import React from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import {mostViewSort} from "../../utils/commonFunctions";
import Link from 'next/link';
import { useRef } from 'react';

// images
const popularsm1 = '/img/popular/popularsm1.jpg';
const popularsm2 = '/img/popular/popularsm2.jpg';
const popularsm3 = '/img/popular/popularsm3.jpg';
const popularsm4 = '/img/popular/popularsm4.jpg';
const popularsm5 = '/img/popular/popularsm5.jpg';

const populerPOsts = [
    {
        image: popularsm1,
        category: 'TECHNOLOGY',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        image: popularsm2,
        category: 'TECHNOLOGY',
        title: 'Cheap smartphone sensor could help you old.',
    },
    {
        image: popularsm3,
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
    {
        image: popularsm4,
        category: 'TECHNOLOGY',
        title: 'The secret to moving this from sphinx screening',
    },
    {
        image: popularsm5,
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
    {
        image: popularsm1,
        category: 'TECHNOLOGY',
        title: 'The property complete with a 30 seat screen room.',
    },
    {
        image: popularsm2,
        category: 'TECHNOLOGY',
        title: 'Cheap smartphone sensor could help you old.',
    },
    {
        image: popularsm3,
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
    {
        image: popularsm4,
        category: 'TECHNOLOGY',
        title: 'The secret to moving this from sphinx screening',
    },
    {
        image: popularsm5,
        category: 'TECHNOLOGY',
        title: 'Harbour amid a Slowen the down in singer city',
    },
];

const PopularPosts = () => {
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
        loops: true,
        slidesPerView: 1,
        slidesPerColumn: 6,
    };
    return (
        <div className="popular_carousel_area mb30 md-mt-30">
            <h2 className="widget-title">Popular Posts</h2>
            <div className="popular_carousel pt-15 multipleRowCarousel nav_style1">
                {/*CAROUSEL START*/}
                <Swiper ref={swip} {...params}>
                    {mostViewSort(populerPOsts).map((item, i) => (
                        <div key={i} className="single_post type10 widgets_small mb15">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link href="/">
                                        <img src={item.image} alt="thubm"/>
                                    </Link>
                                </div>
                                <span className="tranding tranding_border">{item.id}</span>
                            </div>
                            <div className="single_post_text">
                                <h4><Link href="/post1">{item.title}</Link></h4>
                                <div className="meta4"><Link href="/">{item.category}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Swiper>
                <div className="navBtns">
                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                </div>
                {/*CAROUSEL END*/}
            </div>
        </div>
    );
};

export default PopularPosts;