import React from 'react';

const RightsAirdropPlayersItemPhoto = (props) => {
    return (
        <div className="item__photo">
            <img src={props.infoPlayer.photo} alt="User"/>
        </div>
    );
};

export default RightsAirdropPlayersItemPhoto;