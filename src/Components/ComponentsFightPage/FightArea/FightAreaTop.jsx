import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";

const FightAreaTop = ({ userInfo }) => {


    console.log('userInfo fight-top', userInfo?.user?.name, userInfo)

    const handleOpenItems = (e) => {
        e.target.closest('.resources__clothes').querySelector('.clothes__body').classList.toggle('clothes__body_active')
    }
    const response = useSelector(state => state.reducerFightsResponse.response)

    const [isEnded, setIsEnded] = useState({})


    function confetti() {
        // eslint-disable-next-line no-undef
        $.each($(".particletext.confetti"), function () {
            // eslint-disable-next-line no-undef
            var confetticount = ($(this).width() / 50) * 10;
            for (var i = 0; i <= confetticount; i++) {
                // eslint-disable-next-line no-undef
                $(this).append('<span class="particle c' + $.rnd(1, 2) + '" style="top:' + $.rnd(50, 50) + '%; left:' + $.rnd(0, 100) + '%;width:' + $.rnd(6, 8) + 'px; height:' + $.rnd(3, 4) + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
            }
        });
    }
    // eslint-disable-next-line no-undef
    jQuery.rnd = function (m, n) {
        m = parseInt(m);
        n = parseInt(n);
        return Math.floor(Math.random() * (n - m + 1)) + m;
    }


    useEffect(() => {

        if (response?.fight?.game_state === 'ended' && !Object.keys(isEnded).length) {
            setIsEnded(response.fight.winner)
        }
        confetti()
    }, [response])

    return (
        <div className="section-fight__top">

            <div className="section-fight__user">
                <div className="user__photo">
                    <img src={userInfo?.user.avatar} alt="User"/>
                </div>
                <div className={"user__name" + (response?.fight?.winner?.id === userInfo?.id ? " particletext confetti" : "")}>
                    {userInfo?.user.name}
                </div>
            </div>

            <div className="section-fight__resources">

                {
                    !!userInfo?.items.length &&
                        <div className="resources__clothes">
                            <button className="clothes__head" onClick={handleOpenItems}>
                                <img src="../images/clothes.svg" alt="Ico"/>
                            </button>
                            <div className="clothes__body">
                                <ul>

                                    {
                                        userInfo?.items.map(item =>
                                            <li key={item.id}>
                                                {/*<div className={"clothes__cool"} style={{background: item.rarity.color}} />*/}
                                                <div className={"item__is-lock" + (item.trade_ban !== null ? " item__is-lock_true" : "")}>
                                                    <img src="../images/lock-map.svg" width={'11'} alt=""/>
                                                </div>

                                                <img src={item.image} alt="Photo"/>
                                            </li>
                                        )
                                    }

                                    <li className="count">
                                        <span>+3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                }
                <div
                    className={"resources__coins" + (isEnded?.user?.id === userInfo?.user?.id ? " resources__coins_plus" : " resources__coins_minus")}>
                    <img src="../images/header__coins.svg" alt="Ico"/>
                    <span>{userInfo?.coins}</span>
                </div>


            </div>
        </div>
    );
};

export default FightAreaTop;