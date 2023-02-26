import React, {useEffect, useState} from 'react';
import PlayersAirdropPlayersTop from "./PlayersAirdropPlayersTop";
import RightsAirdropPlayersItem from "./RightsAirdropPlayersItem";
import {useSelector} from "react-redux";
import Translate from "../../../Hooks/Translate";

const RightsAirdropPlayers = () => {

    const members = useSelector(state => state.reducerAirdropMembers.list)

    let isHavePlayers = function () {
        if (!members.length) {
            return <big><Translate>not_a_bid</Translate></big>
        }
        return <PlayersAirdropPlayersTop listAirdropsMembers={members}/>
    }

    useEffect(() => {
        let rTopH = document.querySelector(".section-right__airdrop")?.clientHeight
        if(document.querySelector('.players__list')) document.querySelector('.players__list').style.height = `calc(100% - ${rTopH}px - 90px)`;
    }, [])

    return (
        <div
            className={members.length <= 0 ? "section-right__players section-right__players_none" : "section-right__players"}>

            {isHavePlayers()}

            <div className="players__list">
                {
                    members.map(item =>
                        <RightsAirdropPlayersItem key={item.user.id} data={item}/>
                    )
                }
            </div>
        </div>
    );
};

export default RightsAirdropPlayers;