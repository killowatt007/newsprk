import React, {Fragment} from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import Link from 'next/link';

const most21 = "/img/most_view/most21.jpg";
const most22 = "/img/most_view/most22.jpg";
const most23 = "/img/most_view/most23.jpg";
const most24 = "/img/most_view/most24.jpg";

const posts = [
    {
        photo: most21,
        author: 'QuomodoSoft',
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: most22,
        author: 'QuomodoSoft',
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: most23,
        author: 'QuomodoSoft',
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
    {
        photo: most24,
        author: 'QuomodoSoft',
        category: 'Technology',
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seat screening from room, a 100-seat amphitheater and a swimming pond with sandy'
    },
];
const International = () => {
    return (
        <div className="international_news white_bg padding20 border-radious5 sm-mt30">
            <h3 className="widget-title">International</h3>
            {posts.map((item, i) => (
                <Fragment key={i}>
                    <div className="single_international">
                        <p className="meta before">{item.category}</p>
                        <h4><Link href="/post1">{item.title}</Link></h4>
                        <div className="space-10"/>
                        <div className="view_author">
                            <FontAwesome name="user-circle mr-1"/>
                            <Link href="/">{item.author}</Link>
                        </div>
                        <div className="space-5"/>
                        <div className="row">
                            <div className="col-8 align-self-center">
                                <p>{item.description}</p>
                            </div>
                            <div className="col-4 align-self-center">
                                <div className="img_wrap">
                                    <Link href="/">
                                        <img src={item.photo} alt="thumb"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <ul className="mt20 like_cm">
                            <li><Link href="/"><FontAwesome name="eye"/> 6745</Link></li>
                            <li><Link href="/"><FontAwesome name="heart"/> 6745</Link></li>
                            <li><Link href="/"><FontAwesome name="share"/> 6745</Link></li>
                        </ul>
                    </div>
                    {i + 1 < posts.length ? <Fragment>
                        <div className="space-5"/>
                        <div className="border_black"/>
                        <div className="space-15"/>
                    </Fragment> : null}
                </Fragment>
            ))}
        </div>
    );
};

export default International;