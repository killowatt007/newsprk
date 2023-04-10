import React from 'react';
import {useRouter} from "next/router";
import FontAwesome from "../uiStyle/FontAwesome";

const FollowUs = ({className='', title}) => {
    const router = useRouter()

    return (
        <div className={`follow_box widget mb30 ${className}`}>
            <h2 className="widget-title">{title}</h2>
            <div className="social_shares">
                <a className="single_social social_facebook" onClick={() => router.push('#')}>
                    <span className="follow_icon"><FontAwesome name="facebook-f"/></span>
                    34,456 <span className="icon_text">Fans</span>
                </a>
                <a className="single_social social_twitter" onClick={() => router.push('#')}>
                    <span className="follow_icon"><FontAwesome name="twitter"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </a>
                <a className="single_social social_youtube" onClick={() => router.push('#')}>
                    <span className="follow_icon"><FontAwesome name="youtube"/></span>
                    34,456 <span className="icon_text">Subscribers</span>
                </a>
                <a className="single_social social_instagram" onClick={() => router.push('#')}>
                    <span className="follow_icon"><FontAwesome name="instagram"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </a>
                <a className="single_social social_vimeo" onClick={() => router.push('#')}>
                    <span className="follow_icon"><FontAwesome name="vimeo"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </a>
                <a className="single_social social_medium" onClick={() => router.push('#')}>
                    <span className="follow_icon"><FontAwesome name="medium"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </a>
            </div>
        </div>
    );
};

export default FollowUs;