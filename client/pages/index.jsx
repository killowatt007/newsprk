import React from 'react';
import PostCarousel from "../components/PostCarousel";
import PostGallery from "../components/PostGallery";
import FeatureNews from "../components/FeatureNews";
import TrendingNews from "../components/TrendingNews";
import FollowUs from "../components/FollowUs";
import MostView from "../components/MostView";
import MixCarousel from "../components/MixCarousel";
import VideoPost from "../components/VideoPost";
import EntertainmentNews from "../components/EntertainmentNews";
import SportsNews from "../components/SportsNews";
import BusinessNews from "../components/BusinessNews";
import MostShareWidget from "../components/MostShareWidget";
import UpcomingMatches from "../components/UpcomingMatches";
import NewsLetter from "../components/NewsLetter";
import CategoriesWidget from "../components/CategoriesWidget";
import {useRouter} from "next/router";
import Default from '../layouts/Default';

const banner1 = '/img/bg/banner1.png'
const banner2 = '/img/bg/sidebar-1.png'

const entertainments = [
    {
        image: '/img/entertrainment/enter1.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: '/img/entertrainment/enter2.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: '/img/entertrainment/enter3.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
    {
        image: '/img/entertrainment/enter4.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…'
    },
];

const businessNews = [
    {
        image: '/img/business/business1.jpg',
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
    {
        image: '/img/business/business2.jpg',
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
    {
        image: '/img/business/business3.jpg',
        category: 'uiux.subash',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…'
    },
];

const HomePage = () => {
    const router = useRouter()

    return (
        <Default>
            <PostCarousel className="fifth_bg"/>
            <PostGallery className="fifth_bg"/>
            <FeatureNews/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <TrendingNews/>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <FollowUs title="Follow Us"/>
                        <MostView/>
                    </div>
                </div>
            </div>
            <MixCarousel className="half_bg1"/>
            <VideoPost className="pt30 half_bg60"/>
            <div className="entertrainments">
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
                            {/*CAROUSEL END*/}
                            <SportsNews/>
                            <div className="banner_area mt50 mb60 xs-mt60">
                                <img onClick={() => router.push('/')} src={banner1} alt="banner1"/>
                            </div>
                            <BusinessNews businessNews={businessNews}/>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    <MostShareWidget title="Most share"/>
                                </div>
                                <div className="col-lg-12">
                                    <UpcomingMatches/>
                                </div>
                                <div className="col-lg-12">
                                    <NewsLetter/>
                                </div>
                                <div className="col-lg-12">
                                    <CategoriesWidget/>
                                </div>
                                <div className="col-lg-12">
                                    <div className="banner2 mb30">
                                        <img onClick={() => router.push('/')} src={banner2} alt="thumb"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
        </Default>
    );
};

export default HomePage;