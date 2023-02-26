import React, {useEffect, useState} from 'react';
import Translate from "../../Hooks/Translate";
import PopupCloseCross from "./PopupCloseCross";
import PopupCloseBackground from "./PopupCloseBackground";
import {useSelector} from "react-redux";
import axios from "axios";
import {getCookie} from "../../Hooks/GetCookies";

const PopupChangeStatus = ({ status, setStatus }) => {

    const [input, setInput] = useState(status)

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie("access_token")}`;
        axios.post("https://rust.onefut.net/api/user/change_status/?status=" + input).then(res => {
            document.querySelectorAll('.popup').forEach(function (pp) {
                pp.classList.remove('popup_active')
                setStatus(input)
                setInput('')
            })
        })

    }

    return (
        <div className="popup popup-change-status">
            <PopupCloseBackground/>
            <div className="popup__content">
                <h2>
                    <Translate>change_status</Translate>
                </h2>
                <p>
                    Измените свой статус в профиле. Максимальное количество символов 12
                </p>
                <PopupCloseCross/>
                <form onSubmit={handleSubmit}>
                    <input
                        className={"trade-link__input"}
                        type="text"
                        required
                        maxLength={12}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <div className="trade-link__buttons">
                        <button>
                            <Translate>save</Translate>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupChangeStatus;