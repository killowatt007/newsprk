import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import Link from 'next/link';

// images
const trendbig1 = '/img/trending/trendbig1.jpg';
const transm4 = '/img/trending/transm4.jpg';
const transm5 = '/img/trending/transm5.jpg';
const transm6 = '/img/trending/transm6.jpg';

const posts = [
    {
        photo: transm4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy Zhang a Chinese busy woman and Dhaka',
    },
    {
        photo: transm5,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'U.S. Response subash says he will label regions by risk of…',
    },
    {
        photo: transm6,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Venezuela elan govt and opposit the property collect',
    },
];

const WidgetTrendingNews = ({dark}) => {
    return (
        <div className="trending_widget mb30">
            <h2 className="widget-title">Tending News</h2>
            <div className="single_post post_type3">
                <div className="post_img">
                    <div className="img_wrap">
                        <img src={trendbig1} alt="trendbig1"/>
                    </div>
                    <span className="tranding"><FontAwesome name="bolt"/></span>
                </div>
                <div className="single_post_text">
                    <div className="meta3"><Link href="/">TECHNOLOGY</Link>
                        <Link href="/">March 26, 2020</Link>
                    </div>
                    <h4><Link href="/post1">There may be no consoles in the future ea exec says</Link></h4>
                    <div className="space-10"/>
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat
                        amphitheater and a swimming pond with sandy shower…</p>
                </div>
            </div>

            {posts.map((item, i) => (
                <Fragment key={i}>
                    <div className="space-15"/>
                    {dark ? <div className="border_white"/> : <div className="border_black"/>}
                    <div className="space-30"/>
                    <div className="single_post widgets_small">
                        <div className="post_img">
                            <div className="img_wrap">
                                <img src={item.photo} alt="thumb"/>
                            </div>
                            <span className="tranding"><FontAwesome name="bolt"/></span>
                        </div>
                        <div className="single_post_text">
                            <div className="meta2"><Link href="/">{item.category}</Link>
                                <Link href="/">{item.date}</Link>
                            </div>
                            <h4><Link href="/post1">{item.title}</Link></h4>
                        </div>
                    </div>
                </Fragment>
            ))}
        </div>
    );
};

export default WidgetTrendingNews;