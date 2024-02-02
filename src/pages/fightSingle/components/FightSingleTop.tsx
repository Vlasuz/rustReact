import React, {useEffect, useState} from 'react'
import userPhoto from "../../../assets/images/user.jpeg";
import clothesIcon from "../../../assets/images/clothes.svg";
import weaponIcon from "../../../assets/images/weapon.png";
import coins from "../../../assets/images/header__coins.svg";
import {useToggleModal} from "../../../hooks/toggleModal";
import {FightSingleItems} from "./FightSingleItems";
import {prettyCoinValues} from "../../../functions/prettyCoinValues";
import {useNavigate, useParams} from "react-router";
import {getBearer} from "../../../functions/getBearer";
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {useSelector} from "react-redux";

interface IFightSingleTopProps {
    player: any
    gameData?: any
}

export const FightSingleTop: React.FC<IFightSingleTopProps> = ({player, gameData}) => {

    const isHavePlayer = player && Object.keys(player).length
    // const userData = useSelector((state: any) => state.toolkit.user)

    const {fightId} = useParams()
    const navigate = useNavigate()

    const handleCallBot = () => {

        getBearer({type: "post"})
        axios.post(getApiLink(`api/fight/room/call_bot?game_id=${fightId}`)).then(({data}) => {
            console.log(data)
        })

    }

    const handleGoToUser = () => {
        navigate(`/user/${player?.user?.id}`)
    }

    const [gameCoins, setGameCoins] = useState(player?.coins)
    const [isNewSum, setIsNewSum] = useState(+gameCoins)

    useEffect(() => {
        setGameCoins(player?.coins)
        setIsNewSum(player?.coins)
        if(gameData?.fight?.game_state !== "ended") return;

        setGameCoins(player?.user?.id === gameData?.fight?.winner?.user?.id ? gameData?.fight?.winner?.coins * 2 : 0)
    }, [gameData])






    useEffect(() => {
        const targetSum = +gameCoins;
        const oldSum: any = isNewSum;
        const isIncreasing = targetSum > oldSum;

        if (targetSum === oldSum) return;

        const difference = Math.abs(targetSum - oldSum);

        const animationDuration = 600;
        const start = Date.now();
        const increment = difference / animationDuration;

        const animationInterval = setInterval(() => {
            const elapsedTime = Date.now() - start;
            let newSum;

            if (isIncreasing) {
                // Увеличение баланса
                newSum = Math.min(increment * elapsedTime + oldSum, targetSum);
            } else {
                // Уменьшение баланса
                newSum = Math.max(oldSum - increment * elapsedTime, targetSum);
            }

            const formattedSum = newSum.toFixed(0);
            setIsNewSum(+formattedSum);

            if ((isIncreasing && newSum >= targetSum) || (!isIncreasing && newSum <= targetSum)) {
                clearInterval(animationInterval);
            }
        }, 16);

        return () => clearInterval(animationInterval);
    }, [gameCoins]);



    return (
        <div className="section-fight__top">
            <div className={`section-fight__user ${!isHavePlayer && "section-fight__user_call-bot"}`} onClick={!isHavePlayer ? handleCallBot : handleGoToUser}>
                <div className="user__photo">
                    {isHavePlayer ? <img src={player?.user?.avatar} alt="User"/> :
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                            <g clipPath="url(#clip0_626_30351)">
                                <rect x="0.0317383" y="0.568848" width="40" height="40" rx="10" fill="#191A29"/>
                                <path
                                    d="M25.9164 14.217H20.6856V11.6985C20.6856 11.5315 20.6167 11.3713 20.4941 11.2533C20.3715 11.1352 20.2051 11.0688 20.0317 11.0688C19.8583 11.0688 19.692 11.1352 19.5694 11.2533C19.4468 11.3713 19.3779 11.5315 19.3779 11.6985V14.217H14.1471C13.4541 14.2191 12.7902 14.4851 12.3001 14.9569C11.8101 15.4288 11.5339 16.0682 11.5317 16.7355V25.5503C11.5339 26.2176 11.8101 26.857 12.3001 27.3289C12.7902 27.8008 13.4541 28.0668 14.1471 28.0688H25.9164C26.6093 28.0668 27.2733 27.8008 27.7633 27.3289C28.2533 26.857 28.5296 26.2176 28.5317 25.5503V16.7355C28.5296 16.0682 28.2533 15.4288 27.7633 14.9569C27.2733 14.4851 26.6093 14.2191 25.9164 14.217ZM15.4548 18.9392C15.4548 18.7524 15.5123 18.5698 15.6201 18.4145C15.7279 18.2592 15.881 18.1381 16.0603 18.0667C16.2395 17.9952 16.4367 17.9765 16.6269 18.0129C16.8172 18.0494 16.9919 18.1393 17.1291 18.2714C17.2663 18.4035 17.3597 18.5718 17.3975 18.755C17.4354 18.9382 17.4159 19.1281 17.3417 19.3006C17.2675 19.4732 17.1418 19.6207 16.9805 19.7245C16.8192 19.8283 16.6296 19.8837 16.4356 19.8837C16.1755 19.8837 15.926 19.7842 15.7421 19.607C15.5581 19.4299 15.4548 19.1897 15.4548 18.9392ZM17.7433 24.9207H17.0894C16.7426 24.9207 16.41 24.788 16.1648 24.5519C15.9195 24.3157 15.7817 23.9954 15.7817 23.6614C15.7817 23.3275 15.9195 23.0072 16.1648 22.771C16.41 22.5349 16.7426 22.4022 17.0894 22.4022H17.7433V24.9207ZM21.0125 24.9207H19.051V22.4022H21.0125V24.9207ZM22.974 24.9207H22.3202V22.4022H22.974C23.3209 22.4022 23.6535 22.5349 23.8987 22.771C24.144 23.0072 24.2817 23.3275 24.2817 23.6614C24.2817 23.9954 24.144 24.3157 23.8987 24.5519C23.6535 24.788 23.3209 24.9207 22.974 24.9207ZM23.6279 19.8837C23.4339 19.8837 23.2443 19.8283 23.083 19.7245C22.9217 19.6207 22.796 19.4732 22.7218 19.3006C22.6475 19.1281 22.6281 18.9382 22.666 18.755C22.7038 18.5718 22.7972 18.4035 22.9344 18.2714C23.0715 18.1393 23.2463 18.0494 23.4366 18.0129C23.6268 17.9765 23.824 17.9952 24.0032 18.0667C24.1824 18.1381 24.3356 18.2592 24.4434 18.4145C24.5511 18.5698 24.6087 18.7524 24.6087 18.9392C24.6087 19.1897 24.5053 19.4299 24.3214 19.607C24.1375 19.7842 23.888 19.8837 23.6279 19.8837Z"
                                    fill="#3863A7"/>
                                <rect x="0.531738" y="1.06885" width="39" height="39" rx="9.5" stroke="#A2ABC5"
                                      strokeOpacity="0.15" strokeDasharray="3 3"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_626_30351">
                                    <rect x="0.0317383" y="0.568848" width="40" height="40" rx="10" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>}
                </div>
                <div className="user__name">
                    {isHavePlayer ? player?.user?.name : "Призвать бота"}
                </div>
            </div>
            <div className="section-fight__resources">

                {!!player?.items?.length && <FightSingleItems items={player?.items}/>}

                <div className={"resources__coins" + (player?.coins > 0 ? "" : " resources__coins_none")}>
                    <img src={coins} alt="Ico"/>
                    <span>
                        {isNewSum ? prettyCoinValues(isNewSum) : 0}
                    </span>
                </div>
            </div>
        </div>
    )
}
