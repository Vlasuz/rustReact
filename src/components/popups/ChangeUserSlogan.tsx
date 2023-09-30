import React, {useContext, useEffect} from 'react'
import { PopupsContext } from '../../context/popupsContext'
import {setPopup} from "../../redux/toolkitSlice";
import {useDispatch} from "react-redux";
import {PopupCross} from "../../hooks/popup/components/PopupCross";

interface IChangeUserSloganProps {

}

export const ChangeUserSlogan: React.FC<IChangeUserSloganProps> = () => {

    return (
        <>
            <h2>Изменить статус</h2>
            <p>Измените свой статус в профиле. Максимальное
                количество символов 12</p>
            <PopupCross/>
            <form>
                <input className="trade-link__input" type="text" maxLength={12} required value="∆®√Ω˚" />
                    <div className="trade-link__buttons">
                        <button>Сохранить</button>
                    </div>
            </form>
        </>
)
}
