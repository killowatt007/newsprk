import React, {Fragment} from 'react';
import {useRouter} from "next/router";

const FooterNewsCategories = () => {
    const router = useRouter()

    return (
        <Fragment>
            <h3 className="widget-title">News categories</h3>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                        <li><a onClick={() => router.push('/')}>Politics</a></li>
                        <li><a onClick={() => router.push('/')}>Business</a></li>
                        <li><a onClick={() => router.push('/')}>TECHNOLOGY</a></li>
                        <li><a onClick={() => router.push('/')}>Science</a></li>
                        <li><a onClick={() => router.push('/')}>Health</a></li>
                        <li><a onClick={() => router.push('/')}>Sports</a></li>
                        <li><a onClick={() => router.push('/')}>Entertainment</a></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                        <li><a onClick={() => router.push('/')}>Education</a></li>
                        <li><a onClick={() => router.push('/')}>Obituaries</a></li>
                        <li><a onClick={() => router.push('/')}>Corrections</a></li>
                        <li><a onClick={() => router.push('/')}>Education</a></li>
                        <li><a onClick={() => router.push('/')}>Today’s Paper</a></li>
                        <li><a onClick={() => router.push('/')}>Corrections</a></li>
                        <li><a onClick={() => router.push('/')}>Foods</a></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterNewsCategories;