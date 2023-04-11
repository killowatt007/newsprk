import React from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import FontAwesome from "../uiStyle/FontAwesome";
import { useRef } from 'react';

const TopBarTwo = () => {
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
        <div className="topbar white_bg" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 align-self-center">
                        <div className="trancarousel_area">
                            <p className="trand">Tranding</p>
                            <div className="trancarousel nav_style1">
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
                            <div className="social1">
                                <ul className="inline">
                                    <li><Link href="/"><FontAwesome name="twitter"/></Link></li>
                                    <li><Link href="/"><FontAwesome name="facebook-f"/></Link></li>
                                    <li><Link href="/"><FontAwesome name="youtube-play"/></Link></li>
                                    <li><Link href="/"><FontAwesome name="instagram"/></Link></li>
                                </ul>
                            </div>
                            <div className="user3"><FontAwesome name="user-circle"/></div>
                            <div className="lang-3"><Link href="#">English <FontAwesome name="angle-down"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBarTwo;