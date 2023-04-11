import React, {Fragment} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import Link from 'next/link';
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import FeatureNewsAll from "../../components/FeatureNewsAll";
import BannerSection from "../../components/BannerSection";
import Dark from '../../layouts/Dark';

// images
const banner2 = "/img/bg/sidebar-1.png";

const FeatureDarkPage = () => {
    return (
        <Dark>
            <BreadCrumb title="Business"/>
            <div className="archives padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-12 align-self-center">
                                    <div className="categories_title">
                                        <h5>Category: <Link href="/">Features</Link></h5>
                                    </div>
                                </div>
                            </div>
                            <FeatureNewsAll/>
                            <div className="row mt-3">
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
                            <WidgetTab dark={true}/>
                            <WidgetTrendingNews dark={true}/>
                            <NewsLetter/>
                            <FollowUs title="Follow Us"/>
                            <div className="banner2 mb30">
                                <Link href="/">
                                    <img src={banner2} alt="thumb"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-70"/>
            <BannerSection className="parimay_bg padding5050"/>
        </Dark>
    );
};

export default FeatureDarkPage;