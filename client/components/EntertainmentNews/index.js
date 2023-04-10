import React, {Fragment} from 'react';
import {useRouter} from "next/router";

const EntertainmentNews = ({entertainments}) => {
    const router = useRouter()

    return (
        <Fragment>
            {entertainments.map((item, i) => (
                <div key={i} className="col-lg-6">
                    <div className="single_post post_type3 mb30">
                        <div className="post_img">
                            <div className="img_wrap">
                                <a onClick={() => router.push('/')}>
                                    <img src={item.image} alt="thumb"/>
                                </a>
                            </div>
                        </div>
                        <div className="single_post_text">
                            <div className="meta3"><a onClick={() => router.push('/')}>TECHNOLOGY</a>
                                <a onClick={() => router.push('/')}>{item.date}</a>
                            </div>
                            <h4><a onClick={() => router.push('/post1')}>{item.title}</a></h4>
                            <div className="space-10"/>
                            <p className="post-p">{item.body}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default EntertainmentNews;