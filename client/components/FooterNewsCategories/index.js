import React, {Fragment} from 'react';
import Link from 'next/link';

const FooterNewsCategories = () => {
    return (
        <Fragment>
            <h3 className="widget-title">News categories</h3>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                        <li><Link href="/">Politics</Link></li>
                        <li><Link href="/">Business</Link></li>
                        <li><Link href="/">TECHNOLOGY</Link></li>
                        <li><Link href="/">Science</Link></li>
                        <li><Link href="/">Health</Link></li>
                        <li><Link href="/">Sports</Link></li>
                        <li><Link href="/">Entertainment</Link></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                        <li><Link href="/">Education</Link></li>
                        <li><Link href="/">Obituaries</Link></li>
                        <li><Link href="/">Corrections</Link></li>
                        <li><Link href="/">Education</Link></li>
                        <li><Link href="/">Today’s Paper</Link></li>
                        <li><Link href="/">Corrections</Link></li>
                        <li><Link href="/">Foods</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterNewsCategories;