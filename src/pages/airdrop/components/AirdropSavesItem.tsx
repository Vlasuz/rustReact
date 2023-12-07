import React, {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addAirdropBagsMap, setAirdropSaveZone1, setAirdropSaveZone2, setAirdropSaveZone3, setAirdropSaveZone4 } from '../../../redux/toolkitSlice';
import {AirdropSocketContext} from "../../../App";
import {IUser} from "../../../model";

interface IAirdropSavesItemProps {
    save?: any
    setSave?: any
    saveZone?: number
}

export const AirdropSavesItem: React.FC<IAirdropSavesItemProps> = ({save, saveZone}) => {

    const [isMouseDown, setIsMouseDown] = useState(false)
    let timeToSave: any;

    const dispatch = useDispatch()
    const airdropWsMessages: any = useContext(AirdropSocketContext)
    const userData = useSelector((state: any) => state.toolkit.user)


    useEffect(() => {
        timeToSave = setTimeout(() => {

            if(saveZone === 1) {
                if(save.length === 0) {
                    dispatch(setAirdropSaveZone1(""))
                } else {
                    dispatch(setAirdropSaveZone1('clear'))
                }
            }
            if(saveZone === 2) {
                if(save.length === 0) {
                    dispatch(setAirdropSaveZone2(""))
                } else {
                    dispatch(setAirdropSaveZone2('clear'))
                }
            }
            if(saveZone === 3) {
                if(save.length === 0) {
                    dispatch(setAirdropSaveZone3(""))
                } else {
                    dispatch(setAirdropSaveZone3('clear'))
                }
            }
            if(saveZone === 4) {
                if(save.length === 0) {
                    dispatch(setAirdropSaveZone4(""))
                } else {
                    dispatch(setAirdropSaveZone4('clear'))
                }
            }

            setIsMouseDown(false)
        }, 1000)

        !isMouseDown && clearTimeout(timeToSave);
    }, [isMouseDown])

    const mouseUp = () => {
        clearTimeout(timeToSave);
        setIsMouseDown(false)
    }

    const handleSetBags = () => {
        if(airdropWsMessages?.airdrop?.players.some((item: any) => item.user.id === userData.id)) return;

        if(saveZone === 1) {
            if(save.length) {
                dispatch(addAirdropBagsMap({status: "saves", bags: save}))
            }
        }
        if(saveZone === 2) {
            if(save.length) {
                dispatch(addAirdropBagsMap({status: "saves", bags: save}))
            }
        }
        if(saveZone === 3) {
            if(save.length) {
                dispatch(addAirdropBagsMap({status: "saves", bags: save}))
            }
        }
        if(saveZone === 4) {
            if(save.length) {
                dispatch(addAirdropBagsMap({status: "saves", bags: save}))
            }
        }
    }

    return (
        <div onMouseDown={_ => setIsMouseDown(true)} onClick={handleSetBags} onMouseUp={mouseUp} onMouseLeave={mouseUp}
             className={"saves__item saves__item_empty" + (save.length ? " saves__item_full" : " saves__item_empty") + (isMouseDown ? " mouseDown" : "")}>
            <div className="item__tips">
                {save.length ? <span>Удалить шаблон</span> : <span>Сохранить шаблон</span>}
                <p>Зажм. ЛКМ</p>
            </div>
            <div className="item__box">
                {save.length > 0 ?
                    <span>
                            {save.length}
                        </span> :
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={"arrow"}
                              d="M8.25 1C8.25 0.585786 7.91421 0.25 7.5 0.25C7.08579 0.25 6.75 0.585786 6.75 1H8.25ZM6.96967 11.5303C7.26256 11.8232 7.73744 11.8232 8.03033 11.5303L12.8033 6.75736C13.0962 6.46447 13.0962 5.98959 12.8033 5.6967C12.5104 5.40381 12.0355 5.40381 11.7426 5.6967L7.5 9.93934L3.25736 5.6967C2.96447 5.40381 2.48959 5.40381 2.1967 5.6967C1.90381 5.98959 1.90381 6.46447 2.1967 6.75736L6.96967 11.5303ZM6.75 1L6.75 11H8.25V1H6.75Z"
                              fill="#6A6F7C"/>
                        <path className={"bottom"}
                              d="M1 10V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V10"
                              stroke="#6A6F7C"
                              strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                }
            </div>
        </div>
    )
}
