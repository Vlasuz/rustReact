import React, {useEffect, useState} from 'react'
import {RightAirdropStyled} from "./RightAirdrop.styled";
import {AirdropBags} from "./components/AirdropBags";
import coins from './../../../../assets/images/header__coins.svg'
import lineAirdrop from './../../../../assets/images/line-for-right.svg'
import {AirdropMember} from "./components/AirdropMember";
import {AirdropMoveBags} from "./components/AirdropMoveBags";
import {AirdropInfoBlock} from "./components/AirdropInfoBlock";
import {useDispatch, useSelector} from 'react-redux';
import { setAirdropBags, setAirdropUserStatus } from '../../../../redux/toolkitSlice';

interface IRightAirdropProps {
    blockValue: any,
    isHideBlock: any
}

export const RightAirdrop: React.FC<IRightAirdropProps> = ({blockValue, isHideBlock}) => {

    // choose, dragging, member
    const [pointOfGame, setPointOfGame] = useState<string>("choose")
    const dispatch = useDispatch()

    const [countOfBags, setCountOfBags] = useState(0)
    const userInfo = useSelector((state: any) => state.toolkit.user)

    const handleBuyBags = () => {
        setPointOfGame("dragging")
        dispatch(setAirdropBags(countOfBags))
    }
    const handleJoinGame = () => {
        dispatch((setAirdropUserStatus("member")))
        setPointOfGame("member")
    }

    const steps: any = {
        "choose": <AirdropBags handleBuyBags={handleBuyBags} setBags={setCountOfBags}/>,
        "dragging": <AirdropMoveBags handleJoinGame={handleJoinGame}/>,
        "member": <AirdropMember/>,
    }

    const isUserAuthMainClass = !Object.keys(userInfo).length ? " no-auth" : ""

    return (
        <RightAirdropStyled className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + ` ${pointOfGame}` + isUserAuthMainClass + isHideBlock}>
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
