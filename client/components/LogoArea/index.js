import React from 'react';
import {useRouter} from "next/router";

const logo = '/img/logo/logo.png';
const logoDark = '/img/logo/footer_logo.png';
const tp_banner = '/img/bg/banner1.png';

const LogoArea = ({className, dark}) => {
    const router = useRouter()

    return (
        <div className={`logo_area ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 align-self-center">
                        <div className="logo">
                            <a onClick={() => router.push('/')}>
                                <img src={dark ? logoDark : logo} alt="logo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center">
                        <div className="banner1">
                            <a onClick={() => router.push('#')}>
                                <img src={tp_banner} alt="banner"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoArea;