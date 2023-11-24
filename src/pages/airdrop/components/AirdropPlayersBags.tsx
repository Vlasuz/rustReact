import React, {useContext, useEffect} from 'react'
import coinsIcon from "../../../assets/images/header__coins.svg";
import {AirdropSocketContext} from "../../../App";
import {useSelector} from 'react-redux';
import {IUser} from "../../../model";

interface IAirdropPlayersBagsProps {
    player: any
}

export const AirdropPlayersBags: React.FC<IAirdropPlayersBagsProps> = ({player}) => {

    const airdropWsMessages: any = useContext(AirdropSocketContext)
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const isYourUser = userInfo.id !== player.user.id

    const isBagWinner = (bag: any) => {
        return airdropWsMessages?.airdrop?.win_bag?.map_pos === bag.map_pos && bag.y_pos === airdropWsMessages?.airdrop?.win_bag?.y_pos && bag.x_pos === airdropWsMessages?.airdrop?.win_bag?.x_pos
    }

    return (
        <>

            {
                player.bags.map((bag: any) =>

                    <li className={"point" + (isBagWinner(bag) ? " point_winner" : "")} key={bag.x_pos + bag.y_pos + player.user.id}
                        style={{left: `${bag.x_pos * 1500}px`, top: `${bag.y_pos * 1500}px`}}>
                        <div className="point__group">
                            <div className="point__photo">
                                <img src={player.user.avatar} alt="Photo"/>
                                <svg width="44" height="50" viewBox="0 0 44 50" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.08361 7.08363C15.4141 -1.24683 28.9204 -1.24683 37.2509 7.08363C45.5813 15.4141 45.5813 28.9204 37.2509 37.2509L26.4099 48.0919C24.0667 50.435 20.2677 50.435 17.9246 48.0919L7.08361 37.2509C-1.24685 28.9204 -1.24685 15.4141 7.08361 7.08363Z"
                                        fill={isYourUser ? "#CD402A" : "#92C145"}>
                                    </path>
                                </svg>
                            </div>
                            {isBagWinner(bag) &&
                                <div className="point__winner-table point__winner-table_active">
                                    <div className="table__left"
                                         style={{background: `linear-gradient(89.07deg, ${isYourUser ? "rgb(205, 64, 42)" : "rgb(146, 193, 69)"} 0.69%, ${isYourUser ? "rgb(55, 20, 20)" : "rgb(40, 70, 20)"} 99.35%)`}}>
                                        <img src={player.user.avatar} alt="Photo"/>
                                        <span className="">
                                        {player.user.name}
                                    </span>
                                        <div className="line" style={{background: isYourUser ? "rgb(205, 64, 42)" : "rgb(146, 193, 69)"}}/>
                                    </div>
                                    <div className="table__right">
                                        <p>Забирает банк:</p>
                                        <div className="right__bottom">
                                            <img src={coinsIcon} alt="Coins"/>
                                            <span>
                                            {airdropWsMessages?.airdrop?.bank}
                                        </span>
                                        </div>
                                    </div>
                                </div>}
                            <div className="point__dot">
                                <div className="line"
                                     style={{background: isYourUser ? "rgb(205, 64, 42)" : "rgb(146, 193, 69)"}}/>
                                <div className="dot"
                                     style={{background: isYourUser ? "rgb(205, 64, 42)" : "rgb(146, 193, 69)"}}/>
                            </div>
                        </div>
                    </li>
                )
            }

        </>
    )
}
