import React, {Fragment} from 'react';
import Heading from "../uiStyle/Heading";
import TrendingNewsSlider from "../TrendingNewsSlider";
import FontAwesome from "../uiStyle/FontAwesome";
import {useRouter} from "next/router";

const trendingNews = [
    {
        image: '/img/trending/transm1.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy Zhang a Chinese busy woman and Dhaka'
    },
    {
        image: '/img/trending/transm2.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'U.S. Response subash says he will label regions by risk of…'
    },
    {
        image: '/img/trending/transm4.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Venezuela elan govt and opposit the property collect'
    },
    {
        image: '/img/trending/transm5.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy Zhang a Chinese busy woman and Dhaka'
    },
    {
        image: '/img/trending/transm6.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'U.S. Response subash says he will label regions by risk of…'
    },
    {
        image: '/img/trending/transm4.jpg',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Venezuela elan govt and opposit the property collect'
    },
];

const TrendingNews = ({dark}) => {
    const router = useRouter()

    return (
        <Fragment>
            <Heading title="Trending News"/>
            <TrendingNewsSlider/>
            {dark ? <div className="border_white"/> : <div className="border_black"/>}
            <div className="space-30"/>
            <div className="row">
                <div className="col-lg-6">
                    {trendingNews.slice(0, 3).map((item, i) => (
                        <Fragment key={i}>
                            <div className="single_post widgets_small">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <img src={item.image} alt="thumb"/>
                                    </div>
                                    <span className="tranding">
									<FontAwesome name="bolt"/>
								</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2">
                                        <a onClick={() => router.push('/')}>
                                            {item.category}
                                        </a>
                                        <a onClick={() => router.push('/')}>
                                            {item.date}
                                        </a>
                                    </div>
                                    <h4>
                                        <a onClick={() => router.push('post1')}>
                                            {item.title}
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div className="space-15"/>
                            {dark ? <div className="border_white"/> : <div className="border_black"/>}
                            <div className="space-15"/>
                        </Fragment>
                    ))}
                </div>
                <div className="col-lg-6">
                    {trendingNews.slice(3, 6).map((item, i) => (
                        <Fragment key={i}>
                            <div className="single_post widgets_small">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <img src={item.image} alt="thumb"/>
                                    </div>
                                    <span className="tranding">
									<FontAwesome name="bolt"/>
								</span>
                                </div>
                                <div className="single_post_text">
                                    <div className="meta2">
                                        <a onClick={() => router.push('/')}>
                                            {item.category}
                                        </a>
                                        <a onClick={() => router.push('/')}>
                                            {item.date}
                                        </a>
                                    </div>
                                    <h4>
                                        <a onClick={() => router.push('/post1')}>
                                            {item.title}
                                        </a>
                                    </h4>
                                </div>
                            </div>
                            <div className="space-15"/>
                            {dark ? <div className="border_white"/> : <div className="border_black"/>}
                            <div className="space-15"/>
                        </Fragment>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default TrendingNews;