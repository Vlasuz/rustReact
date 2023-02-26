import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const FightAreaTop = ({userInfo}) => {

    const handleOpenItems = (e) => {
        e.target.closest('.resources__clothes').querySelector('.clothes__body').classList.toggle('clothes__body_active')
    }
    const response = useSelector(state => state.reducerFightsResponse.response)

    const [isEnded, setIsEnded] = useState({})


    useEffect(() => {

        if (response?.data?.result === 'end' && !Object.keys(isEnded).length) {
            setIsEnded(response.data.players.filter(item => item.win))
        }

    }, [response])

    console.log("111", userInfo)

    return (
        <div className="section-fight__top">

            <div className="section-fight__user">
                <div className="user__photo">
                    <img src={userInfo.user.avatar} alt="User"/>
                </div>
                <div className="user__name">
                    {userInfo.user.name}
                </div>
            </div>

            <div className="section-fight__resources">

                {
                    !!userInfo.items.length &&
                        <div className="resources__clothes">
                            <button className="clothes__head" onClick={handleOpenItems}>
                                <img src="../images/clothes.svg" alt="Ico"/>
                            </button>
                            <div className="clothes__body">
                                <ul>

                                    {
                                        userInfo.items.map(item =>
                                            <li key={item.id}>
                                                <div className={
                                                    item.rarity.color === "3" ? "clothes__cool clothes__cool_red" :
                                                        item.rarity.color === "2" ? "clothes__cool clothes__cool_blue" :
                                                            item.rarity.color === "1" ? "clothes__cool clothes__cool_green" :
                                                                "clothes__cool clothes__cool_grey"
                                                } />

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
                    className={"resources__coins " + (Object.keys(isEnded).length && (isEnded[0].user.id === userInfo.user.id ? " resources__coins_plus" : " resources__coins_minus"))}>
                    <img src="../images/header__coins.svg" alt="Ico"/>
                    <span>{userInfo.coins}</span>
                </div>


            </div>
        </div>
    );
};

export default FightAreaTop;