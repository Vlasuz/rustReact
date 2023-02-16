import React from 'react';

const RightsAirdropPlayersItemInfo = (props) => {
    return (
        <>
            <p className="item__name">
                {props.infoPlayer.name}
            </p>
            <div className="item__coins">
                <img src="../images/header__coins.svg" alt="Coins"/>
                <span>
                    {props.infoPlayer.coins}
                </span>
            </div>
        </>
    );
};

export default RightsAirdropPlayersItemInfo;