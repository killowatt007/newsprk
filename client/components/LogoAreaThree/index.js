import React from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import FontAwesome from "../uiStyle/FontAwesome";
import { useRef } from 'react';

const tempIcon = "/img/icon/s4.png";
const logo = "/img/logo/logo41.png";

const LogoAreaThree = () => {
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
        <div className="logo_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 align-self-center">
                        <div className="logo4">
                            <Link href="/index">
                                <img src={logo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 align-self-center">
                        <div className="row">
                            <div className="col-12">
                                <div className="topbar">
                                    <div className="row">
                                        <div className="col-md-8 align-self-center">
                                            <div className="trancarousel_area">
                                                <p className="trand">Tranding</p>
                                                <div className="nav_style1">
                                                    <Swiper ref={swip} className="trancarousel" {...params}>
                                                        <div className="trancarousel_item">
                                                            <p><Link href="/">Top 10 Best Movies of 2018 So Far: Great
                                                                Movies To Watch
                                                                Now</Link>
                                                            </p>
                                                        </div>
                                                        <div className="trancarousel_item">
                                                            <p><Link href="/">Top 10 Best Movies of 2018 So Far: Great
                                                                Movies To Watch
                                                                Now</Link>
                                                            </p>
                                                        </div>
                                                        <div className="trancarousel_item">
                                                            <p><Link href="/">Top 10 Best Movies of 2018 So Far: Great
                                                                Movies To Watch
                                                                Now</Link>
                                                            </p>
                                                        </div>
                                                    </Swiper>
                                                    <div className="navBtns">
                                                        <button className="navBtn prevBtn" onClick={goPrev}><FontAwesome
                                                            name="angle-left"/>
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
                                                <div className="user3"><FontAwesome name="user-circle"/></div>
                                                <div className="lang-3">
                                                    <ul>
                                                        <li><Link href="/">English <FontAwesome name="angle-down"/></Link>
                                                            <ul>
                                                                <li><Link href="/">Spanish</Link>
                                                                </li>
                                                                <li><Link href="/">China</Link>
                                                                </li>
                                                                <li><Link href="/">Hindi</Link>
                                                                </li>
                                                                <li><Link href="/">Corian</Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-5"/>
                        <div className="border4"/>
                        <div className="space-20"/>
                        <div className="row justify-content-end">
                            <div className="space-5"/>
                            <div className="col-md-6 col-lg-5 align-self-center">
                                <div className="v3datentemp">
                                    <div className="date4">
                                        <h5>Thursday <span>March 26, 2020</span></h5>
                                    </div>
                                    <div className="temp d-none d-lg-block">
                                        <div className="temp_wap">
                                            <div className="temp_icon">
                                                <img src={tempIcon} alt="icon"/>
                                            </div>
                                            <h3 className="temp_count">13</h3>
                                            <p>San Francisco</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 align-self-center fix_width_social">
                                <div className="social4 text-right">
                                    <ul className="inline">
                                        <li><Link href="/"><FontAwesome name="twitter"/></Link></li>
                                        <li><Link href="/"><FontAwesome name="facebook-f"/></Link></li>
                                        <li><Link href="/"><FontAwesome name="youtube-play"/></Link></li>
                                        <li><Link href="/"><FontAwesome name="instagram"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoAreaThree;