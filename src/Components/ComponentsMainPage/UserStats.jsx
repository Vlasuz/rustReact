import React, {useEffect, useState} from 'react';
import Stats from "./Stats";
import {useSelector} from "react-redux";
import axios from "axios";
import {getCookie} from "../../Hooks/GetCookies";
import StatsTrue from "./StatsTrue";

const UserStats = ({ dataStats }) => {

    return (
        <>
            <div className={"stats" + (!!dataStats?.fight_games?.length ? "" : " stats_disabled")}>
                <h3>Схватка</h3>
                <p>2
                    <sup>
                        21
                    </sup>
                </p>
                <div className="lines">
                    <div className="line line_active"></div>
                    <div className="line"></div>
                    <div className="line line_active"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className={"stats" + (!!dataStats?.airdrop_games?.length ? "" : " stats_disabled")}>
                <h3>Аирдроп</h3>
                {
                    !!dataStats?.airdrop_games?.length ?
                    <>
                        <p>2
                            <sup>
                                21
                            </sup>
                        </p>
                        <div className="lines">
                            <div className="line line_active"></div>
                            <div className="line"></div>
                            <div className="line line_active"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </> : <p>нет данных</p>
                }
            </div>
        </>
    );
};

export default UserStats;