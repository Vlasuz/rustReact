import React, {useState} from 'react';
import MessageTop from "./MessageTop";
import MessageText from "./MessageText";
import MessageDropdown from "./MessageDropdown";

const MessageContent = ({messageInfo}) => {

    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <div className="item__inner">
            <MessageTop messageInfo={messageInfo} setOpenDropdown={setOpenDropdown} />
            <MessageText messageInfo={messageInfo} />
            <MessageDropdown openDropdown={openDropdown} />
        </div>
    );
};

export default MessageContent;