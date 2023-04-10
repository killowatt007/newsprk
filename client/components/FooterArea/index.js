import React, {useState} from 'react';
// import {Link} from "react-router-dom";
import FooterCopyright from "../FooterCopyright";
import FooterMoreNews from "../FooterMoreNews";
import TwitterFeed from "../TwitterFeed";
import FontAwesome from "../uiStyle/FontAwesome";
import {useRouter} from "next/router";

import FooterNewsCategories from "../FooterNewsCategories";

const flogo = '/img/logo/footer_logo.png';

const FooterArea = ({className}) => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        setEmail('')
    };
    return (
        <div className={`footer footer_area1 ${className ? className : ''}`}>
            <div className="container">
                <div className="cta">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="footer_logo logo">
                                <a onClick={() => router.push('/')}>
                                    <img src={flogo} alt="logo"/>
                                </a>
                            </div>
                            <div className="social2">
                                <ul className="inline">
                                    <li><a onClick={() => router.push('#')}><FontAwesome name="twitter"/></a></li>
                                    <li><a onClick={() => router.push('#')}><FontAwesome name="facebook-f"/></a></li>
                                    <li><a onClick={() => router.push('#')}><FontAwesome name="youtube-play"/></a></li>
                                    <li><a onClick={() => router.push('#')}><FontAwesome name="instagram"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 offset-lg-2 align-self-center">
                            <div className="signup_form">
                                <form onSubmit={submitHandler}>
                                    <input onChange={e => setEmail(e.target.value)} value={email} className="signup"
                                           type="email" placeholder="Your email address"/>
                                    <button type="submit" className="cbtn">sign up</button>
                                </form>
                                <p>We hate spam as much as you do</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border_white"/>
                <div className="space-40"/>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-6 col-lg">
                                <div className="single_footer_nav border_white_right">
                                    <FooterNewsCategories/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg">
                                <div className="single_footer_nav">
                                    <h3 className="widget-title2">Living</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><a onClick={() => router.push('/')}>Crossword</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Food</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Automobiles</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Education</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Health</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Magazine</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Weddings</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><a onClick={() => router.push('/')}>Classifieds</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Photographies</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>NYT Store</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Journalisms</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Public Editor</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Tools & Services</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>My Account</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-40"/>
                        <div className="border_white"/>
                        <div className="space-40"/>
                        <div className="row">
                            <div className="col-sm-6 col-lg-5">
                                <div className="single_footer_nav border_white_right">
                                    <h3 className="widget-title2">Opinion</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><a onClick={() => router.push('/')}>Today’s Opinion</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Op-Ed Contributing</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Contributing Writers</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Business News</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Collections</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Today’s Paper</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Saturday Review</a>
                                                </li>
                                                <li><a onClick={() => router.push('/')}>Product Review</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-7">
                                <TwitterFeed/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <FooterMoreNews/>
                    </div>
                </div>
            </div>
            <FooterCopyright/>
        </div>
    );
};

export default FooterArea;