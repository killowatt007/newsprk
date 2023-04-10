import React, {useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from 'react-id-swiper';
import {useRouter} from "next/router";

const trendbig1 = "/img/trending/trendbig1.jpg";
const trendbig2 = "/img/trending/trendbig2.jpg";

const trendingNews = [
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        image: trendbig1,
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        image: trendbig2,
    },
    {
        category: 'TECHNOLOGY',
        date: 'March 26, 2020',
        title: 'There may be no consoles in the future ea exec says',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        image: trendbig1,
    },
];
const TrendingNewsSlider = () => {
    const [swiper, setSwiper] = useState(null);
    const router = useRouter()

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    const params = {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        }
    };
    return (
        <div className="carousel_post2_type3 nav_style1">
            <Swiper getSwiper={setSwiper} className="trancarousel" {...params}>
                {trendingNews.map((item, i) => (
                    <div key={i} className="single_post post_type3">
                        <div className="post_img">
                            <div className="img_wrap">
                                <img src={item.image} alt="thumb"/>
                            </div>
                            <span className="tranding"><FontAwesome name="fa-bolt"/></span>
                        </div>
                        <div className="single_post_text">
                            <div className="meta3"><a onClick={() => router.push('/')}>{item.category}</a>
                                <a onClick={() => router.push('/')}>{item.date}</a>
                            </div>
                            <h4><a onClick={() => router.push('/post1')}>{item.title}</a></h4>
                            <div className="space-10"/>
                            <p className="post-p">{item.body}</p>
                        </div>
                    </div>
                ))}
            </Swiper>
            <div className="navBtns">
                <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
            </div>
        </div>
    );
};

export default TrendingNewsSlider;