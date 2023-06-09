import React from 'react';
import Swiper from 'react-id-swiper';
import FontAwesome from "../uiStyle/FontAwesome";
import Link from 'next/link';
import { useRef } from 'react';

const TopBar = ({className, dark}) => {
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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };
    return (
        <div className={`topbar ${className ? className : ''}`} id="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 align-self-center">
                        <div className={`trancarousel_area ${dark ? 'white' : ''}`}>
                            <p className="trand">Tranding</p>
                            <div className="nav_style1">
                                <Swiper ref={swip} className="trancarousel" {...params}>
                                    <div className="trancarousel_item">
                                        <p><Link href="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                    <div className="trancarousel_item">
                                        <p><Link href="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                    <div className="trancarousel_item">
                                        <p><Link href="/">Top 10 Best Movies of 2018 So Far: Great Movies To Watch
                                            Now</Link>
                                        </p>
                                    </div>
                                </Swiper>
                                <div className="navBtns">
                                    <button className="navBtn prevBtn" onClick={goPrev}><FontAwesome name="angle-left"/>
                                    </button>
                                    <button className="navBtn nextBtn" onClick={goNext}><FontAwesome
                                        name="angle-right"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <div className="top_date_social text-right">
                            <div className={`paper_date ${dark ? 'white' : ''}`}>
                                <p>Thursday, March 26, 2020</p>
                            </div>
                            <div className={`social1 ${dark ? 'white' : ''}`}>
                                <ul className="inline">
                                    <li><Link href="#"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link href="#"><FontAwesome name="facebook-f"/></Link></li>
                                    <li><Link href="#"><FontAwesome name="youtube-play"/></Link></li>
                                    <li><Link href="#"><FontAwesome name="instagram"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;