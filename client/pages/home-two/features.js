import React, {Fragment} from 'react';
import Whatsnew from "../../components/Whatsnew";
import Link from 'next/link';
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import BannerSection from "../../components/BannerSection";
import WidgetTrendingNewsTwo from "../../components/WidgetTrendingNewsTwo";
import Two from '../../layouts/Two';

const sd_banner_img = '/img/bg/sidebar-1.png';
const feature21 = '/img/feature/feature21.jpg';
const feature22 = '/img/feature/feature22.jpg';
const feature23 = '/img/feature/feature23.jpg';

const feature_news = [
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the happiness.',
    },
    {
        photo: feature23,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'The worried doctors stood together after their rounds, weighing the.',
    },
    {
        photo: feature21,
        category: 'TECHNOLOGY',
        title: 'Even healthy pregnant women are anxious. “They don’t feel the.',
    },
    {
        photo: feature22,
        category: 'TECHNOLOGY',
        title: 'Ms. Anderson’s case has been particularly harrowing. She had been a.',
    },
];
const FeatureTwoPage = () => {
    return (
        <Two>
            <div className="archives layout3 post post1 padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bridcrumb"><Link href="/">Home</Link> / Categories / Entertainment</div>
                        </div>
                    </div>
                    <div className="space-30"/>
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="categories_title">
                                        <h5>Category: <Link href="/">Features</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {feature_news.map((item, i) => (
                                    <div key={i} className="col-lg-4">
                                        <div className="single_post type19 border-radious5 white_bg mb30">
                                            <div className="post_img">
                                                <div className="img_wrap">
                                                    <Link href="/">
                                                        <img src={item.photo} alt="thumb"/>
                                                    </Link>
                                                </div>
                                                <span className="batch3 date">{item.category}</span>
                                            </div>
                                            <div className="single_post_text padding20">
                                                <p className="post-p">{item.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="cpagination v3 padding5050">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li>
                                                    <Link href="/" aria-label="Previous"> <span
                                                        aria-hidden="true"><FontAwesome name="caret-left"/></span>
                                                    </Link>
                                                </li>
                                                <li><Link href="/">1</Link></li>
                                                <li><Link href="/">..</Link></li>
                                                <li><Link href="/">5</Link></li>
                                                <li>
                                                    <Link href="/" aria-label="Next"> <span
                                                        aria-hidden="true"><FontAwesome name="caret-right"/></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <FollowUs
                                title="Contact Us"
                                className="follow_box widget sociai_style3 mb30 white_bg padding20 white_bg border-radious5 inner_socail4"
                            />
                            <WidgetTrendingNewsTwo/>
                            <div className="banner2 mb30">
                                <Link href="/">
                                    <img className="border-radious5" src={sd_banner_img} alt="sd_banner_img"/>
                                </Link>
                            </div>
                            <Whatsnew className="most_widget3 white_bg mb30 padding20 border-radious5"
                                      title="Most View"/>
                            <NewsLetter className="mb-0 news3bg padding20 white_bg border-radious5"/>
                        </div>
                    </div>
                </div>
            </div>
            <BannerSection className="padding5050 theme3_bg layout3"/>
        </Two>
    );
};

export default FeatureTwoPage;