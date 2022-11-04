import React from 'react';

const PlayersAirdropPlayersTop = ({countPlayers}) => {
    return (
        <div className="players__top">
            <h3>Игроки</h3>
            <div className="count">
                <img src="images/players.svg" alt="Ico"/>
                <span>
                    {countPlayers}
                </span>
            </div>
        </div>
    );
};

export default PlayersAirdropPlayersTop;