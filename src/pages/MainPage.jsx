import React, {useEffect, useState} from 'react';
import TopGamer from "../Components/ComponentsMainPage/TopGamer";
import Balance from "../Components/ComponentsMainPage/Balance";
import Table from "../Components/ComponentsMainPage/Table";
import Loader from "../Hooks/Loader";
import UserStats from "../Components/ComponentsMainPage/UserStats";
import {useSelector} from "react-redux";
import axios from "axios";
import {getCookie} from "../Hooks/GetCookies";

const MainPage = () => {
    Loader();

    const auth = useSelector(state => state.reducerAuth.auth)
    const session = useSelector(state => state.reducerSession.session)

    let newcomerClass = !auth ?
        'section-block section-block-information section-block-newcomer' :
        'section-block section-block-information';

    const [dataStats, setDataStats] = useState({})

    useEffect(() => {

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.get('https://rust.onefut.net/api/user/games/?id=' + session.id).then(res => {
            setDataStats(res.data)
        })

    }, [])

    return (
        <section className="section-blocks">
            <div className={newcomerClass}>

                <TopGamer/>

                {auth && <Balance/>}

                <UserStats dataStats={dataStats}/>

            </div>

            <Table dataStats={dataStats} person_id={session} />

        </section>
    );
};

export default MainPage;