import React, {Fragment} from 'react';
import FontAwesome from "../../components/uiStyle/FontAwesome";
import Link from 'next/link';
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import EntertainmentNews from "../../components/EntertainmentNews";
import MostShareWidget from "../../components/MostShareWidget";
import FollowUs from "../../components/FollowUs";
import BannerSection from "../../components/BannerSection";
import Default from '../../layouts/Default';

// images
const banner2 = "/img/bg/sidebar-1.png";
const enter1 = '/img/entertrainment/enter1.jpg';
const enter2 = '/img/entertrainment/enter2.jpg';
const enter3 = '/img/entertrainment/enter3.jpg';
const enter4 = '/img/entertrainment/enter4.jpg';
const calendar = '/img/icon/calendar.png';
const erroImg = '/img/bg/404.png';

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

const NotFoundPage = () => {
    return (
        <Default>
            <div className="inner_table">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="space-50"/>
                            <div className="area404 text-center">
                                <img src={erroImg} alt="404"/>
                            </div>
                            <div className="space-30"/>
                            <div className="back4040 text-center col-lg-6 m-auto">
                                <h3>Page not faund</h3>
                                <div className="space-10"/>
                                <p>Sorry the page you were looking for cannot be found. Try searching for the best match
                                    or browse the links below:</p>
                                <div className="space-20"/>
                                <div className="button_group"><Link href="/" className="cbtn2">GO TO HOME</Link>
                                    <Link href="/contact" className="cbtn3">contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-50"/>
            </div>

            <div className="archives padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-6 align-self-center">
                                    <div className="heading">
                                        <h2 className="widget-title">Archive</h2>
                                    </div>
                                </div>
                                <div className="col-6 text-right">
                                    <div className="calender">
                                        <img src={calendar} alt="calendar"/>
                                    </div>
                                </div>
                            </div>
                            <div className="about_posts_tab">
                                <div className="row justify-content-center">
                                    <EntertainmentNews headerHide={true} entertainments={entertainments}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="cpagination">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <Link className="page-link" href="/" aria-label="Previous">
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-left"/></span>
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
                                                                <span aria-hidden="true"><FontAwesome
                                                                    name="caret-right"/></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <WidgetTab/>
                            <FollowUs title="Follow Us"/>
                            <WidgetTrendingNews/>
                            <div className="banner2 mb30">
                                <Link href="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                            <MostShareWidget title="Most Share"/>
                            <NewsLetter/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
            <BannerSection/>
        </Default>
    )
};

export default NotFoundPage;