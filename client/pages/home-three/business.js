import React, {Fragment} from 'react';
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import FollowUs from "../../components/FollowUs";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import Link from 'next/link';
import FontAwesome from "../../components/uiStyle/FontAwesome";
import InternationalNews from "../../components/InternationalNews";
import Three from '../../layouts/Three';

const banner4 = '/img/bg/banner4.png';
const finance41 = "/img/finance/finance41.jpg";
const international41 = '/img/international/international41.jpg';
const international42 = '/img/international/international42.jpg';
const international43 = '/img/international/international43.jpg';
const international44 = '/img/international/international44.jpg';
const international45 = '/img/international/international45.jpg';

const businessPosts = [
    {
        photo: international41,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international42,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international43,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international44,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international45,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
    {
        photo: international43,
        title: 'Investors explain COVID-19’s impact on consumer startups',
        description: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with',
    },
];

const financePosts = [
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
];

const BusinessThreePage = () => {
    return (
        <Three>
            <MainMenuThree/>
            <div className="archives layout3 post post1 padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bridcrumb"><Link href="/">Home</Link> / Categories / Business</div>
                        </div>
                    </div>
                    <div className="space-30"/>
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="categories_title">
                                        <h5>Category: <Link href="/">Business</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <InternationalNews data={businessPosts}/>
                            <div className="cpagination v4 padding5050">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" href="/" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <FontAwesome name="caret-left"/>
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" href="/">1</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" href="/">..</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" href="/">5</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" href="/" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <FontAwesome name="caret-right"/>
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <FollowUs title="Follow Us"/>
                            <div className="banner2 mb30 border-radious5">
                                <Link href="/">
                                    <img src={banner4} alt="banner4"/>
                                </Link>
                            </div>
                            <WidgetFinanceTwo data={financePosts} title="Finance"/>
                            <NewsLetter titleClass="white" className="news_letter4 border-radious5"/>
                        </div>
                    </div>
                </div>
            </div>
            <BannerSectionThree/>
        </Three>
    );
};

export default BusinessThreePage;