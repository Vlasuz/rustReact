import React, {useEffect, useState} from 'react'
import {RightAirdropStyled} from "./RightAirdrop.styled";
import {AirdropBags} from "./components/AirdropBags";
import coins from './../../../../assets/images/header__coins.svg'
import lineAirdrop from './../../../../assets/images/line-for-right.svg'
import {AirdropMember} from "./components/AirdropMember";
import {AirdropMoveBags} from "./components/AirdropMoveBags";
import {AirdropInfoBlock} from "./components/AirdropInfoBlock";
import { useSelector } from 'react-redux';

interface IRightAirdropProps {
    blockValue: any,
    isHideBlock: any
}

export const RightAirdrop: React.FC<IRightAirdropProps> = ({blockValue, isHideBlock}) => {

    // choose, dragging, member
    const [pointOfGame, setPointOfGame] = useState<string>("choose")

    const [countOfBags, setCountOfBags] = useState(0)
    const userInfo = useSelector((state: any) => state.toolkit.user)

    const handleBuyBags = () => {
        setPointOfGame("dragging")
    }
    const handleJoinGame = () => {
        setPointOfGame("member")
    }

    const steps: any = {
        "choose": <AirdropBags handleBuyBags={handleBuyBags} setBags={setCountOfBags}/>,
        "dragging": <AirdropMoveBags handleJoinGame={handleJoinGame} countOfBags={countOfBags}/>,
        "member": <AirdropMember/>,
    }

    return (
        <RightAirdropStyled className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + ` ${pointOfGame}` + isHideBlock}>
            <div className="section-right__airdrop">

                <AirdropInfoBlock/>
                {!!Object.keys(userInfo).length && steps[pointOfGame]}

            </div>
            <div className="section-right__players section-right__players_none">
                <big>Ставок нет</big>
                <div className="players__list">

                </div>
            </div>
        </RightAirdropStyled>
    )
}
