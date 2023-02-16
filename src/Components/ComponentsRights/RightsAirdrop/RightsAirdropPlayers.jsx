import React, {useEffect, useState} from 'react';
import PlayersAirdropPlayersTop from "./PlayersAirdropPlayersTop";
import RightsAirdropPlayersItem from "./RightsAirdropPlayersItem";
import {useSelector} from "react-redux";

const RightsAirdropPlayers = (props) => {

    const members = useSelector(state => state.reducerAirdropMembers.list)

    let isHavePlayers = function () {
        if (!members.length) {
            return <big>Ставок нет</big>
        }
        return <PlayersAirdropPlayersTop listAirdropsMembers={members}/>
    }

    useEffect(() => {
        let rTopH = document.querySelector(".section-right__airdrop")?.clientHeight
        if(document.querySelector('.players__list')) document.querySelector('.players__list').style.height = `calc(100% - ${rTopH}px - 90px)`;
    })

    return (
        <div
            className={members.length <= 0 ? "section-right__players section-right__players_none" : "section-right__players"}>

            {isHavePlayers()}

            <div className="players__list">
                {
                    members.map(player =>
                        <RightsAirdropPlayersItem
                            key={player.id}
                            infoPlayer={player}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default RightsAirdropPlayers;