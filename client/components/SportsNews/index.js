import React from 'react';
import SportsCarousel from "../SportsCarousel";
import FontAwesome from "../uiStyle/FontAwesome";
import {useRouter} from "next/router";

const sportsbig1 = "/img/sports/sportsbig1.jpg";

const SportsNews = ({dark}) => {
    const router = useRouter()

    return (
        <div className="row">
            <div className="col-12">
                <div className="sports">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <h2 className="widget-title">Sports News</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="single_post post_type3 mb30">
                                <div className="post_img">
                                    <a onClick={() => router.push('/')}>
                                        <img src={sportsbig1} alt="sportsbig1"/>
                                    </a> 
                                    <span className="tranding">
													<FontAwesome name="bolt"/>
												</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta3"><a onClick={() => router.push('/')}>TECHNOLOGY</a>
                                        <a onClick={() => router.push('/')}>March 26, 2020</a>
                                    </div>
                                    <h4><a onClick={() => router.push('/post1')}>Copa America: Luis Suarez from
                                        devastated US</a></h4>
                                    <div className="space-10"/>
                                    <p className="post-p">The property, complete with 30-seat
                                        screening from room, a 100-seat amphitheater and a swimming
                                        pond with sandy shower…</p>
                                    <div className="space-20"/>
                                    <a onClick={() => router.push('/')} className="readmore">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="sports_carousel nav_style1">
                                <SportsCarousel dark={dark ? dark : false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsNews;