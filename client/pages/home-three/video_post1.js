import React, {Fragment, useState} from 'react';
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import FollowUs from "../../components/FollowUs";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import Link from 'next/link';
import FontAwesome from "../../components/uiStyle/FontAwesome";
import CategoryFour from "../../components/CategoryFour";
import PostOnePagination from "../../components/PostOnePagination";
import ModalVideo from "react-modal-video";
import OurBlogSectionTwo from "../../components/OurBlogSectionTwo";
import BlogComment from "../../components/BlogComment";
import Three from '../../layouts/Three';

const banner4 = '/img/bg/banner4.png';
const finance41 = "/img/finance/finance41.jpg";
const single_post1 = "/img/blog/big1.jpg";
const author2 = "/img/author/author2.png";
const smail1 = "/img/blog/smail1.jpg";
const quote_1 = "/img/blog/quote_1.jpg";
const quote = "/img/icon/q4.png";
const big2 = "/img/blog/big2.jpg";

const financePosts = [
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
    {
        photo: finance41,
        title: 'Copa America: Luis Suarez from devastated US',
        description: 'The property, complete with seates screening from room amphitheater pond with sandy'
    },
];

const VideoPostOneHThreePage = () => {
    const [vModal, setvModal] = useState(false);
    const [videoId, setVideoId] = useState('');

    const openModalVideo = (e, id) => {
        e.preventDefault();
        setVideoId(id);
        setvModal(true)
    };
    return (
        <Three>
            <MainMenuThree/>
            <div className="archives layout3 post post1 padding-top-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bridcrumb"><Link href="/">Home</Link> / Archive / post 1</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-6 align-self-center">
                                    <div className="page_category">
                                        <h4>HEALTH</h4>
                                    </div>
                                </div>
                                <div className="col-6 text-right">
                                    <div className="page_comments">
                                        <ul className="inline">
                                            <li><FontAwesome name="comment"/>563</li>
                                            <li><FontAwesome name="fire"/>536</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="space-30"/>
                            <div className="single_post_heading">
                                <h1>Japan’s virus success has puzzled the world. Is its luck running out?</h1>
                                <div className="space-10"/>
                                <p>The property, complete with 30-seat screening from room, a 100-seat amphitheater and
                                    a swimming pond with sandy shower…</p>
                            </div>
                            <div className="space-40"/>
                            <div className="video_img border-radious5">
                                <Link onClick={(e) => openModalVideo(e, '0r6C3z3TEKw')} href="/" className="play_btn">
                                    <img src={single_post1} alt="big1"/></Link>
                                <Link onClick={(e) => openModalVideo(e, '0r6C3z3TEKw')} href="/"
                                      className="video_img_icon play_btn"> <FontAwesome name={"play"}/></Link>
                            </div>
                            <div className="space-20"/>
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="author">
                                        <div className="author_img">
                                            <div className="author_img_wrap">
                                                <img src={author2} alt="author2"/>
                                            </div>
                                        </div>
                                        <Link href="/">Shuvas Chandra</Link>
                                        <ul>
                                            <li><Link href="/">March 26, 2020</Link></li>
                                            <li>Updated 1:58 p.m. ET</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="author_social inline text-right">
                                        <ul>
                                            <li><Link href="/"><FontAwesome name="instagram"/></Link></li>
                                            <li><Link href="/"><FontAwesome name="facebook-f"/></Link></li>
                                            <li><Link href="/"><FontAwesome name="youtube"/></Link></li>
                                            <li><Link href="/"><FontAwesome name="instagram"/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="space-20"/>
                            <p>Entilators will be taken from certain New York hospitals and redistributed to the
                                worst-hit parts of the state under an order to be signed by Governor Andrew Cuomo.
                                <br/>
                                <br/>New York saw its highest single-day increase in deaths, up by 562 to 2,935 -
                                nearly half of all virus-related US deaths recorded yesterday. The White
                                House may advise those in virus hotspots to wear face coverings in public to
                                help stem the spread.\<br/><br/>The US now has 245,658 Covid-19 cases.<br/><br/>A
                                shortage of several hundred ventilators in New York City, the epicentre of the outbreak
                                in the US, prompted Mr Cuomo to say that he will order the machines be taken from
                                various parts of the state and give them to harder-hit areas.<br/><br/>Amid a deepening
                                crisis, top health official <span className="bold"> Dr Anthony Fauci</span> has said
                                he believes all states should issue stay-at-home
                                orders.
                                <br/>
                                <br/>“I don’t understand why that’s not
                                happening,” Dr Fauci told CNN on Thursday.
                                “If you look at what’s going on in this
                                country, I just don’t understand why we’re
                                not do ingthat.”
                                <br/>
                                <br/>“You’ve got to put your foot on the
                                accelerator to bring that number
                                down,” he added, referring to
                                infection and death rates.</p>
                            <div className="space-40"/>
                            <div className="points">
                                <ul>
                                    <li>Should more of us wear face masks?</li>
                                    <li>Why some countries wear face masks and others don’t</li>
                                    <li>Coronavirus: Are homemade face masks safe?</li>
                                </ul>
                            </div>
                            <div className="space-40"/>
                            <p>The comments from Dr Fauci, who heads the National Institute of Allergy and
                                Infectious Diseases, appeared to contradict those of President Trump, who has
                                consistently dismissed the notion of a nationwide lockdown.
                                <br/>
                                <br/>“It’s awfully tough to say, ‘close it down.’ We have to have a little bit of
                                flexibility,” Mr Trump said on Wednesday.</p>
                            <div className="space-40"/>
                            <h3>What’s the debate over masks?</h3>
                            <div className="space-20"/>
                            <p>Both the US Centers for Disease Control (CDC) and the World Health Organization (WHO)
                                are reassessing their guidance on face masks, as experts race to find ways to fight
                                the highly contagious virus.
                                <br/>
                                <br/>Covid-19 is carried in airborne droplets from people coughing or sneezing,
                                but there is some dispute over how far people should distance themselves
                                from each other, and whether masks are useful when used by the public.</p>
                            <div className="space-40"/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="border-radious5">
                                        <img src={smail1} alt="smail1"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p>The WHO advises that ordinary face masks are only effective if combined with
                                        careful hand-washing and social-distancing, and so far it does not recommend
                                        them generally for healthy people.
                                        <br/>
                                        <br/>However, More and more health experts now say there are benefits.
                                        They argue that the public use of masks can primarily help by
                                        preventing asymptomatic patients - people who have been infected
                                        with Covid-19 but are not aware, and not displaying any symptoms -
                                        from unknowingly spreading the virus to others.</p>
                                </div>
                            </div>
                            <div className="space-40"/>
                            <p>Masks may also help lower the risk of individuals catching the virus through the
                                droplets from another person’s sneeze or a cough - and people can be taught how put
                                masks on and take them off correctly, they argue.
                                <br/>
                                <br/>On Thursday New York mayor Bill de Blasio urged all New Yorkers to cover
                                their faces when outside and near others, but not to use surgical masks,
                                which are in short supply.
                                <br/>
                                <br/>“It could be a scarf. It could be something you create yourself at
                                home. It could be a bandana,” he said. Governor Cuomo weighed in on
                                Friday, saying “i think it’s fair to say that the masks couldn’t
                                hurt unless they gave you a false sense of security.”
                                <br/>
                                <br/>Meanwhile, residents in Laredo, Texas will now face a $1,000
                                (£816) fine if they fail to cover their noses and mouths
                                while outside, after city officials issued an emergency
                                ordinance to its approximately 250,000 residents this week.
                            </p>
                            <div className="space-40"/>
                            <h3>Which states are not in lockdown?</h3>
                            <div className="space-20"/>
                            <p>Both the US Centers for Disease Control (CDC) and the World Health Organization (WHO)
                                are reassessing their guidance on face masks, as experts race to find ways to fight
                                the highly contagious virus.
                                <br/>
                                <br/>Covid-19 is carried in airborne droplets from people coughing or sneezing,
                                but there is some dispute over how far people should distance themselves
                                from each other, and whether masks are useful when used by the public.</p>
                            <div className="space-40"/>
                            <div className="video_img border-radious5">
                                <Link onClick={(e) => openModalVideo(e, '0r6C3z3TEKw')} href="/" className="play_btn">
                                    <img src={single_post1} alt="big1"/></Link>
                                <Link onClick={(e) => openModalVideo(e, '0r6C3z3TEKw')} href="/"
                                      className="video_img_icon play_btn"> <FontAwesome name={"play"}/></Link>
                            </div>
                            <p className="img_desc"><span>I just had a baby - now I’m going to the frontline.</span></p>
                            <div className="space-40"/>
                            <p>Masks may also help lower the risk of individuals catching the virus through the
                                droplets from another person’s sneeze or a cough - and people can be taught how
                                put masks on and take them off correctly, they argue.
                                <br/>
                                <br/>On Thursday New York mayor Bill de Blasio urged all New Yorkers to cover
                                their faces when outside and near others, but not to use surgical masks,
                                which are in short supply.
                                <br/>
                                <br/>Meanwhile, residents in Laredo, Texas will now face a $1,000
                                (£816) fine if they fail to cover their noses and mouths while
                                outside, after city officials issued an emergency ordinance to
                                its approximately 250,000 residents this week.</p>
                            <div className="space-40"/>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="border-radious5">
                                        <img src={quote_1} alt="quote"/>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="qhote">
                                        <img src={quote} alt="quote"/>
                                        <p>I must explain to you how all this mistake idea denouncing
                                            pleasure and praising pain was born and I will give you a
                                            complete account of the system, and expound the actual teachings
                                            of the great explorer of the truth, the master-builder of human
                                            happiness. .</p>
                                        <div className="author">
                                            <div className="author_img">
                                                <div className="author_img_wrap">
                                                    <img src={author2} alt="author2"/>
                                                </div>
                                            </div>
                                            <Link href="/">Shuvas Chandra</Link>
                                            <ul>
                                                <li>Founder at Seative Digital</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-40"/>
                            <p>The next day I came back to my team and said, This is what I just heard, we have
                                to get ready, he said. We knew that it wasn’t going to be long before we were
                                going to have to deal with it.
                                <br/>
                                <br/>Mr. Hogan has also leaned on his wife, Yumi Hogan, a Korean immigrant,
                                who was also at the governor’s convention, which included a dinner at
                                the Korean ambassador’s home. As the first Korean first lady in American
                                history, Ms. Hogan has become something of an icon in South Korea. I
                                just grabbed my wife and said, Look, you speak Korean. You know the
                                president. You know the first lady. You know the ambassador. Let’s talk
                                to them in Korean, and tell them we need their help. Companies in South
                                Korea said would tests.</p>
                            <div className="space-40"/>
                            <div className="border-radious5">
                                <img src={big2} alt="big2"/>
                            </div>
                            <div className="space-40"/>
                            <p>In global terms the US has the most Covid-19 cases - more than 245,000. And
                                on Thursday the US authorities said more than 1,000 had died in the past 24
                                hours - the highest daily toll so far in the world.
                                <br/>
                                <br/>Hospitals and morgues in New York are struggling to cope with the
                                pandemic, and New York Governor Andrew Cuomo has warned that New
                                York risks running out of ventilators for patients in six days.</p>
                            <div className="space-40"/>
                            <div className="tags">
                                <ul className="inline">
                                    <li className="tag_list"><FontAwesome name="tag"/> tags</li>
                                    <li><Link href="/">Health</Link></li>
                                    <li><Link href="/">World</Link></li>
                                    <li><Link href="/">Corona</Link></li>
                                </ul>
                            </div>
                            <div className="space-40"/>
                            <div className="border_black"/>
                            <div className="space-40"/>
                            <PostOnePagination/>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <FollowUs title="Follow Us"/>
                            <div className="banner2 mb30 border-radious5">
                                <Link href="">
                                    <img src={banner4} alt="banner4"/>
                                </Link>
                            </div>
                            <WidgetFinanceTwo data={financePosts} title="Finance"/>
                            <NewsLetter titleClass="white" className="news_letter4 border-radious5"/>
                            <CategoryFour/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-60"/>
            <OurBlogSectionTwo/>
            <div className="space-60"/>
            <BlogComment theme={3}/>
            <div className="space-60"/>
            <BannerSectionThree/>
            <ModalVideo channel='youtube' isOpen={vModal} videoId={videoId}
                        onClose={() => setvModal(false)}/>
        </Three>
    );
};

export default VideoPostOneHThreePage;