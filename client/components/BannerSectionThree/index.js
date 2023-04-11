import React from 'react';
import Link from 'next/link';

const banner42 = '/img/bg/banner42.png';

const BannerSectionThree = () => {
    return (
        <div className="padding5050 theme3_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="banner1 border-radious5">
                            <Link href="/"><img src={banner42} alt="banner"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSectionThree;