import React, {useEffect} from 'react';
import {useState} from "react";
import axios from "axios";
import GlobalLink from "../../../Hooks/GlobalLink";
import {getCookie} from "../../../Hooks/GetCookies";
import {useDispatch, useSelector} from "react-redux";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";

const RightsChatSmiles = ({websocket}) => {

    const [stickers, setStickers] = useState([])
    const [stickerOrder, setStickerOrder] = useState(0)
    const auth = useSelector(state => state.reducerAuth.auth)
    const dispatch = useDispatch()

    const clickSmilesBlocks = (e, itemNum) => {
        document.querySelectorAll('.smiles__switches li').forEach(li => li.classList.remove('li_active'))
        e.target.closest('li').classList.add('li_active')
        document.querySelector('.smiles__block').style.opacity = 0
        setTimeout(() => {
            setStickerOrder(itemNum)
            document.querySelector('.smiles__block').style.opacity = 1
        }, 300)
    }

    const sendSmile = (e, item) => {

        if (auth) {
            document.querySelector('.section-right__smiles_active').classList.remove('section-right__smiles_active')
            websocket.send(JSON.stringify({
                "type": "send_message",
                "data": {"message": "https://" + GlobalLink() + `/${item.image}`}
            }));
        } else {
            dispatch(setNotice("auth_for_messages"))
        }

    }


    useEffect(() => {

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.get("https://" + GlobalLink() + '/api/chat/stickers/').then(res => setStickers(res.data))

    }, [])

    return (
        <div className="section-right__smiles">
            <div className="smiles__inner">
                <div className="smiles__block">
                    <ul>
                        {
                            !!stickers.length && stickers[stickerOrder].stickers.map((item, itemNum) =>
                                <li key={item.id}>
                                    <button onClick={e => sendSmile(e, item)}>
                                        <img src={"https://" + GlobalLink() + "/" + item.image} alt="Smile"/>
                                    </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="smiles__switches">
                <ul>
                    {
                        stickers.map((item, itemNum) => {
                                return (
                                    <li key={item.id} className={itemNum === 0 ? 'li_active' : ''}
                                        onClick={e => clickSmilesBlocks(e, itemNum)}>
                                        <button>{item.title}</button>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default RightsChatSmiles;