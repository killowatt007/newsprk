import React from 'react';
import Link from 'next/link';

const fnewsImg2 = '/img/feature/feature2.jpg';
const fnewsImg3 = '/img/feature/feature3.jpg';
const fnewsImg4 = '/img/feature/feature4.jpg';

const news = [
    {
        image: fnewsImg2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg2,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
    {
        image: fnewsImg4,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Best garden wing supplies for the horticu ltural'
    },
    {
        image: fnewsImg3,
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Copa America: Luis Suarez from devastated US'
    },
];

const FeatureNewsAll = () => {
    return (
        <div className="row justify-content-center">
            {news.map((item, i) => (
                <div key={i} className="col-lg-6">
                    <div className="single_post post_type6 post_type7 mb30">
                        <div className="post_img gradient1">
                            <Link href="/"><img src={item.image} alt="thumb"/></Link>
                        </div>
                        <div className="single_post_text">
                            <div className="meta5"><Link href="/">{item.category}</Link>
                                <Link href="/">{item.date}</Link>
                            </div>
                            <h4>
                                <Link href="/post1">{item.title}</Link>
                            </h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureNewsAll;