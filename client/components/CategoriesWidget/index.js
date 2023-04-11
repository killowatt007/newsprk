import React from 'react';
import Link from 'next/link';

const union = '/img/icon/union.png';
const category1 = '/img/categories/category1.jpg';
const category2 = '/img/categories/category2.jpg';
const category3 = '/img/categories/category3.jpg';
const category4 = '/img/categories/category4.jpg';
const category5 = '/img/categories/category5.jpg';
const category6 = '/img/categories/category6.jpg';

const categories = [
    {
        small_img: union,
        big_image: category1,
        title: 'Restaurant',
    },
    {
        small_img: union,
        big_image: category2,
        title: 'Entertainment',
    },
    {
        small_img: union,
        big_image: category3,
        title: 'Feature',
    },
    {
        small_img: union,
        big_image: category4,
        title: 'Business',
    },
    {
        small_img: union,
        big_image: category5,
        title: 'Trending',
    },
    {
        small_img: union,
        big_image: category6,
        title: 'Sports',
    },
];

const CategoriesWidget = () => {
    return (
        <div className="widget category mb30">
            <div className="row">
                <div className="col-6 align-self-center">
                    <h2 className="widget-title">Categories</h2>
                </div>
                <div className="col-6 text-right align-self-center">
                    <Link href="/" className="see_all mb20">See All</Link>
                </div>
            </div>
            <ul>
                {categories.map((item, i) => (
                    <li key={i}>
                        <Link href="/" style={{background: `url(${item.big_image})`}}> <span>{item.title}</span>
                            <img src={item.small_img} alt="category"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesWidget;