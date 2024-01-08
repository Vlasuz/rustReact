import React, {useContext, useEffect} from 'react'
import userIcon from "../../../assets/images/user2.png";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {BattlePlayer} from "../../../components/battlePlayer/BattlePlayer";
import {GameSocket} from "../BattleSingle";

interface IBattleTeam2v2Props {

}

export const BattleTeam2v2:React.FC<IBattleTeam2v2Props> = () => {

    const webSocket: any = useContext(GameSocket)

    const position1 = webSocket?.battle?.players.filter((item: any) => item.position === 1)[0]
    const position2 = webSocket?.battle?.players.filter((item: any) => item.position === 2)[0]
    const position3 = webSocket?.battle?.players.filter((item: any) => item.position === 3)[0]
    const position4 = webSocket?.battle?.players.filter((item: any) => item.position === 4)[0]

    return (
        <div className={`bottom__people bottom__team-2v2`}>
            <BattlePlayer color={"blue"} position={1} direction={"left"} player={position1} />
            <BattlePlayer color={"blue"} position={2} direction={"left"} player={position2} />
            <strong>
                VS
            </strong>
            <BattlePlayer color={"red"} position={3} direction={"right"} player={position3} />
            <BattlePlayer color={"red"} position={4} direction={"right"} player={position4} />
        </div>
    )
}
