import React, {Fragment} from 'react';
import {CircleSlider} from "react-circle-slider";
import Link from 'next/link';

// images
const match1 = '/img/flag/match1.png';
const match2 = '/img/flag/match2.png';
const match3 = '/img/flag/match3.png';
const match4 = '/img/flag/match4.png';
const match5 = '/img/flag/match5.png';

const matches = [
    {
        image: match1,
        value: 30,
        countries: ['Germany', 'France'],
        date: 'Tomorrow',
        time: 'M22:30 (CST)',
    },
    {
        image: match2,
        value: 30,
        countries: ['Germany', 'France'],
        date: 'Tomorrow',
        time: 'M22:30 (CST)',
    },
    {
        image: match3,
        value: 30,
        countries: ['Germany', 'France'],
        date: 'Tomorrow',
        time: 'M22:30 (CST)',
    },
    {
        image: match4,
        value: 30,
        countries: ['Germany', 'France'],
        date: 'Tomorrow',
        time: 'M22:30 (CST)',
    },
    {
        image: match5,
        value: 30,
        countries: ['Germany', 'France'],
        date: 'Tomorrow',
        time: 'M22:30 (CST)',
    },
];

const UpcomingMatches = ({dark}) => {
    return (
        <div className="widget upcomming_macth mb30">
            <div className="row">
                <div className="col-8 align-self-center">
                    <h2 className="widget-title">Upcoming Matches</h2>
                </div>
                <div className="col-4 text-right align-self-center">
                    <Link href="#" className="see_all mb20">See All</Link>
                </div>
            </div>
            {matches.map((item, i) => (
                <Fragment key={i}>
                    <div className="single_post post_type13 widgets_small">
                        <div className="post_img">
                            <Link href="/">
                                <img src={item.image} alt="icon"/>
                            </Link>
                        </div>
                        <div className="single_post_text">
                            <h4><Link href="/" className="playing_teams">
                                {item.countries.map((country, i) => (
                                    <Fragment key={i}>
                                        {country}{' '}
                                        {(i + 1) < item.countries.length ? <span>VS &nbsp;</span> : null}
                                    </Fragment>
                                ))}
                            </Link></h4>
                            <p className="meta macth_meta">
                                {item.date} &nbsp;|&nbsp;<span> {item.time} </span> &nbsp;
                            </p>
                        </div>
                        <div className="circle_match_time">
                            <CircleSlider
                                size={45}
                                value={item.value}
                                showTooltip={false}
                                showPercentage={false}
                                progressColor="#FF5555"
                                knobRadius={0}
                                progressWidth={5}
                                circleWidth={5}
                            />
                            {/*<div className="first_circle circle"/>*/}
                        </div>
                    </div>
                    <div className="space-10"/>
                    {dark ? <div className="border_white"/> : <div className="border_black"/>}
                    <div className="space-10"/>
                </Fragment>
            ))}
        </div>
    );
};

export default UpcomingMatches;