import React from 'react';
import {Link} from "react-router-dom";

const MessagePhoto = ({messageInfo}) => {
    return (
        <Link to={"/person"} className="item__photo">
            <div className="photo">
                <img src={messageInfo.user?.image} alt="User"/>
            </div>
            <div className="mark">
                <img src="images/twitch.svg" alt="Ico"/>
            </div>
        </Link>
    );
};

export default MessagePhoto;