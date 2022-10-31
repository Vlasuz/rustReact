import React from 'react';
import MessageTop from "./MessageTop";
import MessageText from "./MessageText";
import MessageDropdown from "./MessageDropdown";

const MessageContent = () => {
    return (
        <div className="item__inner">
            <MessageTop />
            <MessageText />
            <MessageDropdown />
        </div>
    );
};

export default MessageContent;