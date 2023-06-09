import React, {Component} from 'react';
import WidgetTab from "../WidgetTab";
import Slider from "react-slick";
import FontAwesome from "../uiStyle/FontAwesome";
import ModalVideo from 'react-modal-video'
import Link from 'next/link'

const thumbs = [
    '/img/blog/post_gsi1.jpg',
    '/img/blog/post_gsi2.jpg',
    '/img/blog/post_gsi3.jpg',
    '/img/blog/post_gsi4.jpg',
    '/img/blog/post_gsi5.jpg',
    '/img/blog/post_gsi6.jpg',
    '/img/blog/post_gsi7.jpg',
    '/img/blog/post_gsi4.jpg',
    '/img/blog/post_gsi3.jpg'
];
const postSlider = [
    {
        image: '/img/header/sider-top.jpg',
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Copa America: Luis Suarez from devastated US America',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Copa America: Luis Suarez from devastated US America',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Copa America: Luis Suarez from devastated US America',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Japan’s virus success has puzzled the world. Is its luck running out?',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
    {
        image: '/img/header/sider-top2.jpg',
        title: 'Copa America: Luis Suarez from devastated US America',
        body: 'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
        category: 'TECHNOLOGY',
        date: 'March 26, 2020'
    },
];

function SampleNextArrow(props) {
    const {className, onClick} = props;
    return (
        <div onClick={onClick} className={`${className} slider_arrow arrow_right slick-arrow`}>
            <FontAwesome name="angle-right"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return (
        <div onClick={onClick} className={`${className} slider_arrow arrow_left slick-arrow`}>
            <FontAwesome name="angle-left"/>
        </div>
    );
}

class PostGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            vModal: false,
            videoId: '0r6C3z3TEKw'
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    modalHandler = (value) => {
        this.setState({
            vModal: value
        })
    };

    render() {
        const {className} = this.props;
        const {nav1, nav2, vModal, videoId} = this.state;

        const navSettings = {
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            slidesToShow: 8,
            swipeToSlide: true,
            focusOnSelect: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 8,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]
        };
        return (
            <div className={`post_gallary_area mb40 ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="slider_demo2">
                                        <Slider
                                            asNavFor={nav2}
                                            arrows={false}
                                            fade={true}
                                            ref={slider => (this.slider1 = slider)}
                                        >
                                            {postSlider.slice(0, 9).map((item, i) => (
                                                <div key={i} className="single_post post_type6 xs-mb30">
                                                    <div className="post_img gradient1">
                                                        <img src={item.image} alt="thumb"/>
                                                        <span onClick={() => this.modalHandler(true)}
                                                              className="tranding"><FontAwesome
                                                            name="play"/></span>
                                                    </div>
                                                    <div className="single_post_text">
                                                        <div className="meta meta_separator1">
                                                            <Link href="#">
                                                                {item.category}
                                                            </Link>
                                                            <Link href="#">
                                                                {item.date}
                                                            </Link>
                                                        </div>
                                                        <h4>
                                                            <Link href="video_post1">
                                                                {item.title}
                                                            </Link>
                                                        </h4>
                                                        <div className="space-10"/>
                                                        <p className="post-p">{item.body}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <div className="slider_demo1">
                                        <Slider
                                            ref={slider => (this.slider2 = slider)}
                                            asNavFor={nav1}
                                            {...navSettings}
                                        >
                                            {thumbs.slice(0, 9).map((item, i) => (
                                                <div key={i} className="single_gallary_item">
                                                    <img src={item} alt="thumb"/>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <WidgetTab dark={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={vModal} videoId={videoId}
                            onClose={() => this.modalHandler(false)}/>
            </div>
        );
    }
}

export default PostGallery;