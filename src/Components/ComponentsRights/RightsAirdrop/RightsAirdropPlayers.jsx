import React, {useState} from 'react';
import PlayersAirdropPlayersTop from "./PlayersAirdropPlayersTop";
import RightsAirdropPlayersItem from "./RightsAirdropPlayersItem";

const RightsAirdropPlayers = () => {

    const [listPlayers, setListPlayers] = useState([
        {
            id: 1,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 2,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        },
        {
            id: 3,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 4,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        },
        {
            id: 5,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 6,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        },
        {
            id: 7,
            photo: "images/user.jpeg",
            name: "Lena",
            coins: 100
        },
        {
            id: 8,
            photo: "images/user.jpeg",
            name: "Vasya",
            coins: 128
        }
    ])
    const countPlayers = useState(listPlayers.length);

    let isHavePlayers = function () {
        if (!listPlayers.length) {
            return <big>Ставок нет</big>
        }
        return <PlayersAirdropPlayersTop countPlayers={countPlayers}/>
    }

    return (
        <div
            className={listPlayers.length <= 0 ? "section-right__players section-right__players_none" : "section-right__players"}>

            {isHavePlayers()}

            {
                listPlayers?.map(player =>
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