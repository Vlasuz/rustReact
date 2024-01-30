import React, {useContext, useEffect, useState} from 'react'
import {PopupsContext} from '../../context/popupsContext'
import {setPopup, setUser} from "../../redux/toolkitSlice";
import {useDispatch, useSelector} from "react-redux";
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {closePopup} from "../../functions/closePopup";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {IUser} from "../../model";
import {getBearer} from "../../functions/getBearer";

interface IChangeUserSloganProps {

}

export const ChangeUserSlogan: React.FC<IChangeUserSloganProps> = () => {

    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const [sloganValue, setSloganValue] = useState(userInfo.status)
    const dispatch = useDispatch()
    const setIsOpen = useContext(PopupsContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        getBearer({type: "post"})
        axios.post(getApiLink('api/user/change_status/?status='+sloganValue)).then(({data}) => {
            console.log(data)

            dispatch(setUser(data))

            closePopup({setIsOpen, dispatch})
        }).catch(er => {
            console.log(er)
        })
    }

    return (
        <>
            <h2>Изменить статус</h2>
            <p>Измените свой статус в профиле. Максимальное
                количество символов 12</p>
            <PopupCross/>
            <form onSubmit={e => handleSubmit(e)}>
                <input className="trade-link__input" type="text" onChange={e => setSloganValue(e.target.value)} maxLength={12} required value={sloganValue} />
                <div className="trade-link__buttons">
                    <button>Сохранить</button>
                </div>
            </form>
        </>
    )
}
