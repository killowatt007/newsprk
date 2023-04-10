import React from 'react';
// import {Link} from "react-router-dom";
import {useRouter} from "next/router";

const mobile = '/img/icon/mobile.png';
const speaker = '/img/icon/speacker.png';
const envelope = '/img/icon/evelope.png';

const news = [
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka'
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka'
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka'
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka'
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Nancy zhang a chinese busy woman and dhaka'
    },
];

const FooterMoreNews = () => {
    const router = useRouter()

    return (
        <div className="extra_newss border_white_left pl-4">
            <h3 className="widget-title2">More news</h3>
            {news.map((item, i) => (
                <div key={i} className="single_extra_news border_white_bottom">
                    <p>{item.category} <span> / {item.date}</span></p>
                    <a onClick={() => router.push('/')}>{item.title}</a>
                    <span className="news_counter">{i + 1}</span>
                </div>
            ))}
            <div className="space-40"/>
            <div className="border_white_bottom"/>
            <div className="space-40"/>
            <div className="footer_contact">
                <h3 className="widget-title2">Newspark news services</h3>
                <div className="single_fcontact">
                    <div className="fcicon">
                        <img src={mobile} alt="mobile"/>
                    </div>
                    <a onClick={() => router.push('/')}>On your mobile</a>
                </div>
                <div className="single_fcontact">
                    <div className="fcicon">
                        <img src={speaker} alt="speaker"/>
                    </div>
                    <a onClick={() => router.push('/')}>On smart speakers</a>
                </div>
                <div className="single_fcontact">
                    <div className="fcicon">
                        <img src={envelope} alt="evelope"/>
                    </div>
                    <a onClick={() => router.push('/')}>Contact Newspark news</a>
                </div>
            </div>
        </div>
    );
};

export default FooterMoreNews;