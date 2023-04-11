import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import Link from 'next/link';

const posts = [
    {
        category: 'TECHNOLOGY',
        title: 'Japan’s virus success puzzled the world luck running out?',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        category: 'TECHNOLOGY',
        title: 'Japan’s virus success puzzled the world luck running out?',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        category: 'TECHNOLOGY',
        title: 'Japan’s virus success puzzled the world luck running out?',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
    {
        category: 'TECHNOLOGY',
        title: 'Japan’s virus success puzzled the world luck running out?',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy shower…'
    },
];
const WidgetMorenews = () => {
    return (
        <div className="footer_more_news mb30">
            <h3 className="widget-title">More news</h3>
            <div className="more_newss">
                {posts.map((item, i) => (
                    <Fragment key={i}>
                        <div className="single_more_news">
                            <p className="meta">{item.category}</p>
                            <h4><Link href="/">{item.title}</Link></h4>
                            <p>{item.description}</p>
                            <ul className="mt20 like_cm">
                                <li><Link href="/"><FontAwesome name="eye"/> 6745</Link></li>
                                <li><Link href="/"><FontAwesome name="heart"/> 6745</Link></li>
                                <li><Link href="/"><FontAwesome name="share"/> 6745</Link></li>
                            </ul>
                        </div>
                        {i + 1 < posts.length ? <Fragment>
                            <div className="space-10"/>
                            <div className="border_black"/>
                            <div className="space-10"/>
                        </Fragment> : ''}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default WidgetMorenews;