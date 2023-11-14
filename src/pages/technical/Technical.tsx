import React, {useEffect, useState} from 'react'
import {Translate} from '../../components/translate/Translate';
import {TechnicalStyled} from "./Technical.styled";
import {useSelector} from "react-redux";

import techIcon from "./../../assets/images/tech-work-ico.svg"

interface ITechnicalProps {

}

export const Technical: React.FC<ITechnicalProps> = () => {

    const technicalTime = useSelector((state: any) => state.toolkit.siteSettings)?.technical_break_date

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const deadline: any = `${monthNames[Number(technicalTime?.slice(3, 5) - 1)]}, ${technicalTime?.slice(0, 2)}, ${technicalTime?.slice(6, 10)}`;

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        // @ts-ignore
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, [deadline]);

    return (
        <TechnicalStyled>
            <div className="ico">
                <img src={techIcon} alt="Ico"/>
            </div>
            <h1><Translate>tech_work</Translate></h1>
            <p><Translate>tech_work_text</Translate></p>
            <time>
                <span className="day">
                    <span>
                        {
                            days ? (days < 10 ? "0" + days : days) : "00"
                        }
                    </span>
                </span>
                <span className="hour">:
                    <span>
                        {
                            hours ? (hours < 10 ? "0" + hours : hours) : "00"
                        }
                    </span>
                </span>
                <span className="min">:
                    <span>
                        {
                            minutes ? (minutes < 10 ? "0" + minutes : minutes) : "00"
                        }
                    </span>
                </span>
                <span className="sec">:
                    <span>
                        {
                            seconds ? (seconds < 10 ? "0" + seconds : seconds) : "00"
                        }
                    </span>
                </span>
            </time>
        </TechnicalStyled>
    )
}
