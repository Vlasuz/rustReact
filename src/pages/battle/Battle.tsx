import React, {useEffect, useState} from 'react'
import {BattleStyled} from "./Battle.styled";
import {BattleTop} from "../../components/battleTop/BattleTop";
import {BattleItem} from "./components/battleItem/BattleItem";
import axios from "axios";
import {getApiLink} from "../../functions/getApiLink";
import {IBattleGame, IUser} from "../../model";
import {getWsLink} from "../../functions/getWsLink";
import {setNotice, setTrigger} from "../../redux/toolkitSlice";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router";

interface IBattleProps {

}

const LobbySocket = new WebSocket(getWsLink("ws/api/battle/lobby/"))

export const Battle: React.FC<IBattleProps> = () => {

    const [battleLobby, setBattleLobby]: any = useState<IBattleGame[]>([])

    LobbySocket.onopen = () => console.log('asd')
    LobbySocket.onmessage = e => {
        const data = JSON.parse(JSON.parse(e.data))

        const handleChangeRoom = () => {
            const itemIndex = battleLobby.findIndex((item: any) => item.id === data.data.id);

            setBattleLobby((prev: any) => [...prev.slice(0, itemIndex), data.data, ...prev.slice(itemIndex + 1)])
        }

        const handleNewRoom = () => {
            setBattleLobby((prev: any) => [data.data, ...prev])
        }

        const types: any = {
            "change_room": handleChangeRoom,
            "new_room": handleNewRoom,
        }

        types[data?.type] && types[data?.type]()
    }


    useEffect(() => {
        axios.get(getApiLink("api/battle/list/")).then(({data}) => {
            setBattleLobby(data)
        })
    }, [])

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)

    const navigateToCreateBattle = () => {
        if (!Object.keys(userInfo).length) {
            return dispatch(setNotice("beforeYouNeedAuth"))
        }

        navigate("/battle/create-battle")
        dispatch(setTrigger("CHANGE_RIGHT_BLOCK"))
    }

    return (
        <BattleStyled>
            <div className="top">
                <BattleTop/>
                <div className="create-battle">
                    <button onClick={navigateToCreateBattle}>
                        Создать игру
                    </button>
                </div>
            </div>

            <div className="list">
                <ul>

                    {
                        battleLobby.map((item: any) =>
                            <BattleItem itemData={item} key={item.id}/>
                        )
                    }

                </ul>
            </div>
        </BattleStyled>
    )
}
