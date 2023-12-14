import React, {useContext, useEffect, useRef, useState} from 'react'
import {PopupCross} from "../../hooks/popup/components/PopupCross";
import {PopupsContext} from '../../context/popupsContext';
import {Translate} from '../translate/Translate';

import copyIcon from './../../assets/images/copy-icon.svg'
import {useSelector} from 'react-redux';

interface IPopupCheckTrustGameProps {

}

export const PopupCheckTrustGame: React.FC<IPopupCheckTrustGameProps> = () => {

    const popupData: any = useSelector((state: any) => state.toolkit.popupData)

    const blockRandom = useRef(null)
    const blockSignature = useRef(null)

    const [isCopiedRandom, setIsCopiedRandom] = useState(false)
    const [isCopiedSignature, setIsCopiedSignature] = useState(false)

    const handleCopy = (setState: any, data: string) => {
        console.log(data)
        navigator.clipboard.writeText(`${data}`).then(r => setState(true))

        setTimeout(() => {
            setState(false)
        }, 500)
    }

    return (
        <>
            <h2>
                <Translate>fair_game_title</Translate>
            </h2>
            <PopupCross/>
            <div className="popup-fair-game__border">
                <h3>
                    <Translate>fair_game_data</Translate>
                </h3>
                <ul>
                    <li className={'bank-coins-info'}>
                        <p>
                            <Translate>fair_game_jackpot</Translate>
                            <span>
                                {popupData.bank}
                            </span>
                        </p>
                    </li>
                    <li className={'hash-info'}>
                        <input type="text" id="hash-info-copy"/>
                        <p>Random:
                            <span ref={blockRandom}>
                                {popupData.random_data}
                            </span>
                        </p>
                        <div onClick={_ => handleCopy(setIsCopiedRandom, popupData.random_data)} className={`copy ${isCopiedRandom && "copied"}`}>
                                <span>
                                    <Translate>copied</Translate>
                                </span>
                            <img src={copyIcon} alt=""/>
                        </div>
                    </li>
                    <li className={'id-info'}>
                        <input type="text" id="id-info-copy"/>
                        <p>Signature:
                            <span ref={blockSignature}>
                                {popupData.random_hash}
                            </span>
                        </p>
                        <div onClick={_ => handleCopy(setIsCopiedSignature, popupData.random_hash)} className={`copy ${isCopiedSignature && "copied"}`}>
                                <span>
                                    <Translate>copied</Translate>
                                </span>
                            <img src={copyIcon} alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="popup-fair-game__text">
                <p><Translate>before_the_game</Translate></p>
                <br/>
                <p><Translate>before_the_game_hash</Translate></p>
                <br/>
                <p><Translate>before_the_game_end</Translate></p>
                <a href={"https://api.random.org/signatures/form"} target={"_blank"} className="popup__close">
                    <Translate>fair_game_check</Translate>
                </a>
            </div>
        </>
    )
}
