import React from 'react';

const RightsAirdropPlayersItemPhoto = ({infoPlayer}) => {
    return (
        <div className="item__photo">
            <img src={infoPlayer.photo} alt="User"/>
        </div>
    );
};

export default RightsAirdropPlayersItemPhoto;