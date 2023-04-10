import React, {useState} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import ModalVideo from 'react-modal-video'
import PopularPosts from "../PopularPosts";
import {useRouter} from "next/router";

const video1 = "/img/video/video1.jpg";

const VideoPost = ({className, dark}) => {
    const [vModal, setvModal] = useState(false);
    const [videoId] = useState('0r6C3z3TEKw');
    const router = useRouter()

    return (
        <div className={`video_posts ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading white">
                            <h2 className="widget-title">Video News</h2>
                        </div>
                    </div>
                </div>
                <div className="space-50"/>
                <div className={`viceo_posts_wrap ${dark ? 'primay_bg' : ''}`}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single_post post_type3 post_type11 margintop-60- xs-mb30">
                                <div className="post_img">
                                    <div className="img_wrap">
                                        <a onClick={() => router.push('/')} className="play_btn">
                                            <img src={video1} alt="video1"/>
                                        </a>
                                    </div>
                                    <p onClick={() => setvModal(true)} className="youtube_middle"><FontAwesome
                                        name="youtube-play"/></p>
                                </div>
                                <div className={`single_post_text padding30 ${dark ? 'dark-2' : 'fourth_bg'}`}>
                                    <div className="meta3"><a onClick={() => router.push('/')}>TECHNOLOGY</a>
                                        <a onClick={() => router.push('/')}>March 26, 2020</a>
                                    </div>
                                    <h4><a onClick={() => router.push('/post1')}>Riots Report Shows London Needs To Maintain Police Numbers,
                                        Says Mayor</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <PopularPosts/>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' isOpen={vModal} videoId={videoId}
                        onClose={() => setvModal(false)}/>
        </div>
    );
};

export default VideoPost;