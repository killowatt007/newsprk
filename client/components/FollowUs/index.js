import React from 'react';
import Link from 'next/link';
import FontAwesome from "../uiStyle/FontAwesome";

const FollowUs = ({className='', title}) => {
    return (
        <div className={`follow_box widget mb30 ${className}`}>
            <h2 className="widget-title">{title}</h2>
            <div className="social_shares">
                <Link className="single_social social_facebook" href="#">
                    <span className="follow_icon"><FontAwesome name="facebook-f"/></span>
                    34,456 <span className="icon_text">Fans</span>
                </Link>
                <Link className="single_social social_twitter" href="#">
                    <span className="follow_icon"><FontAwesome name="twitter"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </Link>
                <Link className="single_social social_youtube" href="#">
                    <span className="follow_icon"><FontAwesome name="youtube"/></span>
                    34,456 <span className="icon_text">Subscribers</span>
                </Link>
                <Link className="single_social social_instagram" href="#">
                    <span className="follow_icon"><FontAwesome name="instagram"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </Link>
                <Link className="single_social social_vimeo" href="#">
                    <span className="follow_icon"><FontAwesome name="vimeo"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </Link>
                <Link className="single_social social_medium" href="#">
                    <span className="follow_icon"><FontAwesome name="medium"/></span>
                    34,456 <span className="icon_text">Followers</span>
                </Link>
            </div>
        </div>
    );
};

export default FollowUs;