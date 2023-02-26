import React, {useEffect, useState} from 'react';
import TopGamer from "../Components/ComponentsMainPage/TopGamer";
import Balance from "../Components/ComponentsMainPage/Balance";
import Table from "../Components/ComponentsMainPage/Table";
import Loader from "../Hooks/Loader";
import {useSelector} from "react-redux";
import axios from "axios";
import {getCookie} from "../Hooks/GetCookies";
import UserStatsItem from "../Components/ComponentsMainPage/UserStatsItem";
import GlobalLink from "../Hooks/GlobalLink";
import Translate from "../Hooks/Translate";

const MainPage = () => {
    Loader();

    const auth = useSelector(state => state.reducerAuth.auth)
    const session = useSelector(state => state.reducerSession.session)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    let newcomerClass = !auth ?
        'section-block section-block-information section-block-newcomer' :
        'section-block section-block-information';

    const [dataStats, setDataStats] = useState({})

    useEffect(() => {

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.get("https://" + GlobalLink() + '/api/user/games/?id=' + session.id).then(res => {
            setDataStats(res.data)
            setLoading(false)
        }).catch(er => {
            setError(true)
        })

    }, [])

    return (
        <section className="section-blocks">
            <div className={newcomerClass}>

                <TopGamer/>

                <Balance/>

                {!loading ?
                    <UserStatsItem dataStats={dataStats?.airdrop_games} person_id={session} title={<Translate>airdrop_title</Translate>}/> :
                    error ?
                        <div className={"stats stats_disabled"}>
                            <h3>
                                <Translate>airdrop_title</Translate>
                            </h3>
                            <p style={{color: "#DB4752"}}>Ошибка подключения</p>
                        </div>
                        :
                    <div className={"stats stats_disabled"}>
                        <h3>
                            <Translate>airdrop_title</Translate>
                        </h3>
                        <Loader/>
                    </div>
                }
                {!loading ? <UserStatsItem dataStats={dataStats?.fight_games} person_id={session}
                                           title={<Translate>fight_title</Translate>}/> :
                    error ?
                        <div className={"stats stats_disabled"}>
                            <h3>
                                <Translate>airdrop_title</Translate>
                            </h3>
                            <p style={{color: "#DB4752"}}>Ошибка подключения</p>
                        </div>
                        :
                    <div className={"stats stats_disabled"}>
                        <h3>
                            <Translate>airdrop_title</Translate>
                        </h3>
                        <Loader/>
                    </div>
                }

            </div>

            {!loading ?
                <Table dataStats={dataStats} person_id={session}/> :
                error ?
                    <div className="section-block">
                        <p style={{color: "#DB4752"}}>Ошибка подключения</p>
                    </div>
                    :
                <div className="section-block">
                    <Loader/>
                </div>
            }

        </section>
    );
};

export default MainPage;