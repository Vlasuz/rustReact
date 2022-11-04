import React from 'react';

const MessagePhoto = ({messageInfo}) => {
    return (
        <div className="item__photo">
            <div className="photo">
                <img src={messageInfo.user?.image} alt="User"/>
            </div>
            <div className="mark">
                <img src="images/twitch.svg" alt="Ico"/>
            </div>
        </div>
    );
};

export default MessagePhoto;