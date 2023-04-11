import React from 'react';
import Link from 'next/link';

const logo = '/img/logo/logo.png';
const logoDark = '/img/logo/footer_logo.png';
const tp_banner = '/img/bg/banner1.png';

const LogoArea = ({className, dark}) => {
    return (
        <div className={`logo_area ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 align-self-center">
                        <div className="logo">
                            <Link href="/">
                                <img src={dark ? logoDark : logo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="banner1">
                            <Link href="#">
                                <img src={tp_banner} alt="banner"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoArea;