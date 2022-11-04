import React from 'react';

const MessageText = ({messageInfo}) => {
    return (
        <div className="item__text">
            <p>
                {messageInfo.text}
            </p>
        </div>
    );
};

export default MessageText;