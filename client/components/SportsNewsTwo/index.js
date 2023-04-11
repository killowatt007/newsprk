import React, {Fragment} from 'react';
import Link from 'next/link';
import FontAwesome from "../uiStyle/FontAwesome";

const sports41 = '/img/sports/sports41.jpg';
const sports42 = '/img/sports/sports42.jpg';
const sports43 = '/img/sports/sports43.jpg';
const sports44 = '/img/sports/sports44.jpg';
const sports45 = '/img/sports/sports45.jpg';
const sports46 = '/img/sports/sports46.jpg';
const sports47 = '/img/sports/sports47.jpg';

const sportsNews = [
    {
        photo: sports42,
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports43,
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports44,
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports45,
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports46,
        title: 'Copa America: Luis Suarez from devastated US',
    },
    {
        photo: sports47,
        title: 'Copa America: Luis Suarez from devastated US',
    },
];

const SportsNewsTwo = () => {
    return (
        <div className="sports_wrap mb30 white_bg border-radious5 shadow7 padding20">
            <div className="finance ">
                <div className="heading">
                    <h3 className="widget-title">Sports</h3>
                </div>
                <div className="single_post type18">
                    <div className="post_img">
                        <div className="img_wrap">
                            <Link href="/">
                                <img src={sports41} alt="sports41"/>
                            </Link>
                        </div>
                        <span className="batch3 date">April 26, 2020</span>
                    </div>
                    <div className="single_post_text py0">
                        <h4><Link href="/post1">Copa America: Luis Suarez from devastated US</Link></h4>
                        <div className="space-10"/>
                        <p className="post-p">The property, complete with seates screening from room amphitheater
                            pond with sandy</p>
                        <ul className="mt10 like_cm">
                            <li><Link href="/"><FontAwesome name="eye"/> 6745</Link></li>
                            <li><Link href="/"><FontAwesome name="heart"/> 6745</Link></li>
                            <li><Link href="/"><FontAwesome name="share"/> 6745</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="space-30"/>
                <div className="border4"/>
                <div className="space-30"/>
            </div>
            <div className="sport_buttom">
                {sportsNews.map((item, i) => (
                    <Fragment key={i}>
                        <div className="single_post type10 type16 widgets_small mb15">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link href="/">
                                        <img src={item.photo} alt="thumb"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="single_post_text">
                                <h4><Link href="/">{item.title}</Link></h4>
                                <ul className="like_cm">
                                    <li><Link href="/"><FontAwesome name="eye"/> 6745</Link></li>
                                    <li><Link href="/"><FontAwesome name="heart"/> 6745</Link></li>
                                </ul>
                            </div>
                        </div>
                        {i + 1 < sportsNews.length ? <Fragment>
                            <div className="space-15"/>
                            <div className="border4"/>
                            <div className="space-15"/>
                        </Fragment> : null}
                    </Fragment>
                ))}
                <div className="space-20"/>
                <Link href="/" className="showmore">Show more</Link>
            </div>
        </div>
    );
};

export default SportsNewsTwo;