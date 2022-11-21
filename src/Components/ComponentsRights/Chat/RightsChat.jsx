import React from 'react';
import RightsChatMessage from "./RightsChatMessage";
import RightsChatSmiles from "./RightsChatSmiles";
import RightsChatTextarea from "./RightsChatTextarea";
import RightsChatRules from "./RightsChatRules";
import {useState} from "react";
import RightsChatResources from "./RightsChatResources";

const RightsChat = () => {

    const [messages, setMessages] = useState([
        {
            id: 1,
            date: {
                hour: '10',
                min: '48',
            },
            user: {
                image: 'images/user.jpeg',
                name: 'Михоелъ'
            },
            text: 'Что-то мне не очень везет на сэйв зоны, слишком уж рандомно они себя ведут 12'
        },
        {
            id: 2,
            date: {
                hour: '10',
                min: '49',
            },
            user: {
                image: 'images/user.jpeg',
                name: 'Михоелъ'
            },
            text: 'Что, слишком уж рандомно они себя ведут 12'
        }
    ])

    return (
        <div className="section-right__chatting">
            <div className="chatting__block">
                {
                    messages.map(sms =>
                        <RightsChatMessage key={sms.id} thisId={sms.id} messageInfo={sms} messages={messages} setMessages={setMessages} />
                    )
                }

            </div>
            <RightsChatSmiles setMessages={setMessages}/>
            <RightsChatRules />
            <RightsChatResources />
            <RightsChatTextarea setMessages={setMessages}/>
        </div>
    );
};

export default RightsChat;