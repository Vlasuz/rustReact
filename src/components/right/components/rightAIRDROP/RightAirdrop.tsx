import React, {useContext, useEffect, useState} from 'react'
import {RightAirdropStyled} from "./RightAirdrop.styled";
import {AirdropBags} from "./components/AirdropBags";
import coins from './../../../../assets/images/header__coins.svg'
import lineAirdrop from './../../../../assets/images/line-for-right.svg'
import {AirdropMember} from "./components/AirdropMember";
import {AirdropMoveBags} from "./components/AirdropMoveBags";
import {AirdropInfoBlock} from "./components/AirdropInfoBlock";
import {useDispatch, useSelector} from 'react-redux';
import {
    clearAirdropBagsMap,
    setAirdropBags,
    setAirdropUserStatus,
    setSound,
    setUserBalance
} from '../../../../redux/toolkitSlice';
import axios from "axios";
import {getApiLink} from "../../../../functions/getApiLink";
import {AirdropSocketContext} from "../../../../App";
import {AirdropMembersList} from "./components/AirdropMembersList";
import {getBearer} from "../../../../functions/getBearer";
import {ISiteSettings} from "../../../../model";

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
    const airdropBagsMap = useSelector((state: any) => state.toolkit.airdropBagsMap)
    const settings: ISiteSettings = useSelector((state: any) => state.toolkit.siteSettings)

    const [isPressJoin, setIsPressJoin] = useState(false)

    const airdropWsMessages: any = useContext(AirdropSocketContext)

    const handleBuyBags = () => {
        setPointOfGame("dragging")
        dispatch(setAirdropBags(countOfBags))
        dispatch(setSound('sound12'))
    }
    const handleJoinGame = () => {
        if (isPressJoin) return;
        setIsPressJoin(true)

        dispatch(setSound("sound9"))

        const bagsListForRequest = airdropBagsMap.map((item: any) => {
            return {x_pos: item.x / 1500, y_pos: item.y / 1500}
        })
        getBearer({type: 'post'})
        axios.post(getApiLink("api/airdrop/bags/choose?game_id=" + airdropWsMessages?.airdrop?.id), {
            "bags": bagsListForRequest
        }).then(({data}) => {
            console.log(data)
            if (data.status) {
                dispatch((setAirdropUserStatus("member")))
                dispatch(clearAirdropBagsMap())
                setPointOfGame("member")
                setIsPressJoin(false)
                dispatch(setUserBalance(data.message))
            }
        }).catch(er => console.log('airdrop', er))

    }

    const steps: any = {
        "choose": <AirdropBags handleBuyBags={handleBuyBags} setBags={setCountOfBags}/>,
        "dragging": <AirdropMoveBags setPointOfGame={setPointOfGame} handleJoinGame={handleJoinGame}/>,
        "member": <AirdropMember/>,
    }

    useEffect(() => {
        if (airdropWsMessages?.airdrop?.players.some((player: any) => player.user.id === userInfo.id)) {
            setPointOfGame("member")
        }

        if (airdropWsMessages?.airdrop?.game_state === "prepare") {
            setPointOfGame('choose')
        }
    }, [airdropWsMessages, userInfo])

    useEffect(() => {
        if (airdropBagsMap.length === 0) return;

        setPointOfGame("dragging")
    }, [airdropBagsMap])

    useEffect(() => {

        if(airdropWsMessages?.airdrop?.game_state !== "start") dispatch(setSound('sound10'))

        if(airdropWsMessages?.airdrop?.game_state === "ended") {
            if(airdropWsMessages?.airdrop?.winner.user.id === userInfo.id) {
                dispatch(setUserBalance({sum: true, money: +airdropWsMessages?.airdrop?.bank - (+airdropWsMessages?.airdrop?.bank * settings.airdrop_commission / 100)}))
                dispatch(setSound('sound13'))
            } else {
                dispatch(setSound('sound17'))
            }
        }

    }, [airdropWsMessages?.airdrop?.game_state])

    const isUserAuthMainClass = !Object.keys(userInfo).length ? " no-auth" : ""

    return (
        <RightAirdropStyled
            className={"section-right__item" + (blockValue.block === 'no_chat' ? ' section-right_active' : '') + ` ${pointOfGame}` + isUserAuthMainClass + isHideBlock}>
            <div className="section-right__airdrop">

                <AirdropInfoBlock/>
                {!!Object.keys(userInfo).length && steps[pointOfGame]}

            </div>
            <AirdropMembersList/>
        </RightAirdropStyled>
    )
}
