import React, {useEffect, useState} from 'react';
import PlayersAirdropPlayersTop from "./PlayersAirdropPlayersTop";
import RightsAirdropPlayersItem from "./RightsAirdropPlayersItem";

const RightsAirdropPlayers = (props) => {

    let isHavePlayers = function () {
        if (!props.states.listAirdropsMembers.length) {
            return <big>Ставок нет</big>
        }
        return <PlayersAirdropPlayersTop listAirdropsMembers={props.states.listAirdropsMembers}/>
    }

    useEffect(() => {
        let rTopH = document.querySelector(".section-right__airdrop")?.clientHeight
        if(document.querySelector('.players__list')) document.querySelector('.players__list').style.height = `calc(100% - ${rTopH}px - 90px)`;
    })

    return (
        <div
            className={props.states.listAirdropsMembers.length <= 0 ? "section-right__players section-right__players_none" : "section-right__players"}>

            {isHavePlayers()}

            <div className="players__list">
                {
                    props.states.listAirdropsMembers.map(player =>
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