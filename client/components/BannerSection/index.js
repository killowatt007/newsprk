import React from 'react';
import Link from 'next/link';

const bannerImg = '/img/bg/banner1.png';

const BannerSection = ({className}) => {
    return (
        <div className={`${className ? className : 'padding5050 fourth_bg'}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="banner1">
                            <Link href="/">
                                <img src={bannerImg} alt="bannerImg"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;