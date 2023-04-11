import React from 'react';
import Link from 'next/link';

const tab21 = '/img/tab/tab21.jpg';

const Opinion = () => {
    return (
        <div className="opinion white_bg padding20 border-radious5">
            <h3 className="widget-title">Opinion</h3>
            <div className="single_post post_type3 post_type15">
                <div className="post_img border-radious5">
                    <Link href="/">
                        <img src={tab21} alt="thumb"/>
                    </Link>
                </div>
                <div className="single_post_text">
                    <h4><Link href="/post1">Japan’s virus puzzled the world luck running out?</Link></h4>
                    <div className="space-10"/>
                    <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat
                        amphitheater and a swimming pond with sandy shower…</p>
                    <div className="space-20"/>
                    <div className="meta3"><Link href="/">TECHNOLOGY</Link>
                        <Link href="/">March 26, 2020</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opinion;