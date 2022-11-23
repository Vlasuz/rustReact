import React, {useEffect, useState} from 'react';

const RightsChatTextarea = ({setMessages}) => {

    const [textMessage, setTextMessage] = useState('')

    const scrollToBottom = () => {
        let chatBlock = document.querySelector('.section-right__chatting')
        chatBlock.scrollTo({
            top: chatBlock.scrollHeight,
            behavior: "smooth"
        });
    }

    let smilesOpen = function () {
        document.querySelector('.section-right__smiles').classList.toggle('section-right__smiles_active')
    }
    let sendMessage = function (e) {
        e.preventDefault();


        let timeNow = new Date();
        let newMessage = {
            id: timeNow.getTime(),
            date: {
                hour: (timeNow.getHours() < 10) ? '0' + timeNow.getHours() : timeNow.getHours(),
                min: (timeNow.getMinutes() < 10) ? '0' + timeNow.getMinutes() : timeNow.getMinutes(),
            },
            user: {
                image: 'images/user.jpeg',
                name: 'Михоелъ'
            },
            text: textMessage
        }

        if (textMessage.trim()) {
            setMessages(oldMessages => [...oldMessages, newMessage]);
        }
        setTextMessage('')
    }

    useEffect(() => {
        scrollToBottom()
    }, [textMessage])

    let inputMessage = function (e) {
        setTextMessage(e.target.value)
    }

    return (
        <form
            className="section-right__bottom"
            action="/"
            onSubmit={sendMessage}
        >
            <label className="textarea">
                <input
                    placeholder="Сообщение"
                    maxLength="150"
                    onChange={inputMessage}
                    value={textMessage}
                />
                <span className="maxl">0/150</span>
            </label>
            <div
                className="smiles"
                onClick={smilesOpen}
            >
                <img src="images/smile-1.png" alt="Smile"/>
            </div>
            <button className="send">
                <img src="images/send-message.svg" alt="Ico"/>
            </button>
        </form>
    );
};

export default RightsChatTextarea;