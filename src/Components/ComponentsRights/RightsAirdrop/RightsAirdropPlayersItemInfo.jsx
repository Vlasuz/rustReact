import React from 'react';

const RightsAirdropPlayersItemInfo = ({infoPlayer}) => {
    return (
        <>
            <p className="item__name">
                {infoPlayer.name}
            </p>
            <div className="item__coins">
                <img src="images/header__coins.svg" alt="Coins"/>
                <span>
                    {infoPlayer.coins}
                </span>
            </div>
        </>
    );
};

export default RightsAirdropPlayersItemInfo;