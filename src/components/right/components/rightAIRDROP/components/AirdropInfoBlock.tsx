import React, { useEffect } from 'react'
import lineAirdrop from "../../../../../assets/images/line-for-right.svg";
import coins from "../../../../../assets/images/header__coins.svg";

interface IAirdropInfoBlockProps {

}

export const AirdropInfoBlock:React.FC<IAirdropInfoBlockProps> = () => {

    return (
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
    )
}
