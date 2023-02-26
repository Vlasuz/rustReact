import React, {useEffect, useState} from 'react';
import Table from "../Components/ComponentsMainPage/Table";
import {Trans, useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import axios from "axios";
import {getCookie} from "../Hooks/GetCookies";
import UserStatsItem from "../Components/ComponentsMainPage/UserStatsItem";
import GlobalLink from "../Hooks/GlobalLink";
import Loader from "../Hooks/Loader";
import Translate from "../Hooks/Translate";

const PersonPage = () => {

    const person_id = useParams();
    const [user, setUser] = useState({})
    const [dataStats, setDataStats] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        axios.get("https://" + GlobalLink() + '/api/user/info/?id=' + person_id.id).then(res => {
            setUser(res.data)
        })

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.get("https://" + GlobalLink() + '/api/user/games/?id=' + person_id.id).then(res => {
            setDataStats(res.data)
            setLoading(false)
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
                                    <Translate>text_profile</Translate>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {!loading ? <UserStatsItem dataStats={dataStats?.airdrop_games} person_id={person_id}
                                           title={<Translate>airdrop_title</Translate>}/>
                    :
                    <div className={"stats stats_disabled"}>
                        <h3>
                            <Translate>airdrop_title</Translate>
                        </h3>
                        <Loader/>
                    </div>
                }
                {!loading ? <UserStatsItem dataStats={dataStats?.fight_games} person_id={person_id}
                                           title={<Translate>fight_title</Translate>}/>
                    :
                    <div className={"stats stats_disabled"}>
                        <h3>
                            <Translate>fight_title</Translate>
                        </h3>
                        <Loader/>
                    </div>
                }

            </div>
            {!loading ?
                <Table dataStats={dataStats} person_id={person_id}/> :
                <div className="section-block">
                    <Loader/>
                </div>
            }
        </section>
    );
};

export default PersonPage;