import React, {useState} from 'react';
import PlayersAirdropPlayersTop from "./PlayersAirdropPlayersTop";
import RightsAirdropPlayersItem from "./RightsAirdropPlayersItem";

const RightsAirdropPlayers = (props) => {

    let isHavePlayers = function () {
        if (!props.states.listAirdropsMembers.length) {
            return <big>Ставок нет</big>
        }
        return <PlayersAirdropPlayersTop listAirdropsMembers={props.states.listAirdropsMembers}/>
    }

    return (
        <div
            className={props.states.listAirdropsMembers.length <= 0 ? "section-right__players section-right__players_none" : "section-right__players"}>

            {isHavePlayers()}

            {
                props.states.listAirdropsMembers.map(player =>
                    <RightsAirdropPlayersItem
                        key={player.id}
                        infoPlayer={player}
                    />
                )
            }
        </div>
    );
};

export default RightsAirdropPlayers;