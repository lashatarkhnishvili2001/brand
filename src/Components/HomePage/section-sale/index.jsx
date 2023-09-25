import { useEffect, useState, useRef } from 'react';
import { Heading4, Subheading1, Subheading3 } from '../../Headings';
// import CardItem from './card-item/CardItem';
import CardItem from './card-item';
import './index.css';
import React from 'react';

const SelectionSale = () => {
    const [timerDays, setTimesDays] = useState('');
    const [timerHours, setTimesHours] = useState('');
    const [timerMinutes, setTimesMinutes] = useState('');
    const [timerSeconds, setTimesSeconds] = useState('');

    let interval = useRef() ;

    const stateTimer = () => {
        const countdownDate = new Date(2023, 9, 16, 23, 59, 59).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            // const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            // const minutes = Math.floor((distance / 1000 / 60) % 60);
            // const seconds = Math.floor((distance / 1000) % 60)

            if (distance < 0) {
                clearInterval(interval.current);
            }else {
                setTimesDays(days);
                setTimesHours(hours);
                setTimesMinutes(minutes);
                setTimesSeconds(seconds);
            }
        }, 1000);

    };

    useEffect(() => {
        stateTimer();

    })
    

    return (
        <div className="bg-card">
            <div className="data">
                <div className="title-row">
                    <Heading4 text={"Deals and offers"} />
                    <Subheading1 text={"Hygiene equipments"} />
                </div>
                <div className="time-container">
                    <div className="border">
                        <div className="number ">{timerDays}</div>
                        <Subheading3 text={'days'} />
                    </div>
                    <div className="border">
                        <div className="number">{timerHours}</div>
                        <Subheading3 text={'Hour'} />
                    </div>
                    <div className="border">
                        <div className="number">{timerMinutes}</div>
                        <Subheading3 text={'min'} />
                    </div>
                    <div className="border">
                        <div className="number">{timerSeconds}</div>
                        <Subheading3 text={'sec'} />
                    </div>
                </div>
            </div>
            <div className="container">
                <CardItem/>
            </div>
        </div>
    )
}

export default SelectionSale;