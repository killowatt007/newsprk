import React from 'react';
import {useRouter} from "next/router";

const BusinessNews = ({businessNews, headerHide}) => {
    const router = useRouter()

    return (
        <div className="row">
            <div className="col-12">
                <div className="businerss_news">
                    {headerHide ? '' :
                        <div className="row">
                            <div className="col-6 align-self-center">
                                <h2 className="widget-title">Business News</h2>
                            </div>
                            <div className="col-6 text-right align-self-center">
                                <a onClick={() => router.push('/')} className="see_all mb20">See All</a>
                            </div>
                        </div>}
                    <div className="row">
                        <div className="col-12">
                            {businessNews.map((item, i) => (
                                <div key={i} className="single_post post_type3 post_type12 mb30">
                                    <div className="post_img">
                                        <div className="img_wrap">
                                            <a onClick={() => router.push('/')}>
                                                <img src={item.image} alt="thumb"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="single_post_text">
                                        <div className="meta3"><a onClick={() => router.push('/')}>uiux.subash</a>
                                            <a onClick={() => router.push('#')}>March 26, 2020</a>
                                        </div>
                                        <h4><a onClick={() => router.push('/post1')}>Copa America: Luis Suarez from devastated US</a></h4>
                                        <div className="space-10"/>
                                        <p className="post-p">The property, complete with 30-seat screening from room, a
                                            100-seat amphitheater and a swimming pond with…</p>
                                        <div className="space-20"/>
                                        <a onClick={() => router.push('/')} className="readmore">Read more</a>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessNews;