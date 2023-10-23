import React, {useEffect} from 'react'
import {RightAirdropStyled} from "./RightAirdrop.styled";
import {AirdropBags} from "./components/AirdropBags";
import coins from './../../../../assets/images/header__coins.svg'
import lineAirdrop from './../../../../assets/images/line-for-right.svg'

interface IRightAirdropProps {
    blockValue: any,
    isHideBlock: any
}

export const RightAirdrop: React.FC<IRightAirdropProps> = ({blockValue, isHideBlock}) => {

    return (
        <RightAirdropStyled className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + isHideBlock}>
            <div className="section-right__airdrop">
                <div className="airdrop__block">
                    <div className="airdrop__fly">
                        <div className="fly__top">
                            <p>До вылета:</p>
                            <div className="timer">
                                <div className="min">
                                    <span>00</span>
                                </div>
                                <div className="sec">
                                    <small className="dot">.</small>
                                    <span>00</span>
                                </div>
                            </div>
                        </div>
                        <div className="fly__bottom">
                            <div className="fly__timer">
                                <img src={lineAirdrop} alt="Ico"/>
                                <div className="line">
                                    <div className="line_done"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="airdrop__bank">
                        <p>В банке</p>
                        <div className="coins">
                            <img src={coins} alt="Ico"/>
                            <span>
                                123
                            </span>
                        </div>
                    </div>
                </div>
                <AirdropBags/>
            </div>
            <div className="section-right__players section-right__players_none">
                <big>Ставок нет</big>
                <div className="players__list">

                </div>
            </div>
        </RightAirdropStyled>
    )
}
