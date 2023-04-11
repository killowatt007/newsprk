import React from 'react';
import Link from 'next/link';
import FooterCopyright from "../FooterCopyright";
import FollowUs from "../FollowUs";
import NewsLetter from "../NewsLetter";
import FontAwesome from "../uiStyle/FontAwesome";
import WidgetMorenews from "../WidgetMorenews";
import TwitterfeedTwo from "../TwitterfeedTwo";

// images
const logo = '/img/logo/logo.png';
const banner = '/img/add/add21.jpg';
const phone_black = '/img/icon/phone_black.png';
const speaker_black = '/img/icon/speaker_black.png';
const envelope_black = '/img/icon/envelope_black.png';

const FooterAreaTwo = () => {
    return (
        <div className="footer footer_area3 white_bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="single_footer3 mb30">
                            <div className="logo">
                                <Link href="/">
                                    <img src={logo} alt="logo"/>
                                </Link>
                                <div className="space-20"/>
                            </div>
                            <p><span>Newspark</span> vitae elementum ros. Pellentesquees Leo sed mi ullamcorper
                                tristique mauris varius. congue enim in arcu maximus feugiat vitae ut quam finibus
                                risus molestie viverra.</p>
                        </div>
                        <div className="footer_contact">
                            <h3 className="widget-title2">Newspark news services</h3>
                            <div className="single_fcontact">
                                <div className="fcicon">
                                    <img src={phone_black} alt="phone_black"/>
                                </div>
                                <Link href="/">On your mobile</Link>
                            </div>
                            <div className="single_fcontact">
                                <div className="fcicon">
                                    <img src={speaker_black} alt="speaker_black"/>
                                </div>
                                <Link href="/">On smart speakers</Link>
                            </div>
                            <div className="single_fcontact">
                                <div className="fcicon">
                                    <img src={envelope_black} alt="envelope_black"/>
                                </div>
                                <Link href="/">Contact Newspark news</Link>
                            </div>
                        </div>
                        <div className="space-30"/>
                        <div className="border_black"/>
                        <div className="space-30"/>
                        <div className="single_footer_nav mb30">
                            <h3 className="widget-title2">News categories</h3>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><Link href="/">Politics</Link></li>
                                        <li><Link href="/">Business</Link></li>
                                        <li><Link href="/">TECHNOLOGY</Link></li>
                                        <li><Link href="/">Science</Link></li>
                                        <li><Link href="/">Health</Link></li>
                                        <li><Link href="/">Sports</Link></li>
                                        <li><Link href="/">Entertainment</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><Link href="/">Education</Link></li>
                                        <li><Link href="/">Obituaries</Link></li>
                                        <li><Link href="/">Corrections</Link></li>
                                        <li><Link href="/">Education</Link></li>
                                        <li><Link href="/">Today’s Paper</Link></li>
                                        <li><Link href="/">Corrections</Link></li>
                                        <li><Link href="/">Foods</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="space-30"/>
                        <div className="border_black"/>
                        <div className="space-30"/>
                        <TwitterfeedTwo/>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="contacts3">
                            <div className="single_contact3">
                                <h6>Let's Talk</h6>
                                <Link href="/">+41 27 966 26690</Link>
                                <Link href="/">+880 1945 381758</Link>
                            </div>
                            <div className="single_contact3">
                                <h6>Let's Chat</h6>
                                <a href="mailto:hello@newspark.com">hello@newspark.com</a>
                                <a href="mailto:adsales@newspark.com">adsales@newspark.com</a>
                            </div>
                            <div className="single_contact3">
                                <h6>Headquaters</h6>
                                <p>44 Canal Center Plaza #200
                                    <br/>Alexandria, VA 22314, USA</p>
                            </div>
                        </div>
                        <div className="space-30"/>
                        <div className="border_black"/>
                        <div className="space-30"/>
                        <div className="row">
                            <div className="col-lg-6">
                                <WidgetMorenews/>
                            </div>
                            <div className="col-lg-6">
                                <NewsLetter input_white={true} className="news3bg mb30 border-radious5"/>
                                <FollowUs title="Follow Us"/>
                                <div className="banner2 mb30 ">
                                    <Link href="/" className="border-radious5">
                                        <img src={banner} alt="banner"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="download_btn">
                            <div className="space-15"/>
                            <div className="border_black"/>
                            <div className="space-15"/>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3 className="widget-title">Newspark app download</h3>
                                    <p>Free sign & download, iOS & Android app</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="download_btn_group">
                                        <Link className="app_btn" href="/"> <FontAwesome name="google-play"/>
                                            Download on the <span>google play</span>
                                        </Link>
                                        <Link className="app_btn" href="/"> <FontAwesome name="apple"/>
                                            Download on the <span>app store</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterCopyright/>
        </div>
    );
};

export default FooterAreaTwo;