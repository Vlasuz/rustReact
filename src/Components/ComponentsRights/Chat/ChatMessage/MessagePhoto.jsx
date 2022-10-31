import React from 'react';

const MessagePhoto = () => {
    return (
        <div className="item__photo">
            <div className="photo">
                <img src="images/user.jpeg" alt="User"/>
            </div>
            <div className="mark">
                <img src="images/twitch.svg" alt="Ico"/>
            </div>
        </div>
    );
};

export default MessagePhoto;