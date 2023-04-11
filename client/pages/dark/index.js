import React from 'react';
import PostCarousel from "../../components/PostCarousel";
import PostGallery from "../../components/PostGallery";
import FeatureNews from "../../components/FeatureNews";
import TrendingNews from "../../components/TrendingNews";
import FollowUs from "../../components/FollowUs";
import MostView from "../../components/MostView";
import MixCarousel from "../../components/MixCarousel";
import VideoPost from "../../components/VideoPost";
import EntertainmentNews from "../../components/EntertainmentNews";
import SportsNews from "../../components/SportsNews";
import BusinessNews from "../../components/BusinessNews";
import MostShareWidget from "../../components/MostShareWidget";
import UpcomingMatches from "../../components/UpcomingMatches";
import NewsLetter from "../../components/NewsLetter";
import CategoriesWidget from "../../components/CategoriesWidget";
import Dark from '../../layouts/Dark';
import Link from 'next/link';

// images
const banner1 = '/img/bg/banner1.png';
const banner2 = '/img/bg/sidebar-1.png';
const business1 = '/img/business/business1.jpg';
const business2 = '/img/business/business2.jpg';
const business3 = '/img/business/business3.jpg';
const enter1 = '/img/entertrainment/enter1.jpg';
const enter2 = '/img/entertrainment/enter2.jpg';
const enter3 = '/img/entertrainment/enter3.jpg';
const enter4 = '/img/entertrainment/enter4.jpg';

const entertainments = [
    {
        image: enter1,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: enter4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
];

const businessNews = [
    {
        image: business1,
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
    {
        image: business2,
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
    {
        image: business3,
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
];

const HomeDarkPage = () => {
    return (
        <Dark>
            <PostCarousel className="primay_bg dark-v"/>
            <PostGallery className="primay_bg dark-v"/>
            <FeatureNews className="dark-v"/>
            <div className="dark-v">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <TrendingNews dark={true}/>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <FollowUs title="Follow Us"/>
                            <MostView dark={true}/>
                        </div>
                    </div>
                </div>
            </div>
            <MixCarousel dark={true} className="half_dark_bg1"/>
            <VideoPost dark={true} className="pt30 dark-v half_dark_bg60 mb30"/>
            <div className="entertrainments dark-v">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading">
                                        <h2 className="widget-title">Entertrainment News</h2>
                                    </div>
                                </div>
                            </div>
                            {/*CAROUSEL START*/}
                            <div className="entertrainment_carousel mb30">
                                <div className="entertrainment_item">
                                    <div className="row justify-content-center">
                                        <EntertainmentNews entertainments={entertainments}/>
                                    </div>
                                </div>
                            </div>
                            <SportsNews dark={true}/>
                            <div className="banner_area mt50 mb60 xs-mt60">
                                <Link href="/">
                                    <img src={banner1} alt="banner1"/>
                                </Link>
                            </div>
                            <BusinessNews businessNews={businessNews}/>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <MostShareWidget dark={true}/>
                                </div>
                                <div className="col-lg-12">
                                    <UpcomingMatches dark={true}/>
                                </div>
                                <div className="col-lg-12">
                                    <NewsLetter/>
                                </div>
                                <div className="col-lg-12">
                                    <CategoriesWidget/>
                                </div>
                                <div className="col-lg-12">
                                    <div className="banner2 mb30">
                                        <Link href="/">
                                            <img src={banner2} alt="thumb"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
        </Dark>
    );
};

export default HomeDarkPage;