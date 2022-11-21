import React from 'react';
import {useState} from "react";

const RightsChatSmiles = (props) => {

    const smilesBlocks = [
        {id: 0, title: "Смайлики"},
        {id: 1, title: "Стикеры «Фермер»"},
        {id: 2, title: "«Стикеры Грибник»"}
    ]

    const clickSmilesBlocks = (e) => {
        document.querySelectorAll('.smiles__switches li').forEach(li => li.classList.remove('li_active'))
        e.target.closest('li').classList.add('li_active')
    }

    const sendSmile = (e) => {
        let timeNow = new Date();
        let linkToImage = e.target.closest('img').getAttribute('src')

        props.setMessages(oldMessages => [...oldMessages, newMessage]);

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
            text: <img src={linkToImage} />
        }
    }




    return (
        <div className="section-right__smiles">
            <div className="smiles__inner">
                <div className="smiles__block">
                    <ul>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-0.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-1.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-2.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-3.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-4.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-5.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-0.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-1.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-2.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-3.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-4.png" alt="Smile"/>
                            </button>
                        </li>
                        <li>
                            <button onClick={e => sendSmile(e)}>
                                <img src="images/Bitmap-5.png" alt="Smile"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="smiles__switches">
                <ul>
                    {
                        smilesBlocks.map(item =>
                            <li key={item.id} className={item.id === 0 ? 'li_active' : ''} onClick={e => clickSmilesBlocks(e)}>
                                <button>{item.title}</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default RightsChatSmiles;