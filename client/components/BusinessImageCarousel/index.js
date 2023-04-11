import React, {Fragment} from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import FontAwesome from "../uiStyle/FontAwesome";
import { useRef } from 'react';

const pop51 = '/img/popular/pop51.jpg';
const pop52 = '/img/popular/pop52.jpg';
const pop53 = '/img/popular/pop53.jpg';
const pop54 = '/img/popular/pop54.jpg';
const pop56 = '/img/popular/pop56.jpg';
const gallery42 = '/img/gallary/gallery42.jpg';

const populerPosts = [
    {
        photo: pop51,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop52,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop53,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop54,
        title: 'The city with highest quality of life in world.'
    },
    {
        photo: pop56,
        title: 'The city with highest quality of life in world.'
    },
];

const galleryPosts = [
    {
        photo: gallery42,
        title: 'apan’s virus success has puzzled the world. Is its luck running out?'
    },
    {
        photo: gallery42,
        title: 'apan’s virus success has puzzled the world. Is its luck running out?'
    },
    {
        photo: gallery42,
        title: 'apan’s virus success has puzzled the world. Is its luck running out?'
    },
];

const BusinessImageCarousel = () => {
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
        loop: true,
    };

    return (
        <div className="row">
            <div className="col-lg-7">
                <div className="image_carousel nav_style4 mb30">
                    <Swiper ref={swip} {...params}>
                        {galleryPosts.map((item, i) => (
                            <div key={i} className="single_post gradient1 post_type6 border-radious7 xs-mb30">
                                <div className="post_img gradient1">
                                    <div className="img_wrap">
                                        <Link href="/">
                                            <img src={item.photo} alt="thumb"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="single_post_text">
                                    <p className="meta meta_style4">Business <span>&nbsp;| &nbsp; March 26, 2020</span>
                                    </p>
                                    <h4><Link href="/video_post1">{item.title}</Link></h4>
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
            <div className="col-lg-5">
                <div className="padding20 white_bg border-radious5 mb30">
                    <p className="meta before">Technology</p>
                    <div className="space-15"/>
                    {populerPosts.map((item, i) => (
                        <Fragment key={i}>
                            <div className="single_post type10 type16 type22 widgets_small mb15">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <Link href="/"><img src={item.photo} alt="thumb"/></Link>
                                    </div>
                                </div>
                                <div className="single_post_text">
                                    <h4><Link href="/">{item.title}</Link></h4>
                                </div>
                            </div>
                            {i + 1 < populerPosts.length ? <Fragment>
                                <div className="space-15"/>
                                <div className="border4"/>
                                <div className="space-15"/>
                            </Fragment> : null}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessImageCarousel;