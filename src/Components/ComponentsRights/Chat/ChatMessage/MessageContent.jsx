import React, {useState} from 'react';
import MessageTop from "./MessageTop";
import MessageText from "./MessageText";
import MessageDropdown from "./MessageDropdown";

const MessageContent = ({messageInfo, messages, setMessages, thisId}) => {

    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <div className="item__inner">
            <MessageTop messageInfo={messageInfo} setOpenDropdown={setOpenDropdown} />
            <MessageText messageInfo={messageInfo} />
            <MessageDropdown
                thisId={thisId}
                openDropdown={openDropdown}
                messages={messages}
                setMessages={setMessages}
            />
        </div>
    );
};

export default MessageContent;