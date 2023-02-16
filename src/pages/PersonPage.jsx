import React, {useEffect, useState} from 'react';
import UserStats from "../Components/ComponentsMainPage/UserStats";
import Table from "../Components/ComponentsMainPage/Table";
import {Trans, useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";
import {getCookie} from "../Hooks/GetCookies";

const PersonPage = () => {
    const {t} = useTranslation();

    const person_id = useParams();
    const [user, setUser] = useState({})
    const [dataStats, setDataStats] = useState({})

    useEffect(() => {

        axios.get('https://rust.onefut.net/api/user/info/?id=' + person_id.id).then(res => {
            setUser(res.data)
        })

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.get('https://rust.onefut.net/api/user/games/?id=' + person_id.id).then(res => {
            setDataStats(res.data)
        })


    }, [])

    return (
        <section className="section-blocks">

            <div className={"section-block section-block-information section-block-newcomer"}>

                <div className="top-gamer">
                    <div className="top-gamer__vertical">
                    <span>
                        {
                            user.status ? user.status : "?????"
                        }
                    </span>
                    </div>
                    <div className="top-gamer__info">
                        <div className="info__photo">
                            <img src={user.avatar} alt="Photo"/>
                        </div>
                        <div className="info__block">
                            <h2 className="info__name">
                                {user.name}
                            </h2>
                            <a className="info__profile" target={"_blank"} href={user.profile}>
                                <img src="../images/steam.svg" alt="Steam"/>
                                <span>
                            <Trans t={t}>text_profile</Trans>
                        </span>
                            </a>
                        </div>
                    </div>
                </div>

                <UserStats dataStats={dataStats}/>

            </div>
            <Table dataStats={dataStats} person_id={person_id} />
        </section>
    );
};

export default PersonPage;