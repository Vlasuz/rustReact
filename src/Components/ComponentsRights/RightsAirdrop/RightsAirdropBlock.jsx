import React, {useEffect, useState} from 'react';
import Timer from "../../Timer";

const RightsAirdropBlock = ({onCoins, timer, setNumSwitch, numSwitch, isAirdropEnd}) => {

    return (
        <div className="airdrop__block">
            <div className="airdrop__fly">
                <div className="fly__top">
                    <p>До вылета:</p>
                    <Timer />
                </div>
                <div className="fly__bottom">
                    <div className="fly__timer">
                        <img src="images/line-for-right.svg" alt="Ico"/>
                        <div className="line">
                            <div className="line_done">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="airdrop__bank">
                <p>В банке</p>
                <div className="coins">
                    <img src="images/header__coins.svg" alt="Ico"/>
                    <span>
                                {onCoins}
                            </span>
                </div>
            </div>
        </div>
    );
};

export default RightsAirdropBlock;