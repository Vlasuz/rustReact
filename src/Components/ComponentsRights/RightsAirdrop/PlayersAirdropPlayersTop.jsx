import React from 'react';

const PlayersAirdropPlayersTop = (props) => {
    return (
        <div className="players__top">
            <h3>Игроки</h3>
            <div className="count">
                <img src="../images/players.svg" alt="Ico"/>
                <span>
                    {props.listAirdropsMembers.length}
                </span>
            </div>
        </div>
    );
};

export default PlayersAirdropPlayersTop;