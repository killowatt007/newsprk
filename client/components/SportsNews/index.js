import React from 'react';
import SportsCarousel from "../SportsCarousel";
import FontAwesome from "../uiStyle/FontAwesome";
import Link from 'next/link';

const sportsbig1 = "/img/sports/sportsbig1.jpg";

const SportsNews = ({dark}) => {
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
                                    <Link href="/">
                                        <img src={sportsbig1} alt="sportsbig1"/>
                                    </Link> <span className="tranding">
													<FontAwesome name="bolt"/>
												</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta3"><Link href="/">TECHNOLOGY</Link>
                                        <Link href="/">March 26, 2020</Link>
                                    </div>
                                    <h4><Link href="/post1">Copa America: Luis Suarez from
                                        devastated US</Link></h4>
                                    <div className="space-10"/>
                                    <p className="post-p">The property, complete with 30-seat
                                        screening from room, a 100-seat amphitheater and a swimming
                                        pond with sandy shower…</p>
                                    <div className="space-20"/>
                                    <Link href="/" className="readmore">Read More</Link>
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